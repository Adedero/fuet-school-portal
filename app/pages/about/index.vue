<script setup lang="ts">
import { Building2, ChevronRight, GraduationCap, Target, Eye, User } from 'lucide-vue-next';

const aboutFuet = `The Federal University of Environment and Technology (FUET), located at Koroma/Sakpenwa in Rivers State, is a specialized institution committed to advancing knowledge in environmental sciences, engineering, technology, and sustainable development. FUET is designed to be a hub for cutting-edge research, innovation, and capacity building—equipping graduates with the skills needed to tackle global and national challenges in sustainability and environmental management.`;

const mission = `To provide high-quality education, research, and training in environmental sciences, engineering, technology, and applied disciplines, empowering students to contribute to national and global sustainable development.`;

const vision = `To be a world-class university of environment and technology, renowned for innovation, excellence, and leadership in sustainability.`;

const vcMessage = `Welcome to our website. I am honored to be the new Vice Chancellor of Federal University of Environment and Technology, Koroma/Sakpenwa. I have been entrusted with continuing the academic excellence of this university and enriching the quality of student life.`;

const quickLinks = [
  { url: "/faculties", label: "Faculties & Departments" },
  { url: "/application", label: "Admissions" },
  { url: "/academic-calendar", label: "Academic Calendar" },
  { url: "/news", label: "News & Events" },
  { url: "/portal/student", label: "Student Portal" }
];
</script>

<template>
  <!-- Breadcrumbs -->
  <nav class="section-padding pt-8 pb-2 flex items-center text-sm text-gray-500 gap-1" aria-label="Breadcrumb">
    <NuxtLink to="/" class="hover:underline text-primary-500 font-medium">Home</NuxtLink>
    <ChevronRight class="w-4 h-4 mx-1 text-gray-400" />
    <span class="text-gray-700 font-semibold">About FUET</span>
  </nav>

  <section id="about-fuet">
    <!-- Hero -->
    <div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
          <Building2 class="inline w-10 h-10 text-primary-500 mb-2" /> <br />
          About FUET
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn about the Federal University of Environment and Technology, our mission, vision, and leadership.
        </p>
      </div>
    </div>

    <!-- About Section -->
    <div class="section-padding py-20 bg-white">
      <div class="max-w-5xl mx-auto space-y-6 text-center">
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ aboutFuet }}
        </p>
      </div>
    </div>

    <!-- Mission & Vision -->
    <div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div class="bg-white p-8 border rounded shadow-sm">
          <h2 class="flex items-center gap-2 text-2xl font-bold text-primary-600 mb-4">
            <Target class="w-6 h-6" /> Mission
          </h2>
          <p class="text-gray-700 leading-relaxed">{{ mission }}</p>
        </div>
        <div class="bg-white p-8 border rounded shadow-sm">
          <h2 class="flex items-center gap-2 text-2xl font-bold text-primary-600 mb-4">
            <Eye class="w-6 h-6" /> Vision
          </h2>
          <p class="text-gray-700 leading-relaxed">{{ vision }}</p>
        </div>
      </div>
    </div>

    <!-- VC Welcome Note -->
    <div class="section-padding py-20 bg-white">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <h2 class="text-3xl font-bold text-primary-600 flex items-center justify-center gap-2">
          <User class="w-8 h-8 text-primary-500" /> Vice Chancellor's Welcome Note
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed italic">
          “{{ vcMessage }}”
        </p>
      </div>
    </div>

    <!-- Quick Links Bar -->
    <div class="bg-primary py-6 section-padding">
      <div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between">
        <div v-for="link in quickLinks" :key="link.url" class="h-16 overflow-y-hidden flex-center">
          <NuxtLink
            :to="link.url"
            class="flex items-center gap-2 text-white hover:underline text-base font-medium"
          >
            <ChevronRight class="w-4 h-4 text-white opacity-70" />
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
