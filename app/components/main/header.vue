<script setup lang="ts">
import useLogout from "~/composables/use-logout";
import { useAuthStore } from "~/stores/auth.store";
import DropdownMenu from "./dropdown.vue";
const config = useRuntimeConfig();
const authStore = useAuthStore();
const { logout } = useLogout();

// App Name split
const appName = computed(() => {
  const [first, ...rest] = config.public.app.name.split(" ");
  return { val1: first, val2: rest.join(" ") };
});

// Portal Navigation
const roleRoutes: Record<string, string> = {
  applicant: "/application/portal",
  student: "/portal/student",
  admin: "/portal/admin",
  staff: "/portal/staff",
};

const navigateToPortal = async () => {
  const user = authStore.user.value;
  if (!authStore.isLoggedIn() || !user?.role) {
    return navigateTo("/login");
  }
  const path = roleRoutes[user.role];
  if (path) await navigateTo(path);
};

// Dropdown Data
const units = [
  { label: "Media Unit / Public Relations", to: "/units/media" },
  { label: "Registry", to: "/units/registry" },
  { label: "Finance & Accounts", to: "/units/finance" },
  { label: "Human Resources", to: "/units/hr" },
  { label: "ICT / Information Technology Unit", to: "/units/ict" },
  { label: "Students’ Affairs", to: "/units/students-affairs" },
  { label: "Library", to: "/units/library" },
  { label: "Internal Audit", to: "/units/audit" },
  { label: "Quality Assurance Unit", to: "/units/qa" },
];

const academics = [
  
  { label: "Undergraduate Programmes", to: "/academics/undergraduate" },
  { label: "Postgraduate Programmes", to: "/academics/postgraduate" },
  { label: "Research Centres & Institutes", to: "/academics/research" },
  { label: "Academic Calendar", to: "/academics/calendar" },
  { label: "Admissions", to: "/admissions" },
  { label: "Scholarships", to: "/academics/scholarships" },
  { label: "Academic Policies", to: "/academics/policies" },
];

const aboutFuet = [
  { label: "Vision & Mission", to: "/about/vision-mission" },
  { label: "History", to: "/about/history" },
  { label: "Leadership / Management", to: "/about/leadership" },
  { label: "Campus & Facilities", to: "/about/facilities" },
  { label: "Accreditation", to: "/about/accreditation" },
  { label: "Contacts", to: "/about/contact" },
  { label: "Location & Maps", to: "/about/location" },
];

</script>

<template>
  <header class="sticky top-0 z-50 bg-white px-5 md:px-10 lg:px-20 py-4 border-b border-b-muted">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <AppLogo :width="45" />
        <div>
          <p class="font-extrabold text-lg text-primary-500">
            Federal University of Engineering and Technology
            <!-- {{ appName.val1 }} -->
          </p>
          <p class="text-muted text-sm hidden md:block">
            Koroma/Saakpenwa, Ogoni
            <!-- {{ appName.val2 }} -->
          </p>
        </div>
      </NuxtLink>

      <!-- Navbar Links -->
      <div class="flex items-center gap-6">
        <DropdownMenu label="Units" :items="units" />
        <DropdownMenu label="Academic" :items="academics" />
        <DropdownMenu label="About FUET" :items="aboutFuet" />

        <!-- Auth Buttons -->
        <div>

          <div class="flex items-center gap-2">

            <NuxtButton to="/application" label="Apply Now" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
