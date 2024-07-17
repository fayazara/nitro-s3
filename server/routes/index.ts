import { validateBlob } from "~/utils/blob";
import { FileStorage } from "~/services/storage";

export default defineEventHandler(async (event) => {
  const form = await readFormData(event);
  const image = form.get("image");

  if (!(image instanceof Blob)) {
    throw new Error("Image is not a Blob");
  }
  validateBlob(image, {
    maxSize: "1MB",
    types: ["image/png", "image/jpeg", "image/webp"],
  });

  const imageId = Math.random().toString(36).substring(2, 15);
  const uniqueKey = `${imageId}-${image.name}`;

  const storageService = new FileStorage();
  await storageService.upload(uniqueKey, image);
  const publicUrl = storageService.getObjectUrl(uniqueKey);
  return publicUrl;
});
