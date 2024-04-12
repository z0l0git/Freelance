import { Response } from "express";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 } from "uuid";

const s3 = new S3Client({
  region: "auto",
  endpoint:
    "https://19b4a385d35751dc87a413c6ef6ed651.r2.cloudflarestorage.com/freelancely",
  credentials: {
    accessKeyId: "5f066671a58311777d32a0dd1c5c1437",
    secretAccessKey:
      "0b87fd5a5da75477c3e9268009c7dbb311ac2c2aaaa5cd674f3c982cc7cc1830",
  },
});

export async function UploadImage() {
  const id = v4();

  const url = await getSignedUrl(
    s3,
    new PutObjectCommand({
      Bucket: "freelancely",
      Key: id,
    }),
    {
      expiresIn: 60 * 60,
    }
  );

  return Response.json({
    uploadUrl: url,
    accessUrls: "https://pub-bf7b9bf2df534bb09af4024ff55aa4f8.r2.dev/" + id,
  });
}
