// Insert command
db.data.insertMany([
  {
    id: "1",
    users: "Ram",
    codekata: 40,
    attendance: "present",
    topics: "HTML",
    tasks: [{ status: "not submitted", month: "october" }],
    company_drives: "october",
    mentors: 0,
  },

  {
    id: "2",
    users: "Sam",
    codekata: 63,
    attendance: "present",
    topics: "css",
    tasks: [{ status: "not submitted", month: "october" }],
    company_drives: "may",
    mentors: 20,
  },

  {
    id: "3",
    users: "Tom",
    codekata: 70,
    attendance: "absent",
    topics: "js",
    tasks: [{ status: "not submitted", month: "october" }],
    company_drives: "october",
    mentors: 7,
  },
  {
    id: "4",
    users: "Raven",
    codekata: 16,
    attendance: "present",
    topics: "php,c++",
    tasks: [{ status: "not submitted", month: "october" }],
    company_drives: "april",
    mentors: 35,
  },
  {
    id: "5",
    users: "Anto",
    codekata: 56,
    attendance: "present",
    topics: "HTML,css,react",
    tasks: [{ status: "not submitted", month: "october" }],
    company_drives: "october",
    mentors: 22,
  },
  {
    id: "6",
    users: "Varun",
    codekata: 78,
    attendance: "absent",
    topics: "nodejs,express",
    tasks: [{ status: "not submitted", month: "october" }],
    company_drives: "march",
    mentors: 3,
  },
  {
    id: "7",
    users: "Tharun",
    codekata: 102,
    attendance: "absent",
    topics: "MongoDB",
    tasks: [{ status: "not submitted", month: "october" }],
    company_drives: "october",
    mentors: 13,
  },
  {
    id: "8",
    users: "Gokul",
    codekata: 33,
    attendance: "present",
    topics: "HTML,css",
    tasks: [{ status: "not submitted", month: "october" }],
    company_drives: "november",
    mentors: 17,
  },
  {
    id: "9",
    users: "Saro",
    codekata: 19,
    attendance: "present",
    topics: "MongoDB,sql",
    tasks: [{ status: "not submitted", month: "october" }],
    company_drives: "october",
    mentors: 2,
  },
  {
    id: "10",
    users: "Dheeri",
    codekata: 77,
    attendance: "present",
    topics: "SQL",
    tasks: [{ status: "not submitted", month: "october" }],
    company_drives: "october",
    mentors: 0,
  },
]);

// 1 Find all the topics and tasks which are thought in the month of October
db.data.find({}, { topics: 1, tasks: 1 });
// 2 Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.data.find({}, { company_drives: 1 });
// 3 Find all the company drives and students who are appeared for the placement.
db.data.find({ company_drives: "october" });
// 4 Find the number of problems solved by the user in codekata
db.data.find({}, { users: 1, codekata: 1 });

// 5 Find all the mentors with who has the mentee's count more than 15
db.data.find({ mentors: { $gt: 15 } });
// 6 Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.data.find({}, { tasks: 1 }).count();
