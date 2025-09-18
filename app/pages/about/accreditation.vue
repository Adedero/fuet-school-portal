<script setup lang="ts">
import { ShieldCheck, Building2, CheckCircle, ChevronRight } from "lucide-vue-next";

const approvedFaculties = [
  "Faculty of Nature and Applied Sciences",
  "Faculty of Agriculture Technology",
  "Faculty of Environmental Management Sciences",
  "Faculty of Engineering Technology",
  "Faculty of Educational Technology",
  "Faculty of Management Technology",
];

const accDetails = `These faculties have been approved by the National Universities Commission (NUC) for the commencement of academic activities at FUET. It means that FUET meets the regulatory standards for governance, quality of curriculum, staff qualifications, and infrastructure under these faculties.`;

const quickLinks = [
  { url: "/academics/undergraduate", label: "Faculties & Departments" },
  { url: "/application", label: "Admissions" },
  { url: "/academic-calendar", label: "Academic Calendar" },
  { url: "/news", label: "News & Events" },
  { url: "/portal/student", label: "Student Portal" },
];
</script>

<template>
  <!-- Breadcrumbs -->
  <nav
    class="section-padding pt-8 pb-2 flex items-center text-sm text-gray-500 gap-1"
    aria-label="Breadcrumb"
  >
    <NuxtLink to="/" class="hover:underline text-primary-500 font-medium">Home</NuxtLink>
    <ChevronRight class="w-4 h-4 mx-1 text-gray-400" />
    <span class="text-gray-700 font-semibold">Accreditation & NUC Approval</span>
  </nav>

  <section id="accreditation-start" class="overflow-hidden">
    <!-- Hero -->
    <div
      class="relative section-padding py-32 bg-cover bg-center text-center text-white"
      style="background-image: url('/images/Federal-University-Ogoni.jpg')"
    >
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <ShieldCheck class="w-12 h-12 text-primary-400 mx-auto mb-4" />
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          NUC-Approved Faculties
        </h1>
        <p class="text-lg text-gray-200 mt-4">
          FUET has obtained approval from the National Universities Commission to commence
          with the following faculties.
        </p>
      </div>
    </div>

    <!-- Approved Faculties List -->
    <div
      class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100"
    >
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2">
          <Building2 class="w-6 h-6 text-primary-400" />
          Approved for Takeoff
        </h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <li
            v-for="fac in approvedFaculties"
            :key="fac"
            class="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <CheckCircle class="w-8 h-8 text-primary-400" />
            <span class="text-lg font-medium text-gray-700">{{ fac }}</span>
          </li>
        </ul>

        <p class="mt-10 text-gray-700 text-base leading-relaxed">
          {{ accDetails }}
        </p>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="bg-primary py-6 section-padding mt-10">
      <div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between">
        <div v-for="link in quickLinks" :key="link.url" class="h-16 flex-center">
          <NuxtLink
            :to="link.url"
            class="flex items-center gap-2 text-white hover:underline text-base font-medium group"
          >
            <ChevronRight
              class="w-4 h-4 text-white opacity-70 group-hover:translate-x-1 transition-transform"
            />
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
