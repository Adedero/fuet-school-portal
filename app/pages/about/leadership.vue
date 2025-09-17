<script setup lang="ts">
import {
  UserRound,
  Users,
  Crown,
  Landmark,
  Star,
  ChevronRight,
  ArrowDown
} from "lucide-vue-next";
const leadership = {
  vc: {
    name: "Prof. Chinedu Mmom",
    title: "Vice-Chancellor",
    department:
      "Geography & Environmental Management, University of Port Harcourt",
    photo: "/images/Professor-Prince-Chinedu-Mmom-JP-DSSRS.webp"
  },
  proChancellor: {
    name: "Prof. Don Mon Baridam",
    title: "Pro-Chancellor / Chairman, Governing Council",
    background:
      "Professor of Management, Organisational Behaviour; formerly at University of Port Harcourt",
    photo: "/images/leadership/pro_chancellor_baridam.jpg"
  },
  councilMembers: [
    { name: "Mr. Emmanuel Onoja", region: "North Central", photo: "" },
    { name: "Mr. Hamid Adekunle", region: "South West", photo: "" },
    { name: "Prof. Chima Oji", region: "South East", photo: "" },
    { name: "Alhaji Abdullahi Magaji Lamda", region: "North West", photo: "" }
  ],
  principalOfficers: [
    {
      name: "Dr. Mpigi Monday Douglas",
      role: "Registrar",
      region: "South South",
      photo: ""
    },
    {
      name: "Zoryii Josco Nwaimanie",
      role: "Bursar",
      region: "North Central",
      photo: ""
    },
    {
      name: "Dr. Saghanen Ntogo G. B.",
      role: "Librarian",
      region: "South South",
      photo: ""
    }
  ]
};
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
      <NuxtLink to="/about" class="hover:underline text-primary-500 font-medium"
        >About FUET</NuxtLink
      >
      <ChevronRight class="w-4 h-4 mx-1 text-gray-400" />
      <span class="text-gray-700 font-semibold">Leadership & Management</span>
    </nav>
    <section
      class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100"
    >
      <div class="max-w-5xl mx-auto text-center space-y-6">
        <h1
          class="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight flex items-center justify-center gap-3"
        >
          <Crown class="w-8 h-8 text-primary-500 block" /> Leadership &
          Management
        </h1>
        <p class="text-lg text-gray-600">
          Meet the key figures guiding the vision, governance, and operations of
          FUET Ogoni.
        </p>
      </div>
    </section>

    <!-- Vice Chancellor Hero -->
    <section class="py-20 bg-slate-950">
      <div
        class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 rounded-2xl p-8 border border-green-100"
      >
        <div
          class="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"
        >
          <img
            :src="leadership.vc.photo"
            alt="Vice Chancellor"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="space-y-4 text-center md:text-left">
          <h2
            class="text-3xl font-extrabold text-primary-500 flex items-center gap-2"
          >
            <UserRound class="w-7 h-7 text-primary-500" />
            {{ leadership.vc.name }}
          </h2>
          <p class="text-xl text-gray-50">{{ leadership.vc.title }}</p>
          <p class="text-gray-100 flex items-center gap-2">
            <Landmark class="w-5 h-5 text-primary-400" />
            {{ leadership.vc.department }}
          </p>
        </div>
      </div>
    </section>

    <!-- Arrow to Pro Chancellor -->
    <div class="flex justify-center my-2">
      <ArrowDown class="w-8 h-8 text-primary-400" />
    </div>

    <!-- Pro Chancellor / Chair -->
    <section
      class="py-20 bg-gradient-to-br from-green-50 via-white to-green-100"
    >
      <div
        class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 rounded-2xl p-8 border border-green-100"
      >
        <div
          class="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"
        >
          <img
            :src="leadership.proChancellor.photo"
            alt="Pro Chancellor"
            class="w-full h-full object-cover"
            @error="e => ((e.target as HTMLImageElement).src = 'https://placehold.co/80x80?text=Chair')"
          />
        </div>
        <div class="space-y-4 text-center md:text-left">
          <h2
            class="text-2xl font-bold text-primary-500flex items-center gap-2"
          >
            <Star class="w-6 h-6 text-primary-500" />
            {{ leadership.proChancellor.name }}
          </h2>
          <p class="text-lg text-gray-700">
            {{ leadership.proChancellor.title }}
          </p>
          <p class="text-gray-600">{{ leadership.proChancellor.background }}</p>
        </div>
      </div>
    </section>

    <!-- Arrow to Council Members -->
    <div class="flex justify-center my-2">
      <ArrowDown class="w-8 h-8 text-primary-400" />
    </div>

    <!-- Divider -->
    <div
      class="w-full h-1 bg-gradient-to-r from-green-200 via-green-100 to-green-200 my-10 rounded-full"
    ></div>

    <!-- Governing Council Members -->
    <section class="section-padding py-16 bg-white">
      <div class="max-w-6xl mx-auto">
        <h3
          class="text-2xl font-bold text-primary-500mb-8 text-center flex items-center justify-center gap-2 mb-8"
        >
          <Users class="w-6 h-6 text-primary-500" /> Governing Council Members
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div
            v-for="member in leadership.councilMembers"
            :key="member.name"
            class="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl transition-shadow border border-green-100 flex flex-col items-center"
          >
            <div
              class="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mb-3 border-2 border-primary-300"
            >
              <img
                :src="member.photo || 'https://placehold.co/80x80?text=👤'"
                alt="Council Member"
                class="w-full h-full object-cover"
                @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/80x80?text=👤'"
              />
            </div>
            <div
              class="text-lg font-semibold text-gray-800 mb-1 text-center flex items-center gap-1"
            >
              <UserRound class="w-4 h-4 text-primary-400" /> {{ member.name }}
            </div>
            <div class="text-sm text-gray-600">{{ member.region }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Arrow to Principal Officers -->
    <div class="flex justify-center my-2">
      <ArrowDown class="w-8 h-8 text-primary-400" />
    </div>

    <!-- Principal Officers -->
    <section
      class="section-padding py-16 bg-gradient-to-br from-green-50 via-white to-green-100"
    >
      <div class="max-w-6xl mx-auto">
        <h3
          class="text-2xl font-bold text-primary-500mb-8 text-center flex items-center justify-center gap-2 mb-8"
        >
          <Star class="w-6 h-6 text-primary-500" /> Principal Officers
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div
            v-for="officer in leadership.principalOfficers"
            :key="officer.name"
            class="p-6 bg-white rounded-xl transition-shadow border border-green-100 flex flex-col items-center"
          >
            <div
              class="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mb-3 border-2 border-primary-300"
            >
              <img
                :src="officer.photo || 'https://placehold.co/80x80?text=👤'"
                alt="Officer"
                class="w-full h-full object-cover"
                @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/80x80?text=👤'"
              />
            </div>
            <div
              class="text-lg font-semibold text-gray-800 mb-1 text-center flex items-center gap-1"
            >
              <UserRound class="w-4 h-4 text-primary-400" /> {{ officer.name }}
            </div>
            <div class="text-gray-600">{{ officer.role }}</div>
            <div class="text-sm text-gray-500">{{ officer.region }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action or Message -->
    <section class="py-16 bg-white text-center">
      <div class="max-w-4xl mx-auto space-y-4">
        <p class="text-lg text-gray-700 flex items-center justify-center gap-2">
          <Crown class="w-6 h-6 text-primary-500" />
          The Governing Council and Principal Officers play critical roles in
          steering FUET towards its mission of excellence in environment &
          technology education.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Optional tweaks: hover and transitions */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}
</style>
