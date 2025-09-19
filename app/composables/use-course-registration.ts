// composables/useRegistration.ts
import { useState } from "#app";

interface Course {
  id: string;
  code: string;
  title: string;
  credits: number;
  type: "core" | "elective";
}

interface Registration {
  id: string;
  session: string;
  semester: string;
  courses: Course[];
}

export const useCourseRegistration = () => {
  const registrations = useState<Registration[]>("registrations", () => []);

  const addRegistration = (reg: Registration) => {
    registrations.value.push(reg);
  };

  const getRegistration = (id: string) => {
    return registrations.value.find((r) => r.id === id);
  };

  return { registrations, addRegistration, getRegistration };
};
