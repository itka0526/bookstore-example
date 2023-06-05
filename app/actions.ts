import prisma from "@/lib/prisma";
import { BookModel } from "@/prisma/zod";
import { z } from "zod";

const requiredFieldsModel = BookModel.pick({ title: true, publishedDate: true, description: true, subject: true }).extend({ Author: z.string() });
const partialRequiredFieldsModel = requiredFieldsModel.extend({ Author: z.string() }).deepPartial();

export async function handleUpload(data: FormData) {
    "use server";

    const jsonData: z.infer<typeof partialRequiredFieldsModel> = Object.fromEntries(data);

    const publishedDate = data.get("publishedDate")?.toString();

    if (publishedDate && /^[0-9-]+$/.test(publishedDate)) {
        jsonData["publishedDate"] = new Date(Date.parse(publishedDate));
    }

    const validatedJsonData = requiredFieldsModel.safeParse(jsonData);

    if (validatedJsonData.success) {
        const { Author, description, publishedDate, subject, title } = validatedJsonData.data;
        const [firstName, lastName] = Author.split(" ");

        if (!firstName || !lastName) {
            // FIXME: What if mallicious requests were sent handle this!
        }

        try {
            const doesAuthorExist = await prisma.author.findFirst({
                where: { firstName, lastName },
                select: { id: true },
            });

            if (doesAuthorExist)
                await prisma.book.create({
                    data: {
                        title: title,
                        description: description,
                        publishedDate: publishedDate,
                        subject: subject,

                        Author: {
                            connect: {
                                id: doesAuthorExist.id,
                            },
                        },
                    },
                });
            else
                await prisma.book.create({
                    data: {
                        title,
                        description: description,
                        publishedDate: publishedDate,
                        subject: subject,

                        Author: {
                            create: {
                                firstName,
                                lastName,
                            },
                        },
                    },
                });
        } catch (err) {
            console.log(err);
            // TODO: Send a bad response if database fails
        }
    } else {
        console.log(validatedJsonData.error);
        // TODO: Write a handle for invalidJsonData
    }
}
