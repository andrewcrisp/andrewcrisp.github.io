export type EducationEntry = {
  index: number;
  school: string;
  level: string;
  areaOfFocus: string;
  endYear: number;
};

export const educationEntries: EducationEntry[] = [
  {
    index: 0,
    school: "Western Governors University",
    level: "Master's of Science",
    areaOfFocus: "Data Analytics",
    endYear: 2021,
  },
  {
    index: 1,
    school: "Western Governors University",
    level: "Bachelor's of Science",
    areaOfFocus: "Data Management/Data Analytics",
    endYear: 2019,
  },
  {
    index: 2,
    school: "Coursera",
    level: "Certificate",
    areaOfFocus: "Data Science Specialization",
    endYear: 2016,
  },
  {
    index: 3,
    school: "College of Western Idaho",
    level: "Associate of Business",
    areaOfFocus: "",
    endYear: 2012,
  },
];
