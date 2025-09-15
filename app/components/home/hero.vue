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
      <div
        class="grid md:gap-x-10 lg:gap-x-20 gap-y-10 md:grid-cols-2 md:items-center"
      >
        <div class="text-center md:text-left space-y-5">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>

          <p class="text-muted">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur alias repellat optio quo nostrum, eaque perspiciatis
            blanditiis, laboriosam ipsam molestias quae. Ab, dolorum placeat ex
            est pariatur nulla ipsa. Impedit?
          </p>

          <div class="flex items-center justify-center md:justify-normal gap-2">
            <NuxtButton label="Join us now" />
            <NuxtButton label="Get to know more" variant="link" />
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
            <NuxtImg
              src="https://media.gettyimages.com/id/1336667150/video/female-college-student-apologize-to-professor-for-late-arrival-to-class.jpg?s=640x640&k=20&c=n19Aj3x_5MZa6abztQdJzMfPiIsRJEJmVyas-rQ5Nmk="
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
          v-for="sponsor in sponsors"
          :key="sponsor.url"
          class="h-20 overflow-y-hidden flex-center"
        >
          <NuxtImg :src="sponsor.url" :width="sponsor.width" />
        </div>
      </div>
    </div>
  </section>
</template>
