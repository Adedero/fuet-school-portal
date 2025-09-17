<script setup lang="ts">
const navigate = useNavigateToPortal();

const stats = [
  {
    id: 1,
    value: "10",
    label: "Professors"
  },
  {
    id: 2,
    value: "5",
    label: "Certified Programs"
  },
  {
    id: 3,
    value: "A",
    label: "Accreditation"
  }
];

const links: { to?: string; label: string; onClick?: () => void }[] = [
  { to: "/", label: "Admissions" },
  { to: "/", label: "Academic Programs" },
  { to: "/", label: "News & Events" },
  { label: "Student Portal", onClick: () => navigate() }
];
</script>

<template>
  <section id="hero">
    <div class="section-padding py-10">
      <div
        class="grid md:gap-x-10 lg:gap-x-20 gap-y-10 md:grid-cols-2 md:items-center"
      >
        <div class="text-center md:text-left space-y-5">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Pioneering <span class="text-primary-500">Innovation</span>- <br />
            <span>Nurturing Sustainability</span>
          </h1>

          <p class="text-muted">
            We offer accredited programmes in environmental science, technology,
            and applied research—designed to empower you for global impact.
          </p>

          <div class="flex items-center justify-center md:justify-normal gap-2">
            <NuxtButton to="/application" label="Join us now" />
            <NuxtButton label="Explore Programs" variant="link" />
          </div>

          <div class="flex items-center justify-center md:justify-normal gap-5">
            <div v-for="stat in stats" :key="stat.id">
              <p class="font-bold">
                <span class="text-2xl md:text-3xl lg:text-4xl">
                  {{ stat.value }}</span
                >
                <span class="text-primary-500 text-lg lg:text-xl">+</span>
              </p>
              <p class="text-muted text-sm">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-muted h-[28rem] overflow-hidden rounded">
            <NuxtImg
              src="/images/admin_block.jpg"
              placeholder
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary py-2 section-padding">
      <div
        class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between"
      >
        <div
          v-for="link in links"
          :key="link.label"
          class="h-20 overflow-y-hidden flex-center"
        >
          <NuxtLink
            v-if="link.to"
            :to="link.to"
            class="flex items-center gap-2 text-white hover:underline"
          >
            {{ link.label }}
          </NuxtLink>

          <button
            v-if="link.onClick"
            class="flex items-center gap-2 text-white hover:underline cursor-pointer"
            @click="link.onClick"
          >
            {{ link.label }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
