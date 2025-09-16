import type { ServerFile } from "~~/types";

interface CreateServerFileResult {
  data: ServerFile | null;
  error: Error | null;
}
export default async function createServerFile(
  file: File
): Promise<CreateServerFileResult> {
  const { data, error } = await fileToBase64(file);

  // Split filename
  const parts = file.name.split(".");
  const ext = parts.length > 1 ? parts.pop()! : null;
  const baseName = parts.join(".");

  return {
    data: data
      ? {
          name: baseName,
          size: file.size,
          type: file.type,
          ext,
          data
        }
      : null,
    error: error ?? null
  };
}

interface FileToBase64Result {
  data: string | null;
  error: Error | null;
}
export async function fileToBase64(file: File): Promise<FileToBase64Result> {
  return new Promise<FileToBase64Result>((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve({ data: reader.result as string, error: null });
    reader.onerror = () =>
      resolve({ data: null, error: new Error("Failed to process file") });
  });
}
