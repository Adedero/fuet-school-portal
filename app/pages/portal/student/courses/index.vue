<script setup lang="ts">
import { useCourseRegistration } from "@/composables/use-course-registration";
definePageMeta({ layout: "portal-student" });
const { registrations } = useCourseRegistration();
</script>

<template>
    <div class="p-6 max-w-4xl mx-auto ">
        <h1 class="text-2xl font-bold mb-6">My Course Registrations</h1>

        <div v-if="registrations.length === 0" class="text-gray-400 font-[500] py-8 grid place-items-center  ">

            <p>No registrations yet.</p>


        </div>

        <div v-else>
            <div class="overflow-x-auto rounded-lg border border-default">
                <table class="min-w-full bg-white rounded-lg">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="border-b border-default p-3 text-left">Session</th>
                            <th class="border-b border-default p-3 text-left">Semester</th>
                            <th class="border-b border-default p-3 text-left">Courses Registered</th>
                            <th class="border-b border-default p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="reg in registrations" :key="reg.id" class="hover:bg-gray-100 transition">
                            <td class="border-b border-default p-3 font-semibold">{{ reg.session }}</td>
                            <td class="border-b border-default p-3">{{ reg.semester }}</td>
                            <td class="border-b border-default p-3">{{ reg.courses.length }}</td>
                            <td class="border-b border-default p-3">

                                <NuxtLink :to="`courses/registration/${reg.id}`">
                                    <NuxtButton label="view" variant="ghost" />

                                </NuxtLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="mt-4 flex justify-center w-full">
            <NuxtButton to="courses/register" label="Register Courses" size="sm" variant="solid" />
        </div>
    </div>
</template>
