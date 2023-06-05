import * as z from "zod"
import { CompleteBookLog, RelatedBookLogModel } from "./index"

export const PersonModel = z.object({
  id: z.number().int(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.date(),
  email: z.string(),
  age: z.number().int(),
  updatedAt: z.date(),
})

export interface CompletePerson extends z.infer<typeof PersonModel> {
  log: CompleteBookLog[]
}

/**
 * RelatedPersonModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPersonModel: z.ZodSchema<CompletePerson> = z.lazy(() => PersonModel.extend({
  log: RelatedBookLogModel.array(),
}))
