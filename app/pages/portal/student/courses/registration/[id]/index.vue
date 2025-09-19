<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCourseRegistration } from "@/composables/use-course-registration";

definePageMeta({ layout: "portal-student" });
const config = useRuntimeConfig();


const route = useRoute();
const { getRegistration } = useCourseRegistration();

const reg = getRegistration(route.params.id as string);

const printPage = () => {
    window.print();
};
</script>

<template>
    <div class="p-6 max-w-4xl mx-auto bg-white text-subtle-600 print:p-0 print:m-0">
        <!-- Breadcrumbs -->
        <nav class="mb-4 flex items-center text-sm text-gray-500 gap-2 print:hidden" aria-label="Breadcrumb">
            <NuxtLink to="/portal/student" class="hover:text-primary-600 flex items-center gap-1">
                <i class="i-lucide-home w-4 h-4"></i>
                <span>Student Portal</span>
            </NuxtLink>
            <span class="mx-1">/</span>
            <NuxtLink to="/portal/student/courses" class="hover:text-primary-600">Courses</NuxtLink>
            <span class="mx-1">/</span>
            <span class="text-gray-700 font-medium">Registration Slip</span>
        </nav>
        <!-- Header -->
        <div class="text-center mb-6 border-b border-muted pb-4">
            <div class="grid place-items-center">
                <AppLogo class="w-28" />
            </div>
            <h1 class="text-xl font-bold uppercase text-primary-500">{{ config.public.schoolNameShort }} Student Portal
            </h1>
            <p class="text-lg">{{ config.public.schoolNameLong }}</p>
            <p clas="text-sm"> Koroma/Sakpenwa, Rivers State</p>
            <p class="text-xl mt-8 font-semibold">Official Course Registration Slip</p>
        </div>

        <!-- Student & Registration Info -->
        <div class="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
                <p><strong>Name:</strong> Jane Doe</p>
                <p><strong>Matric No:</strong> FUET/2025/12345</p>
                <p><strong>Department:</strong> Computer Science</p>
            </div>
            <div>
                <p><strong>Session:</strong> {{ reg?.session }}</p>
                <p><strong>Semester:</strong> {{ reg?.semester }}</p>
                <p><strong>Level:</strong> 500</p>
            </div>
        </div>

        <!-- Courses Table -->
        <table class="w-full border text-sm mb-6">
            <thead class="bg-gray-100">
                <tr>
                    <th class="border p-2">Code</th>
                    <th class="border p-2">Course Title</th>
                    <th class="border p-2">Credits</th>
                    <th class="border p-2">Type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="course in reg?.courses" :key="course.id">
                    <td class="border p-2 text-center">{{ course.code }}</td>
                    <td class="border p-2">{{ course.title }}</td>
                    <td class="border p-2 text-center">{{ course.credits }}</td>
                    <td class="border p-2 text-center capitalize">{{ course.type }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Summary -->
        <div class="text-sm mb-12 flex items-center gap-4 justify-center">
            <p><strong>Total Courses:</strong> {{ reg?.courses.length }}</p>
            <p>
                <strong>Total Credits:</strong>
                {{reg?.courses.reduce((sum, c) => sum + c.credits, 0)}}
            </p>
        </div>

        <!-- Signature Area -->
        <div class="flex justify-between mt-12 text-sm">
            <div class="text-center">
                __________________________ <br />
                Student's Signature & Date
            </div>
            <div class="text-center">
                __________________________ <br />
                HOD’s Signature & Date
            </div>
        </div>

        <!-- Print Button (hidden when printing) -->
        <div class="mt-6 print:hidden flex items-center">
        <NuxtButton label="Print" @click="printPage" variant="solid" class="mx-auto px-8"  />
         
        </div>
    </div>
</template>
