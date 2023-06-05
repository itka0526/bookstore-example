import * as z from "zod"
import { Subject } from "@prisma/client"
import { CompleteAuthor, RelatedAuthorModel, CompleteBookLog, RelatedBookLogModel } from "./index"

export const BookModel = z.object({
  authorId: z.number().int(),
  title: z.string(),
  uploadedAt: z.date(),
  publishedDate: z.date(),
  description: z.string(),
  subject: z.nativeEnum(Subject),
})

export interface CompleteBook extends z.infer<typeof BookModel> {
  Author: CompleteAuthor
  log: CompleteBookLog[]
}

/**
 * RelatedBookModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBookModel: z.ZodSchema<CompleteBook> = z.lazy(() => BookModel.extend({
  Author: RelatedAuthorModel,
  log: RelatedBookLogModel.array(),
}))
