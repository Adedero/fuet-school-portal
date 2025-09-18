<script setup lang="ts">
import {
  GraduationCap,
  Building2,
  ArrowRight,
  BookOpen,
  Users,
  ChevronRight
} from "lucide-vue-next";
const faculties = [
  {
    name: "Faculty of Nature and Applied Sciences",
    departments: [
      "Biochemistry",
      "Microbiology",
      "Physics & Electronics",
      "Mathematics",
      "Chemistry",
      "Biology",
      "Statistics",
      "Computer Science"
    ]
  },
  {
    name: "Faculty of Agriculture Technology",
    departments: [
      "Agriculture (General)",
      "Crop Science",
      "Soil Science",
      "Animal Science",
      "Fisheries & Aquaculture",
      "Forestry & Wildlife Management",
      "Agricultural Extension & Rural Development"
    ]
  },
  {
    name: "Faculty of Environmental Management Sciences",
    departments: [
      "Environmental Management",
      "Estate Management",
      "Urban & Regional Planning",
      "Surveying & Geoinformatics",
      "Architecture",
      "Building Technology",
      "Geography & Environmental Studies"
    ]
  },
  {
    name: "Faculty of Engineering Technology",
    departments: [
      "Civil & Environmental Engineering",
      "Electrical & Electronics Engineering",
      "Mechanical Engineering",
      "Computer Engineering",
      "Petroleum Engineering",
      "Chemical Engineering",
      "Mining Engineering"
    ]
  },
  {
    name: "Faculty of Educational Technology",
    departments: [
      "Educational Foundations",
      "Science Education",
      "Mathematics Education",
      "Curriculum & Instructional Technology",
      "Educational Management",
      "Guidance & Counselling"
    ]
  },
  {
    name: "Faculty of Management Technology",
    departments: [
      "Business Administration",
      "Accounting",
      "Banking & Finance",
      "Marketing",
      "Entrepreneurship",
      "Public Administration",
      "Management Information Systems"
    ]
  }
];


const requirements = [
  "Choose FUET as your first choice on JAMB CAPS.",
  "Score a minimum of 150 in UTME.",
  "Have at least 5 O’Level credits including English and Mathematics (WAEC, NECO, NABTEB).",
  "Results may be in one or two sittings.",
  "Applicants must be at least 16 years old."
];

const quickLinks = [
  { url: "/application", label: "Post-UTME / Apply Now" },
  { url: "/scholarships", label: "Scholarships" },
  { url: "/academic-calendar", label: "Academic Calendar" },
  { url: "/news", label: "News & Events" },
  { url: "/portal/student", label: "Student Portal" }
];
</script>

<template>
  <div>
    <!-- Breadcrumbs -->
    <nav
      class="section-padding pt-8 pb-2 flex items-center text-sm text-gray-500 gap-1"
      aria-label="Breadcrumb"
    >
      <NuxtLink to="/" class="hover:underline text-primary-500 font-medium"
        >Home</NuxtLink
      >
      <ChevronRight class="w-4 h-4 mx-1 text-gray-400" />
      <NuxtLink
        to="/academics"
        class="hover:underline text-primary-500 font-medium"
        >Academics</NuxtLink
      >
      <ChevronRight class="w-4 h-4 mx-1 text-gray-400" />
      <span class="text-gray-700 font-semibold">Undergraduate</span>
    </nav>
    <section id="admissions">
      <!-- Hero Intro -->
      <div
        class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100"
      >
        <div class="max-w-4xl mx-auto text-center space-y-6">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span class="inline-block align-middle mx-2"
              ><GraduationCap class="inline w-8 h-8 text-primary-500" /></span
            ><br />
            Faculties & Departments
          </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the faculties and departments at FUET, and review the
            requirements for admission into our accredited programmes.
          </p>
        </div>
      </div>

      <!-- Admission Requirements -->
      <div class="section-padding py-16 bg-slate-950 text-white">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen class="w-6 h-6 text-primary-500" /> Admission Requirements
          </h2>
          <ul class="space-y-3 text-gray-200 list-disc list-inside text-lg">
            <li v-for="(req, idx) in requirements" :key="idx">{{ req }}</li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="w-full h-1 bg-gradient-to-r from-green-200 via-green-100 to-green-200 my-10 rounded-full"
      ></div>

      <!-- Faculties & Departments -->
      <div
        class="bg-gradient-to-br from-green-50 via-white to-green-100 section-padding py-20"
      >
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl font-bold mb-10 text-center flex gap-2">
            <Building2 class="w-6 h-6 text-primary-500" /> Faculties &
            Departments
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div
              v-for="faculty in faculties"
              :key="faculty.name"
              class="bg-white p-7 border duration-300 group"
            >
              <h3 class="font-semibold text-lg mb-4 flex items-center gap-2">
                <Users
                  class="w-5 h-5 text-primary-500 group-hover:text-primary-500 transition-colors"
                />
                {{ faculty.name }}
              </h3>
              <ul class="space-y-2 text-gray-600 list-disc list-inside">
                <li
                  v-for="dept in faculty.departments"
                  :key="dept"
                  class="flex items-center gap-2"
                >
                  <ArrowRight class="w-4 h-4 text-primary-400" />
                  <span>{{ dept }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div
        class="section-padding py-20 text-center bg-gradient-to-br from-green-100 via-white to-green-50"
      >
        <h2
          class="text-2xl font-bold text-primary-500 mb-4 flex items-center justify-center gap-2"
        >
          <GraduationCap class="w-6 h-6 text-primary-500" /> Ready to Apply?
        </h2>
        <p class="text-gray-600 mb-6 text-lg">
          Begin your journey at the Federal University of Environment &
          Technology today.
        </p>
        <NuxtButton
          to="/application"
          label="Apply Now"
          class="text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg transition"
        />
      </div>

      <!-- Quick Links Bar -->
      <div class="bg-primary py-6 section-padding">
        <div
          class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between"
        >
          <div
            v-for="link in quickLinks"
            :key="link.url"
            class="h-16 overflow-y-hidden flex-center"
          >
            <NuxtLink
              :to="link.url"
              class="flex items-center gap-2 text-white hover:underline text-base font-medium"
            >
              <ArrowRight class="w-4 h-4 text-white opacity-70" />
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
