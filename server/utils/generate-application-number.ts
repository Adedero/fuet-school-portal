export default function generateApplicationNumber(
  lastApplicationNumber: string | null
): string {
  const currentYear = new Date().getFullYear();
  const initials = "SP";

  let nextNumber = 1;

  if (lastApplicationNumber) {
    // Example format: SP/2025/0001
    const parts = lastApplicationNumber.split("/");
    const lastYear = parseInt(parts[1], 10);
    const lastSeq = parseInt(parts[2], 10);

    if (lastYear === currentYear) {
      // same year → increment sequence
      nextNumber = lastSeq + 1;
    } else {
      // new year → reset sequence
      nextNumber = 1;
    }
  }

  const seq = String(nextNumber).padStart(4, "0");

  return `${initials}/${currentYear}/${seq}`;
}
