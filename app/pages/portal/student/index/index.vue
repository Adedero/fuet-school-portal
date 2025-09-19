<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const AcademicOverview = defineAsyncComponent(() => import("@/components/students/dashboard/academic-overview.vue"));
const QuickActions = defineAsyncComponent(() => import("@/components/students/dashboard/quick-actions.vue"));
const RecentGrades = defineAsyncComponent(() => import("@/components/students/dashboard/recent-grades.vue"));
const UpcomingDeadlines = defineAsyncComponent(() => import("@/components/students/dashboard/upcoming-deadlines.vue"));
const AcademicProgress = defineAsyncComponent(() => import("@/components/students/dashboard/academic-progress.vue"));

definePageMeta({ layout: "portal-student" });
// ✅ SEO 
useSeoMeta({ title: "FUET - Student Dashboard", description: "Overview of academic performance and upcoming deadlines.", ogImage: "/images/global/fuet_logo.png", ogUrl: "https://fuet.edu.ng/dashboard", });
// ✅ Current user 
const currentUser = { name: "Jane Doe", studentId: "FUET/2025/12345", department: "Computer Science", level: "300" };
// ✅ Dashboard Data 
const academicStats = { currentGPA: 3.75, totalCredits: 45, completedCourses: 15, currentLevel: "300", expectedGraduation: "2026", };
const recentGrades = [{ course: "ENV 301", title: "Environmental Chemistry", grade: "A", credits: 3 }, { course: "CSC 302", title: "Database Management", grade: "B+", credits: 3 }, { course: "MTH 301", title: "Mathematical Methods", grade: "A-", credits: 3 }, { course: "ENV 305", title: "Pollution Control", grade: "A", credits: 4 },];
const upcomingDeadlines: { title: string; date: string; type: "registration" | "payment" | "assignment"; }[] = [
    { title: "Course Registration", date: "15 Sep 2025", type: "registration" },
    { title: "Semester Fees Payment", date: "20 Sep 2025", type: "payment" },
    { title: "Project Proposal Submission", date: "30 Sep 2025", type: "assignment" },
];
const quickActions = [
    { title: "Register Courses", description: "Select courses for new semester", icon: "book-open", href: "/course-registration", color: "bg-blue-600" },
    { title: "Check Results", description: "View your examination results", icon: "file-text", href: "/results", color: "bg-teal-600" },
    { title: "Pay Fees", description: "Make fee payments online", icon: "credit-card", href: "/fees", color: "bg-green-600" },
    { title: "Download Documents", description: "Access official documents", icon: "download", href: "/documents", color: "bg-purple-600" },
];
</script>

<template>
    <div class="p-8">
        <!-- ✅ Welcome Header -->
        <div class="flex justify-between items-end flex-wrap gap-4 py-4 text-primary">
            <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold"> {{
                    currentUser?.name?.[0] || "U" }} </div>
                <div class="flex flex-col">
                    <h2 class="text-lg font-bold text-slate-700"> Welcome back, {{ currentUser?.name || "Student" }}!
                    </h2>
                    <p class="text-slate-400 text-sm"> {{ currentUser?.studentId || "ID" }} • {{ currentUser?.department
                        || "Dept" }} • Level {{ currentUser?.level || "N/A" }} </p> <span
                        class="px-2 py-1 w-fit bg-gray-100 text-xs rounded"> 2024/2025 Academic Session </span>
                </div>
            </div>
            <div class="flex flex-col items-end gap-2">
                <p class="text-sm text-gray-500">Current CGPA</p>
                <h2 class="text-2xl font-bold">{{ academicStats.currentGPA }}</h2>
                <div class="flex items-center gap-1 text-green-600">
                    <Icon name="lucide:trending-up" /> <span class="text-sm">Excellent Performance</span>
                </div>
            </div>
        </div>
        <Suspense>
            <AcademicOverview :academic-stats="academicStats" />
        </Suspense>
        <Suspense>
            <QuickActions :quick-actions="quickActions" />
        </Suspense>
        <div class="flex flex-col md:flex-row gap-8">
            <Suspense>
                <RecentGrades :recent-grades="recentGrades" />
            </Suspense>
            <Suspense>
                <UpcomingDeadlines :upcoming-deadlines="upcomingDeadlines" />
            </Suspense>
        </div>
        <Suspense>
            <AcademicProgress />
        </Suspense>
    </div>
</template>
