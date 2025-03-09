import { DocumentSchema } from "../schemas/document";
import { z } from "zod";

export type TDocument = z.infer<typeof DocumentSchema>;
