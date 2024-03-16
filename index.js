
const mysql = require('mysql2');
const inquirer = require('inquirer');




const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the database.`)
);

startQuestions = () => {
  inquirer.prompt([{
    type: "list",
    message: "What would you like to do?",
    name: "initial_questions",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role"
    ],
  }])
    .then((response) => {
      const choice = response.initial_questions;

      if (choice === "View all departments") {
        viewDepartments();
      } else if (choice === "View all roles") {
        viewRoles();
      } else if (choice === "View all employees") {
        viewEmployees();
      } else if (choice === "Add a department") {
        addDepartment();
      } else if (choice === "Add a role") {
        addRole();
      } else if (choice === "Add an employee") {
        addEmployee();
      } else if (choice === "Update an employee role") {
        updateEmployeeRole();
      }
    });
};

// VEIW DEPARTMENTS FUNCTION
function viewDepartments() {
  db.query('SELECT department.id AS Department_ID, department.name AS Department_Name FROM department', (err, res) => {
    if (err) {
      throw err;
    } else {
      console.table(res)
    }
    startQuestions();
  });
}

// VIEW ROLES FUNCTION
function viewRoles() {
  db.query('SELECT role.id AS Role_ID, role.title AS Role_Title, role.salary AS Role_Salary, department.name AS Role_Department_ID FROM role INNER JOIN department ON role.department_id = department.id;', (err, res) => {
    if (err) {
      throw err;
    } else {
      console.table(res)
    }
    startQuestions();
  });
}

// VIEW EMPLOYEES FUNCTION
function viewEmployees() {
  db.query('SELECT employee.id AS Employee_ID, CONCAT(employee.first_name, " ", employee.last_name) AS Employee_Name, role.title AS Employee_Role, role.salary AS Employee_Salary, CONCAT(e2.first_name, " ", e2.last_name) AS Employee_Manager FROM employee INNER JOIN role ON employee.role_id = role.id LEFT JOIN employee as e2 ON e2.id = employee.manager_id', (err, res) => {
    if (err) {
      throw err;
    } else {
      console.table(res)
    }
    startQuestions();
  });
}

// ADD DEPARTMENT FUNCTION
function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      message: "What would you like to call the new department?",
      name: "new_department"
    }
  ])
    .then((input) => {
      db.query('INSERT INTO department SET ?', { name: input.new_department }, (err, res) => {
        if (err) {
          throw err;
        }
        console.log("New department added successfully!");
        startQuestions();
      });
    });
}

// ADD ROLE FUNCTION

function addRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the title of the new role:",
      name: "title"
    },
    {
      type: "input",
      message: "Enter the salary for the new role:",
      name: "salary"
    },
    {
      type: "input",
      message: "Enter the department ID for the new role:",
      name: "departmentId"
    }
  ])
    .then((input) => {
      db.query('INSERT INTO role SET ?', {
        title: input.title,
        salary: input.salary,
        department_id: input.departmentId
      }, (err, res) => {
        if (err) throw err;
        startQuestions();
      });
    });
}

// ADD EMPLOYEE FUNCTION
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the first name of the new employee:",
      name: "firstName"
    },
    {
      type: "input",
      message: "Enter the last name of the new employee:",
      name: "lastName"
    },
    {
      type: "input",
      message: "Enter the role ID for the new employee:",
      name: "roleId"
    },
    {
      type: "input",
      message: "Enter the manager ID for the new employee:",
      name: "managerId"
    }
  ])
    .then((input) => {
      db.query('INSERT INTO employee SET ?', {
        first_name: input.firstName,
        last_name: input.lastName,
        role_id: input.roleId,
        manager_id: input.managerId
      }, (err, res) => {
        if (err) throw err;
        console.log("employee added successfully!");
        startQuestions();
      });
    });
}
function updateEmployeeRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the ID of the employee you want to update:",
      name: "employeeId"
    },
    {
      type: "input",
      message: "Enter the new role ID for the employee:",
      name: "newRoleId"
    }
  ])
    .then((input) => {
      db.query('UPDATE employee SET role_id = ? WHERE id = ?', [input.newRoleId, input.employeeId], (err, res) => {
        if (err) throw err;
        console.log("Employee role updated successfully!");
        startQuestions();
      });
    });
}
startQuestions();

