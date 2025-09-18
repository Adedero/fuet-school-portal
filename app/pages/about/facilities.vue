<script setup lang="ts">
import { ChevronRight, School, Users, Leaf, ShieldCheck } from 'lucide-vue-next';

const facilities = [
    {
        title: "Academic Excellence",
        desc: "Cutting-edge lecture halls, digital libraries, and research hubs designed to support world-class learning.",
        img: "/images/facilities/academic.jpg",
        icon: School
    },
    {
        title: "Student Life",
        desc: "Modern hostels, dining halls, student union activities, and recreational spaces for a vibrant campus life.",
        img: "/images/facilities/student-life.jpg",
        icon: Users
    },
    {
        title: "Eco-Smart Campus",
        desc: "A green, sustainable environment powered by smart energy, landscaped gardens, and ICT-driven systems.",
        img: "/images/facilities/eco-campus.jpg",
        icon: Leaf
    },
    {
        title: "Health & Safety",
        desc: "Fully equipped medical center, 24/7 security, and responsive campus emergency services.",
        img: "/images/facilities/health-safety.jpg",
        icon: ShieldCheck
    }
];

const quickLinks = [
    { url: "/application", label: "Admissions" },
    { url: "/faculties", label: "Faculties & Departments" },
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
        <span class="text-gray-700 font-semibold">Campus & Facilities</span>
    </nav>

    <section id="campus-facilities">
        <!-- Hero -->
        <div class="relative section-padding py-32 bg-cover bg-center text-center text-white"
            style="background-image: url('/images/admin_block.jpg')">
            <div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
            <div class="relative z-10 max-w-3xl mx-auto">
                <h1
                    class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-3">
                    <School class="w-10 h-10 text-primary-400" /> Campus & Facilities
                </h1>
                <p class="text-lg text-gray-200">
                    A modern, sustainable, and student-centered environment designed for learning, growth, and
                    innovation.
                </p>
            </div>
        </div>

        <!-- Divider -->
        <div class="w-full h-1 bg-gradient-to-r from-green-200 via-green-100 to-green-200 my-10 rounded-full"></div>

        <!-- Facilities Grid -->
        <div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
            <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                <div v-for="facility in facilities" :key="facility.title"
                    class="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-green-100">
                    <img :src="facility.img" :alt="facility.title"
                        class="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                        @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/600x288?text=Facility'" />
                    <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
                    <div class="absolute inset-0 flex flex-col justify-end p-8">
                        <div class="flex items-center gap-2 mb-2">
                            <component :is="facility.icon" class="w-7 h-7 text-primary-400 drop-shadow" />
                            <h3 class="text-2xl font-bold text-white">{{ facility.title }}</h3>
                        </div>
                        <p class="text-gray-200 text-base">{{ facility.desc }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick Links -->
        <div class="bg-primary py-6 section-padding mt-10">
            <div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between">
                <div v-for="link in quickLinks" :key="link.url" class="h-16 flex-center">
                    <NuxtLink :to="link.url"
                        class="flex items-center gap-2 text-white hover:underline text-base font-medium group">
                        <ChevronRight
                            class="w-4 h-4 text-white opacity-70 group-hover:translate-x-1 transition-transform" />
                        {{ link.label }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
