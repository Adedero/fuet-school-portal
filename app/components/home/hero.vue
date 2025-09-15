<script setup lang="ts">
const stats = [
  {
    id: 1,
    value: "60",
    label: "Teachers"
  },
  {
    id: 2,
    value: "5k",
    label: "Students"
  },
  {
    id: 3,
    value: "A",
    label: "Accreditation"
  }
];

const sponsors = [
  {
    url: "/sponsors/oracle.svg",
    width: 110
  },
  {
    url: "/sponsors/python.svg",
    width: 120
  },
  {
    url: "/sponsors/cisco.svg",
    width: 80
  },
  {
    url: "/sponsors/microsoft.svg",
    width: 120
  },
  {
    url: "/sponsors/ted.svg",
    width: 60
  }
];
</script>

<template>
  <section id="hero">
    <div class="section-padding py-10">
      <div class="grid md:gap-x-10 lg:gap-x-20 gap-y-10 md:grid-cols-2 md:items-center">
        <div class="text-center md:text-left space-y-5">
          <h1 class="text-4xl md:text-5xl lg:text-5xl font-bold">
            Federal University of Environment & Technology, Ogoni

          </h1>
          <p>Pioneering Innovation • Nurturing Sustainability</p>

          <p class="text-muted">
            We offer accredited programmes in environmental science, technology, and applied research—designed to
            empower you for global impact.
          </p>

          <div class="flex items-center justify-center md:justify-normal gap-2">
            <NuxtButton label="Join us now" />
            <NuxtButton label="Explore Programs" variant="link" />
          </div>

          <div class="flex items-center justify-center md:justify-normal gap-5">
            <div v-for="stat in stats" :key="stat.id">
              <p class="font-bold">
                <span class="text-2xl md:text-3xl lg:text-4xl">{{
                  stat.value
                }}</span>
                <span class="text-primary-500 text-lg lg:text-xl">+</span>
              </p>
              <p class="text-muted text-sm">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-muted h-[28rem] overflow-hidden rounded">
            <img src="/images/admin_block.jpg" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary py-2 section-padding">
      <div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between">

        <div
          v-for="nav_link in [{ url: '/', label: 'Admissions' }, { url: '/', label: 'Academic Programs' }, { url: '/', label: 'News & Events' }, { url: 'https://fuet.netlify.app/portal', label: 'Student Portal' }, { url: '/staff-portal', label: 'Staff Portal' }]"
          :key="nav_link.url" class="h-20 overflow-y-hidden flex-center">
          <NuxtLink :to="nav_link.url" class="flex items-center gap-2 text-white hover:underline">
            {{ nav_link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
