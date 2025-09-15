/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ZodObject } from "zod";

interface SaveOptions<T extends Record<string, any>> {
  applicationId: string;
  state: T;
  schema: ZodObject;
  toast?: ReturnType<typeof useToast>;
  onSuccess?: () => Promise<void> | void;
}

export const save = async <T extends Record<string, any>>(
  options: SaveOptions<T>
) => {
  const { applicationId, state, schema, onSuccess, toast } = options;

  const error = ref<Error | null>(null);

  try {
    const result = await schema.safeParseAsync(state);
    if (!result.success) {
      throw new Error(result.error.issues[0]?.message ?? "Validation error");
    }

    const validatedState = result.data as T;

    const res = await $fetch(
      `/api/users/applicant/applications/${applicationId}`,
      { method: "PUT", body: validatedState }
    );
    const data = ref(res);

    if (onSuccess) {
      onSuccess();
    }

    if (toast) {
      toast.add({
        color: "success",
        title: "Success",
        description: res.message
      });
    }

    return {
      data,
      error
    };
  } catch (err) {
    if (toast) {
      toast.add({
        color: "error",
        title: "Error",
        description: normalizeException(err).message
      });
    }

    return {
      data: ref(null),
      error: normalizeException(err)
    };
  }
};
