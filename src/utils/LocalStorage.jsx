const employees = [
  {
    userId: "E001",
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete project documentation",
        taskDescription:
          "Prepare and finalize the project documentation by the end of the week.",
        taskCategory: "Documentation",
        taskDate: "2025-01-15",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update user interface design",
        taskDescription:
          "Revise the user interface to improve navigation and accessibility.",
        taskCategory: "Design",
        taskDate: "2025-01-10",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix login page bug",
        taskDescription:
          "Resolve the error preventing users from logging in with special characters.",
        taskCategory: "Bug Fix",
        taskDate: "2025-01-14",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    userId: "E002",
    firstName: "Isha",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Research competitor analysis",
        taskDescription: "Collect and analyze competitor features and pricing.",
        taskCategory: "Research",
        taskDate: "2025-01-15",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit monthly report",
        taskDescription: "Prepare and submit the report for December.",
        taskCategory: "Reporting",
        taskDate: "2024-12-31",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    userId: "E003",
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize the database for faster query processing.",
        taskCategory: "Database",
        taskDate: "2025-01-16",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Backup system setup",
        taskDescription:
          "Implement an automated backup system for critical data.",
        taskCategory: "System",
        taskDate: "2025-01-18",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Security patch deployment",
        taskDescription: "Apply the latest security updates to all servers.",
        taskCategory: "Security",
        taskDate: "2025-01-11",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    userId: "E004",
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create marketing campaign",
        taskDescription:
          "Develop a social media campaign for the upcoming product launch.",
        taskCategory: "Marketing",
        taskDate: "2025-01-20",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email newsletter design",
        taskDescription: "Design and schedule the January newsletter.",
        taskCategory: "Design",
        taskDate: "2025-01-12",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    userId: "E005",
    firstName: "Priya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Inventory check",
        taskDescription: "Complete the inventory check for warehouse #3.",
        taskCategory: "Inventory",
        taskDate: "2025-01-08",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Product demo presentation",
        taskDescription:
          "Prepare a product demo presentation for the client meeting.",
        taskCategory: "Presentation",
        taskDate: "2025-01-19",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Website analytics setup",
        taskDescription: "Set up and configure website analytics tools.",
        taskCategory: "Analytics",
        taskDate: "2025-01-14",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
];
const admin = [
  {
    userId: "A001",
    email: "admin@example.com",
    password: "123",
    firstName: "John", // Added firstName
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const data1 = JSON.parse(localStorage.getItem("employees"));
  const data2 = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
