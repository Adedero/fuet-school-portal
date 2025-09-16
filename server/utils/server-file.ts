import path from "node:path";
import fs from "node:fs/promises";
import crypto from "node:crypto";

import type { ServerFile } from "~~/shared/schemas/server-file.schema";

export function base64ToFile(base64String: string): {
  buffer: Buffer;
  type: string | null;
} {
  let type: string | null = null;
  let base64Data: string = "";

  if (base64String.includes("base64")) {
    const [data, base64] = base64String.split("base64");
    type = data.split(":")[1] || null;
    base64Data = base64;
  } else {
    base64Data = base64String;
  }

  const buffer = Buffer.from(base64Data, "base64");

  return { buffer, type };
}

interface SaveFileToLocalOptions {
  file: ServerFile;
  transform?: (file: ServerFile) => ServerFile;
  path: string; // relative to project/public
  createUniqueFileName?: boolean;
  replaceExistingFile?: boolean;
}

export async function saveFileToLocal({
  file,
  transform,
  path: absolutePath,
  createUniqueFileName = true,
  replaceExistingFile = true
}: SaveFileToLocalOptions) {
  const updatedFile =
    transform && typeof transform === "function" ? transform(file) : file;

  // Convert base64 to Buffer
  const { buffer } = base64ToFile(updatedFile.data);

  // Extension
  const ext = updatedFile.ext ? `.${updatedFile.ext}` : "";

  // File name
  let fileName: string;
  if (createUniqueFileName) {
    const randomId = crypto.randomBytes(16).toString("hex");
    fileName = `${updatedFile.name}-${randomId}${ext}`;
  } else {
    fileName = updatedFile.name + ext;
  }

  const outputDir = path.resolve("public", absolutePath);
  await fs.mkdir(outputDir, { recursive: true });

  const filePath = path.join(outputDir, fileName);

  // Prevent overwriting if not allowed
  if (!replaceExistingFile && !createUniqueFileName) {
    try {
      await fs.access(filePath);
      throw new Error(`File already exists: ${fileName}`);
    } catch {
      // safe, file doesn’t exist
    }
  }

  // Write file
  await fs.writeFile(filePath, buffer);

  // Public-facing URL
  const url = `/${absolutePath}/${fileName}`.replace(/\\/g, "/");

  return {
    url,
    fileName,
    absolutePath: filePath
  };
}

interface DeleteFileResult {
  success: boolean;
  filePath: string;
  error: string | null;
}

interface DeleteFileOptions {
  removeEmptyFiles?: boolean; // default true
}

export async function deleteFileFromLocal(
  url: string,
  options: DeleteFileOptions = { removeEmptyFiles: true }
): Promise<DeleteFileResult> {
  // Remove leading slash if present
  const relativePath = url.startsWith("/") ? url.slice(1) : url;

  // Resolve against "public"
  const filePath = path.resolve("public", relativePath);

  try {
    await fs.unlink(filePath);

    if (options.removeEmptyFiles !== false) {
      const dirPath = path.dirname(filePath);
      if (await isDirEmpty(dirPath)) {
        await fs.rmdir(dirPath);
      }
    }

    return { success: true, filePath, error: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.code === "ENOENT") {
      // File doesn’t exist
      return { success: false, error: "File not found", filePath };
    }
    throw error;
  }
}

export async function isDirEmpty(dirPath: string): Promise<boolean> {
  try {
    const dir = await fs.opendir(dirPath);
    const entry = await dir.read(); // only read one entry
    await dir.close();
    return entry === null; // null means no files
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.code === "ENOENT") return true; // treat missing dir as empty
    throw err;
  }
}
