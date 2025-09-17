<script setup>
const events = [
  {
    day: "02",
    month: "Sep",
    title: "FUET Signs MoU with Kenule Beeson Saro-Wiwa Polytechnic",
    date: "2025-09-02 @ 10:30 AM",
    venue: "Ken Saro-Wiwa Polytechnic",
    category: "Conference",
    image: "/images/FUET Signs MoU with Kenule Beeson Saro-Wiwa Polytechnic.jpg" // education setting
  },
  {
    day: "15",
    month: "Aug",
    title: "Facility Tour",
    date: "2025-08-15 @ 10:00 AM",
    venue:
      "Federal University of Environment and Technology, Koroma/Sakpenwa, Rivers State.",
    category: "Tour",
    image: "/images/Facility Tour.jpg" // campus/lab tour
  }, // <-- Add comma here
  {
    day: "08",
    month: "Aug",
    title:
      "FUET Signs MoU with Rivers State University for Academic Collaboration",
    date: "2025-08-08 @ 10:00 AM",
    venue:
      "Rivers State University (RSU) Nkpolu – Oroworukwo, Port Harcourt, Rivers State.",
    category: "Conference",
    image:
      "/images/FUET Signs MoU with Rivers State University for Academic Collaboration.jpg" // collaboration meeting
  }
];
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center space-y-4 mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-green-700">
          Upcoming Events
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay informed about the latest conferences, tours, and academic
          collaborations at FUET.
        </p>
      </div>

      <!-- Events Grid -->
      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="item in events"
          :key="item.title"
          class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col"
        >
          <!-- Image -->
          <NuxtImg
            :src="item.image"
            :alt="item.title"
            class="h-48 w-full object-cover object-center"
            placeholder
          />

          <!-- Content -->
          <div class="p-5 flex-1 flex flex-col space-y-3">
            <div class="flex items-center gap-3 text-sm text-gray-500">
              <div
                class="text-center bg-green-700 text-white px-3 py-2 rounded-md"
              >
                <p class="text-lg font-bold leading-none">{{ item.day }}</p>
                <p class="text-xs uppercase">{{ item.month }}</p>
              </div>
              <span>{{ item.date }}</span>
            </div>

            <h3 class="font-semibold text-lg text-green-700">
              {{ item.title }}
            </h3>

            <p class="text-sm text-gray-600">
              <span class="font-medium">📍 Venue:</span> {{ item.venue }}
            </p>

            <NuxtBadge
              :label="item.category"
              color="success"
              variant="subtle"
              class="w-fit"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
