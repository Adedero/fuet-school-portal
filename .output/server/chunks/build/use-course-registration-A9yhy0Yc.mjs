import { v as useState } from './server.mjs';

const useCourseRegistration = () => {
  const registrations = useState("registrations", () => []);
  const addRegistration = (reg) => {
    registrations.value.push(reg);
  };
  const getRegistration = (id) => {
    return registrations.value.find((r) => r.id === id);
  };
  return { registrations, addRegistration, getRegistration };
};

export { useCourseRegistration as u };
//# sourceMappingURL=use-course-registration-A9yhy0Yc.mjs.map
