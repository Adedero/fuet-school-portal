import { ref } from 'vue';
import { X as normalizeException } from '../nitro/nitro.mjs';
import 'node:path';
import 'node:fs/promises';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'drizzle-orm/libsql';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'ulid';
import 'nodemailer';
import '@iconify/utils';
import 'consola';
import 'ipx';

const save = async (options) => {
  const { applicationId, state, schema, onSuccess, toast } = options;
  const error = ref(null);
  try {
    const result = await schema.safeParseAsync(state);
    if (!result.success) {
      throw new Error(result.error.issues[0]?.message ?? "Validation error");
    }
    const validatedState = result.data;
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

export { save };
//# sourceMappingURL=handle-save-click-d4tY2V9Z.mjs.map
