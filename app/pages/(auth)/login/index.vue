<script setup lang="ts">
import LoginForm from "./login-form.vue";

definePageMeta({
  layout: "auth"
});
</script>

<template>
  <div>
    <header class="mb-5">
      <h1 class="text-xl font-bold">
        <span class="text-primary-500">Log</span> In
      </h1>
      <p class="text-muted text-sm">
      Access your account to apply, track application status, and manage your student profile.
      </p>
    </header>

    <LoginForm />
  </div>
</template>
