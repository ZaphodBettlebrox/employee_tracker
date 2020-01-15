const mysql = require('mysql');
const inquirer = require('inquirer');
// const console = require('console.table')
// node employee-trackerdata.js
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "employee_trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    askQuestions();
});

function askQuestions(){
    setTimeout(function(){
        console.log(" ");
        console.log(" ");
        inquirer.prompt({
            message: "what would you like to do?",
            type: "list",
            choices: [
                "add departments",
                "add roles",
                "add employees",
                "view departments",
                "view roles",
                "view employees",
                "update employee roles",
                // "view total budget of department",
                // combined salaries of all employees in the department
                "QUIT"
            ],
            name: "choice"
        }).then(answers => {
            // console.log(answers);
            switch (answers.choice) {
                case "add departments":
                    add_department()
                    break;
    
                case "add roles":
                    add_roles()
                    break;
    
                case "add employees":
                    add_employees()
                    break;
    
                case "view departments":
                    view_deparments()
                    break;
    
                case "view roles":
                    view_roles()
                    break;
    
                case "view employees":
                    view_employees()
                    break;
    
                case "update employee roles":
                    update_emp_roles()
                    break;
    
                // case "view total budget of deparment":
                //     view_total_budget()
                //     break;
    
                default:
                    connection.end()
                    break;
            }
        })
},1500);
}
function view_deparments() {
    console.log("Company departments:");
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        console.log(res);
    })   
    askQuestions();
        
}
function view_employees(){
    console.log("Company employees:");
    connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        console.log(res);
    });    
    askQuestions();
}
function view_roles(){
    console.log("Company roles:");
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err;
        console.log(res);
    });       
    askQuestions();
}
function add_department(){    
    inquirer.prompt([
        {
            message: "what is the name of the new department?",
            type: "input",
            name: "dep"
        }
    ])
    .then(function (depAnswers){
        console.log(depAnswers);
        connection.query( 'INSERT INTO department (name) VALUES (?)', [depAnswers.dep], function (err, data){
        if (err) throw err;
        console.log("added department to server");
        }
    )
    askQuestions();
})
}
function add_employees(){
    inquirer.prompt([
        {
            message: "employee first name:",
            type: "input",
            name: "first"
        },
        {
            message: "employee last name:",
            type: "input",
            name: "last"
        },
        {
            message: "employee role id:",
            type: "input",
            name: "id"
        },
        {
            message: "employee mananger:",
            type: "input",
            name: "man"
        }
    ])
    .then(function (empAnswers){
        console.log(empAnswers);
        connection.query( 'INSERT INTO employee (first_name, last_name, role_id, mananger_id) VALUES (?,?,?,?)', [empAnswers.first, empAnswers.last, empAnswers.id, empAnswers.man], function (err, data){
        if (err) throw err;
        console.log("added employee to server");
        }
    )
    askQuestions();
})
}
function add_roles(){
    inquirer.prompt([
        {
            message: "role id:",
            type: "input",
            name: "role_id"
        },
        {
            message: "title:",
            type: "input",
            name: "title"
        },
        {
            message: "salary:",
            type: "input",
            name: "salary"
        },
        {
            message: "department_id:",
            type: "input",
            name: "dep_id"
        }
    ])
    .then(function (roleAnswers){
        console.log(roleAnswers);
        connection.query( 'INSERT INTO role (id, title, salary, department_id) VALUES (?,?,?,?)', [roleAnswers.role_id, roleAnswers.title, roleAnswers.salary, roleAnswers.dep_id], function (err, data){
        if (err) throw err;
        console.log("added role to server");
        })
    askQuestions();
    })
}
function update_emp_roles(){
    inquirer.prompt([
        {
            message: "employee current id:",
            type: "input",
            name: "emp_id"
        },
        {
            message: "new role id:",
            type: "input",
            name: "role_id"
        }
    ])
    .then(function (updateAnswers){
        console.log(updateAnswers);
        connection.query( 'UPDATE employee SET ? WHERE ?', [{role_id: updateAnswers.role_id}, {id: updateAnswers.emp_id}], function (err, res){
        if (err) throw err;
        console.log("updated role to server");
        })
    askQuestions();
    })
}

// // bonus stuff:
// function view_total_budget(){
//     askQuestions();
// }

