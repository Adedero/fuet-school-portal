export const faculties = [
  {
    name: "School of Environmental Sciences",
    code: "SES",
    departments: [
      {
        name: "Environmental Management",
        code: "EMT"
      },
      {
        name: "Forestry and Wildlife",
        code: "FWT"
      },
      {
        name: "Geography and Environmental Studies",
        code: "GES"
      },
      {
        name: "Climate Change and Sustainability",
        code: "CCS"
      }
    ]
  },
  {
    name: "School of Agricultural Engineering",
    code: "SAE",
    departments: [
      {
        name: "Agricultural Science",
        code: "ASC"
      },
      {
        name: "Agricultural Engineering",
        code: "AEN"
      },
      {
        name: "Crop Science",
        code: "CPS"
      },
      {
        name: "Soil Science",
        code: "SOS"
      }
    ]
  },
  {
    name: "School of Technology and Innovation",
    code: "STI",
    departments: [
      {
        name: "Computer Science",
        code: "CSC"
      },
      {
        name: "Information Technology",
        code: "IFT"
      },
      {
        name: "Software Engineering",
        code: "SEN"
      },
      {
        name: "Renewable Energy Technology",
        code: "RET"
      }
    ]
  },
  {
    name: "School of Pure and Applied Sciences",
    code: "SPAS",
    departments: [
      {
        name: "Biological Sciences",
        code: "BSC"
      },
      {
        name: "Chemistry",
        code: "CHM"
      },
      {
        name: "Physics",
        code: "PHY"
      },
      {
        name: "Mathematics and Statistics",
        code: "MST"
      }
    ]
  },
  {
    name: "School of Management and Social Sciences",
    code: "SMSS",
    departments: [
      {
        name: "Economics",
        code: "ECO"
      },
      {
        name: "Accounting",
        code: "ACC"
      },
      {
        name: "Business Administration",
        code: "BUS"
      },
      {
        name: "Entrepreneurship Studies",
        code: "ENT"
      }
    ]
  }
];

export const departments = faculties
  .flatMap((faculty) =>
    faculty.departments.map((dept) => ({
      ...dept,
      faculty: faculty.name,
      facultyCode: faculty.code
    }))
  )
  .sort((a, b) => a.name.localeCompare(b.name));

export const degrees = [
  {
    name: "Bachelor of Technology",
    code: "B.Tech"
  }
];
