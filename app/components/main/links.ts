import type { NavigationMenuItem } from "@nuxt/ui";

export const links = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Units",
      icon: "lucide:box",
      children: [
        { label: "Media Unit / Public Relations", to: "/units/media" },
        { label: "Registry", to: "/units/registry" },
        { label: "Finance & Accounts", to: "/units/finance" },
        { label: "Human Resources", to: "/units/hr" },
        { label: "ICT / Information Technology Unit", to: "/units/ict" },
        { label: "Students' Affairs", to: "/units/students-affairs" },
        { label: "Library", to: "/units/library" },
        { label: "Internal Audit", to: "/units/audit" },
        { label: "Quality Assurance Unit", to: "/units/qa" }
      ]
    },
    {
      label: "Academics",
      icon: "lucide:graduation-cap",
      children: [
        { label: "Undergraduate Programmes", to: "/academics/undergraduate" },
        { label: "Postgraduate Programmes", to: "/academics/postgraduate" },
        { label: "Research Centres & Institutes", to: "/academics/research" },
        { label: "Academic Calendar", to: "/academics/calendar" },
        { label: "Admissions", to: "/admissions" },
        { label: "Scholarships", to: "/academics/scholarships" },
        { label: "Academic Policies", to: "/academics/policies" }
      ]
    },
    {
      label: "About FUET",
      icon: "lucide:info",
      children: [
        { label: "Vision & Mission", to: "/about/vision-mission" },
        { label: "History", to: "/about/history" },
        { label: "Leadership / Management", to: "/about/leadership" },
        { label: "Campus & Facilities", to: "/about/facilities" },
        { label: "Accreditation", to: "/about/accreditation" },
        { label: "Contacts", to: "/about/contact" },
        { label: "Location & Maps", to: "/about/location" }
      ]
    }
  ]
]);
