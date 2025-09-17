<script setup lang="ts">
import ChangePasswordForm from "./change-password-form.vue";

definePageMeta({
  layout: "auth"
});
</script>

<template>
  <div>
    <h1 class="text-lg font-semibold">Change Password</h1>

    <div class="my-5">
      <ChangePasswordForm />
    </div>

    <div>
      <NuxtSeparator class="my-5" />
      <p class="text-xs text-muted">
        Are you experiencing any issues?
        <NuxtLink class="link text-xs!" to="/contact"> Contact us. </NuxtLink>
      </p>
    </div>
  </div>
</template>
