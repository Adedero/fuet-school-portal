export default function generateRegNumber(
  applicationNumber: string,
  dept?: string
): string {
  const parts = applicationNumber.split("/"); //SP/2025/0001
  if (parts.length !== 3) {
    return "";
  }

  const year = parts[1] as string;
  const number = parts[2] as string;

  const regNumber = `FUET/${dept}/${year}/${number}`;
  return regNumber;
}
