import { z } from "zod";

const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.string(),
  MODAL_KEY: z.string(),
  MODAL_SECRET: z.string(),
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY_ID: z.string(),
  AWS_REGION: z.string(),
  S3_BUCKET_NAME: z.string(),
  TEXT_TO_SPEECH_ENDPOINT: z.string().url(),
  PHOTO_TO_VIDEO_ENDPOINT: z.string().url(),
  FILE_TO_S3_ENDPOINT: z.string().url(),
  NEXT_PUBLIC_SMALL_CREDIT_PACK_ID: z.string(),
  NEXT_PUBLIC_MEDIUM_CREDIT_PACK_ID: z.string(),
  NEXT_PUBLIC_LARGE_CREDIT_PACK_ID: z.string(), 
});

export const env = serverSchema.parse(process.env);