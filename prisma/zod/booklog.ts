import * as z from "zod"
import { CompletePerson, RelatedPersonModel, CompleteBook, RelatedBookModel } from "./index"

export const BookLogModel = z.object({
  id: z.number().int(),
  title: z.string(),
  productId: z.string(),
  checkInTime: z.date(),
  checkOutTime: z.date(),
  personId: z.number().int(),
})

export interface CompleteBookLog extends z.infer<typeof BookLogModel> {
  person: CompletePerson
  book: CompleteBook
}

/**
 * RelatedBookLogModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBookLogModel: z.ZodSchema<CompleteBookLog> = z.lazy(() => BookLogModel.extend({
  person: RelatedPersonModel,
  book: RelatedBookModel,
}))
