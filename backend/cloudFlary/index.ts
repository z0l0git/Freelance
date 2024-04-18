import { Response, Request } from "express";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 } from "uuid";

const S3 = new S3Client({
  endpoint:
    "https://19b4a385d35751dc87a413c6ef6ed651.r2.cloudflarestorage.com/fooddelivery",
  credentials: {
    accessKeyId: "6330086e9cc310829976df5cbf43c5d0",
    secretAccessKey:
      "f51ba9dcd8122104c1e248f37fdd3f44afcd0cd912ffa9e90fba1caa8230efb2",
  },
  region: "auto",
});

export async function getPresignedUrl(req: Request, res: Response) {
  const id = v4();

  const url = await getSignedUrl(
    S3,
    new PutObjectCommand({
      Bucket: "fooddelivery",
      Key: id,
    }),
    {
      expiresIn: 60 * 60,
    }
  );

  res.send({
    uploadUrl: url,
    accessUrls:
      "https://pub-fc956056e24d4374bc02f28210a03ea5.r2.dev/fooddelivery%2F" +
      id,
  });
}
