<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import { useSeoMeta } from "#imports";

// ✅ SEO
useSeoMeta({
  title: "FUET - Student Dashboard",
  description: "Overview of academic performance and upcoming deadlines.",
  ogImage: "/images/global/fuet_logo.png",
  ogUrl: "https://fuet.edu.ng/dashboard",
});



// ✅ Static Data
const academicStats = {
  currentGPA: 3.75,
  totalCredits: 45,
  completedCourses: 15,
  currentLevel: "300",
  expectedGraduation: "2026",
};

const recentGrades = [
  { course: "ENV 301", title: "Environmental Chemistry", grade: "A", credits: 3 },
  { course: "CSC 302", title: "Database Management", grade: "B+", credits: 3 },
  { course: "MTH 301", title: "Mathematical Methods", grade: "A-", credits: 3 },
  { course: "ENV 305", title: "Pollution Control", grade: "A", credits: 4 },
];

const upcomingDeadlines = [
  { title: "Course Registration", date: "15 Sep 2025", type: "registration" },
  { title: "Semester Fees Payment", date: "20 Sep 2025", type: "payment" },
  { title: "Project Proposal Submission", date: "30 Sep 2025", type: "assignment" },
];

const quickActions = [
  { title: "Register Courses", description: "Select courses for new semester", icon: "book-open", href: "/course-registration", color: "bg-primary" },
  { title: "Check Results", description: "View your examination results", icon: "file-text", href: "/results", color: "bg-secondary" },
  { title: "Pay Fees", description: "Make fee payments online", icon: "credit-card", href: "/fees", color: "bg-green-500" },
  { title: "Download Documents", description: "Access official documents", icon: "download", href: "/documents", color: "bg-purple-500" },
];

// ✅ Lazy load components (like React.lazy + Suspense)
// const RecentGrades = defineAsyncComponent(() => import("~/components/dashboard/RecentGrades.vue"));
// const UpcomingDeadlines = defineAsyncComponent(() => import("~/components/dashboard/UpcomingDeadlines.vue"));
</script>

<template>
  <div class="space-y-8">
    <!-- Welcome Header -->
    <div class="flex justify-between items-center flex-wrap gap-4 py-4 text-primary">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
          {{ currentUser?.name?.[0] || "U" }}
        </div>
        <div class="flex flex-col">
          <h2 class="text-lg font-bold text-gray-800">
            Welcome back, {{ currentUser?.name || "Student" }}!
          </h2>
          <p class="text-gray-600 text-sm">
            {{ currentUser?.studentId || "ID" }} • {{ currentUser?.department || "Dept" }} • Level {{ currentUser?.level || "N/A" }}
          </p>
          <span class="px-2 py-1 bg-gray-200 text-xs rounded">
            2024/2025 Academic Session
          </span>
        </div>
      </div>
      <div class="flex flex-col items-end gap-2">
        <p class="text-sm text-gray-500">Current GPA</p>
        <h2 class="text-2xl font-bold">{{ academicStats.currentGPA }}</h2>
        <div class="flex items-center gap-1 text-green-600">
          <Icon name="lucide:trending-up" />
          <span class="text-sm">Excellent Performance</span>
        </div>
      </div>
    </div>

    <!-- Academic Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="p-6 border rounded text-center">
        <p class="text-xs flex items-center justify-center gap-1">
          <Icon name="lucide:award" /> Current Level
        </p>
        <p class="text-3xl font-bold text-primary">{{ academicStats.currentLevel }}</p>
      </div>
      <div class="p-6 border rounded text-center">
        <p class="text-xs flex items-center justify-center gap-1">
          <Icon name="lucide:book-open" /> Total Credits
        </p>
        <p class="text-3xl font-bold">{{ academicStats.totalCredits }}</p>
      </div>
      <div class="p-6 border rounded text-center">
        <p class="text-xs flex items-center justify-center gap-1">
          <Icon name="lucide:file-text" /> Completed Courses
        </p>
        <p class="text-3xl font-bold">{{ academicStats.completedCourses }}</p>
      </div>
      <div class="p-6 border rounded text-center">
        <p class="text-xs flex items-center justify-center gap-1">
          <Icon name="lucide:calendar" /> Expected Graduation
        </p>
        <p class="text-3xl font-bold">{{ academicStats.expectedGraduation }}</p>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="p-6 border rounded">
      <h3 class="text-lg font-bold mb-6">Quick Actions</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink
          v-for="(action, index) in quickActions"
          :key="index"
          :to="action.href"
          class="p-6 border rounded hover:shadow-md transition flex flex-col items-center text-center gap-3"
        >
          <div :class="['w-12 h-12 rounded-full flex items-center justify-center text-white', action.color]">
            <Icon :name="`lucide:${action.icon}`" size="20" />
          </div>
          <div>
            <p class="font-bold">{{ action.title }}</p>
            <p class="text-sm text-gray-500">{{ action.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Lazy Loaded Components -->
    <div class="flex flex-col md:flex-row gap-8">
      <Suspense>
        <RecentGrades :recentGrades="recentGrades" />
      </Suspense>
      <Suspense>
        <UpcomingDeadlines :upcomingDeadlines="upcomingDeadlines" />
      </Suspense>
    </div>

    <!-- Academic Progress -->
    <div class="p-6 border rounded">
      <h3 class="text-lg font-bold mb-6">Academic Progress</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p class="font-bold">Level Progress</p>
          <progress class="w-full" max="100" value="75"></progress>
          <p class="text-sm text-gray-500">75% completed</p>
        </div>
        <div>
          <p class="font-bold">Credit Hours</p>
          <progress class="w-full" max="100" value="60"></progress>
          <p class="text-sm text-gray-500">45/75 credits</p>
        </div>
        <div>
          <p class="font-bold">Overall Performance</p>
          <progress class="w-full" max="100" value="85"></progress>
          <p class="text-sm text-gray-500">Excellent</p>
        </div>
      </div>
    </div>
  </div>
</template>
