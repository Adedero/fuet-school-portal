<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCourseRegistration } from "@/composables/use-course-registration";
import { NuxtButton, NuxtSelect, NuxtSelectMenu } from "#components";
import type { Session } from "~/components/app/session-select.vue";
definePageMeta({ layout: "portal-student" });
const router = useRouter();
const { addRegistration } = useCourseRegistration();
const toast = useToast();

const semester = ref("");
const level = ref("");
const session = ref<Session>();


const sessionOptions = ref([
    { label: '2024/2025', value: '2024/2025' },
    { label: '2025/2026', value: '2025/2026' }
]);
const semesterOptions = ref([
    'First',
    'Second',
]);
const levelOptions = ref([
    "100", "200", "300", "400", "500"
]);
const selectedCourses = ref<string[]>([]);

const showCourses = ref(false);

type Course = {
    id: string;
    code: string;
    title: string;
    credits: number;
    type: "core" | "elective";
};

const availableCourses: Course[] = [
    { id: "1", code: "ENV401", title: "Environmental Impact Assessment", credits: 3, type: "core" },
    { id: "2", code: "ENV403", title: "Water Resources Management", credits: 4, type: "core" },
    { id: "3", code: "CSC401", title: "Software Engineering", credits: 3, type: "elective" },
];

const submitRegistration = () => {
    if (selectedCourses.value.length === 0) {
        alert("Please select at least one course");
        return;
    }

    const courses = availableCourses.filter((c) =>
        selectedCourses.value.includes(c.id)
    );

    addRegistration({
        id: Date.now().toString(),
        session: session.value?.name ?? "",
        semester: semester.value,
        courses,
    });

    toast.add({
        color: "success",
        title: "Success",
        description: "Registration Successful!"
    });
    router.back();
};
</script>

<template>

    <div class="p-5 max-w-5xl mx-auto">
        <!-- Breadcrumbs -->
        <nav class="mb-4 flex items-center text-sm text-gray-500 gap-2" aria-label="Breadcrumb">
            <NuxtLink to="/portal/student" class="hover:text-primary-600 flex items-center gap-1">
                <i class="i-lucide-home w-4 h-4"></i>
                <span>Student Portal</span>
            </NuxtLink>
            <span class="mx-1">/</span>
            <NuxtLink to="/portal/student/courses" class="hover:text-primary-600">Courses</NuxtLink>
            <span class="mx-1">/</span>
            <span class="text-gray-700 font-medium">Register</span>
        </nav>
        <header>
            <div class="flex items-center gap-5 justify-between mb-4">
                <h1 class="text-lg font-bold">New Course Registration</h1>
            </div>
        </header>

        <section>
            <div class="bg-white rounded-xl shadow border border-default p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                        <label class="block mb-2 text-sm font-medium">Session</label>
                        <AppSessionSelect v-model="session" class="w-full" />

                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium">Semester</label>
                        <NuxtSelect v-model="semester" placeholder="Select semester" class="w-full"
                            :items="semesterOptions" />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium">Level</label>
                        <NuxtSelect v-model="level" :items="levelOptions" placeholder="Select level" class="w-full" />
                    </div>
                </div>

                <div class="mb-6 flex justify-end">

                    <NuxtButton label="Show Courses" @click="showCourses = true" size="sm" variant="outline" />
                </div>

                <div v-if="showCourses">
                    <div class="overflow-x-auto rounded-lg border border-default mb-6">
                        <table class="min-w-full bg-white rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="border-b border-default p-3"></th>
                                    <th class="border-b border-default p-3 text-left">Code</th>
                                    <th class="border-b border-default p-3 text-left">Title</th>
                                    <th class="border-b border-default p-3 text-left">Credits</th>
                                    <th class="border-b border-default p-3 text-left">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="course in availableCourses" :key="course.id"
                                    class="hover:bg-gray-100 transition">
                                    <td class="border-b border-default p-3 text-center">
                                        <input type="checkbox" v-model="selectedCourses" :value="course.id"
                                            class="accent-primary-600 w-4 h-4" />
                                    </td>
                                    <td class="border-b border-default p-3">{{ course.code }}</td>
                                    <td class="border-b border-default p-3">{{ course.title }}</td>
                                    <td class="border-b border-default p-3">{{ course.credits }}</td>
                                    <td class="border-b border-default p-3 capitalize">
                                        <span
                                            :class="course.type === 'core' ? 'bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium' : 'bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium'">
                                            {{ course.type }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex justify-end">
                        <NuxtButton label="Register" variant="solid" size="md" @click="submitRegistration"
                            class="px-8" />

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
