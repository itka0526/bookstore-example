import * as z from "zod"
import { CompleteBook, RelatedBookModel } from "./index"

export const AuthorModel = z.object({
  id: z.number().int(),
  firstName: z.string(),
  lastName: z.string(),
})

export interface CompleteAuthor extends z.infer<typeof AuthorModel> {
  Books: CompleteBook[]
}

/**
 * RelatedAuthorModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAuthorModel: z.ZodSchema<CompleteAuthor> = z.lazy(() => AuthorModel.extend({
  Books: RelatedBookModel.array(),
}))
