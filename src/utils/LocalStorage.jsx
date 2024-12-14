const employees = [ 
  {
      "id": 1,
      "email": "employee1@example.com",
      "password": "1234",
      "firstname": "Rajesh",
      "tasks": [
          {
              "title": "Prepare Monthly Report",
              "description": "Compile sales data and prepare the monthly report",
              "date": "2024-11-15",
              "category": "Report",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Client Meeting",
              "description": "Discuss Q4 project deliverables with client",
              "date": "2024-11-18",
              "category": "Meeting",
              "active": false,
              "newTask": true,
              "completed": true,
              "failed": false
          },
          {
              "title": "Code Review",
              "description": "Review code submissions from team members",
              "date": "2024-11-12",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 2,
      "email": "employee2@example.com",
      "password": "1234",
      "firstname": "Ananya",
      "tasks": [
          {
              "title": "Update Documentation",
              "description": "Revise and update the project documentation",
              "date": "2024-11-10",
              "category": "Documentation",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Testing New Features",
              "description": "Conduct testing on new feature deployment",
              "date": "2024-11-20",
              "category": "Testing",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 3,
      "email": "employee3@example.com",
      "password": "1234",
      "firstname": "Priya",
      "tasks": [
          {
              "title": "Market Research",
              "description": "Analyze competitors and market trends",
              "date": "2024-11-22",
              "category": "Research",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Design Review",
              "description": "Evaluate design drafts for new project",
              "date": "2024-11-19",
              "category": "Design",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 4,
      "email": "employee4@example.com",
      "password": "1234",
      "firstname": "Vikram",
      "tasks": [
          {
              "title": "Server Maintenance",
              "description": "Perform scheduled maintenance on servers",
              "date": "2024-11-25",
              "category": "Maintenance",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Write Blog Post",
              "description": "Draft and publish monthly blog post",
              "date": "2024-11-08",
              "category": "Content",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 5,
      "email": "employee5@example.com",
      "password": "1234",
      "firstname": "Kiran",
      "tasks": [
          {
              "title": "Product Demo",
              "description": "Give a demo of the product to the sales team",
              "date": "2024-11-30",
              "category": "Presentation",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Prepare Budget",
              "description": "Prepare budget proposal for upcoming quarter",
              "date": "2024-11-27",
              "category": "Finance",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 0,
          "failed": 1
      }
  }
];

  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "8084"
    }
  ];
  
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees =JSON.parse(localStorage.getItem('employees'))
    const admin =JSON.parse(localStorage.getItem('admin'))

    return{employees,admin}
}