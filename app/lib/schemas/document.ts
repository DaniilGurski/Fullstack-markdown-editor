import { z } from "zod";

export const DocumentSchema = z.object({
  user_id: z.string(),
  id: z.string(),
  document_name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  content: z.string(),
});
