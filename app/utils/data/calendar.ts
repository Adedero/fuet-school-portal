export class CalendarClass {
  minYear: number = 0;
  maxYear: number = 0;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minYear = currentYear - 120;
    this.maxYear = currentYear - 16;
  }

  allowedYears = () => {
    return Array.from(
      { length: this.maxYear - this.minYear + 1 },
      (_, i) => this.maxYear - i
    );
  };

  monthDays = () => Array.from({ length: 31 }, (_, i) => i + 1);

  months = () => {
    return {
      long: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      short: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    };
  };
}

export const Calendar = new CalendarClass();

