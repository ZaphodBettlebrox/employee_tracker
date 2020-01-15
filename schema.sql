DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;
USE employee_trackerDB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT(30) NULL,
  mananger_id VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(65,2) NULL,
  department_id INT(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, mananger_id)
VALUES ("Bob", "Thomson", 1, "Sarah Castle");
INSERT INTO employee (first_name, last_name, role_id, mananger_id)
VALUES ("Andrew", "Fox", 1, "Sarah Castle");
INSERT INTO employee (first_name, last_name, role_id, mananger_id)
VALUES ("Daniel", "Estinson", 2, "Michale Rossberg");
INSERT INTO employee (first_name, last_name, role_id, mananger_id)
VALUES ("Thom", "Spartan", 2, "Noble Team");
INSERT INTO employee (first_name, last_name, role_id, mananger_id)
VALUES ("Gabe", "Eyer", 3, "Katie Michalson");
INSERT INTO employee (first_name, last_name, role_id, mananger_id)
VALUES ("Aidan", "Wilett", 3, "Katie Michalson");
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Joe", "Rehfuss", 4);

INSERT INTO role (title, salary, department_id)
VALUES ("frontend dev", 35000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("backend dev", 50000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("full stack dev", 70000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("boss man", 9999999.00, 3);

INSERT INTO department (name)
VALUES ("main development");
INSERT INTO department (name)
VALUES ("support development");
INSERT INTO department (name)
VALUES ("management");


