-- Insert department names
INSERT INTO department (name)
VALUES ('Human Resources'),
       ('Accounting'),
       ('Marketing'),
       ('Sales'),
       ('IT');

-- Insert manager names
INSERT INTO manager (name)
VALUES ('Ortiz'),
       ('Johnson'),
       ('Brown'),
       ('Williams'),
       ('Stuart');

-- Insert roles with titles, salaries, and department IDs
INSERT INTO role (title, salary, department_id)
VALUES ('Manager', 80000.00, 1),
       ('Analyst', 60000.00, 5),
       ('Marketing Specialist', 55000.00, 3),
       ('Sales Representative', 50000.00, 4),
       ('IT Technician', 45000.00, 5);

-- Insert employee names (First and Last), role IDs, department IDs, and manager IDs (NULL until manager schema and seeding finished)
INSERT INTO employee (first_name, last_name, role_id, department_id, manager_id)
VALUES ('John', 'Doe', 2, 5, 1),
       ('Jane', 'Smith', 2, 5, 1),
       ('Michael', 'Johnson', 5, 5, 1),
       ('Emily', 'Williams', 1, 4, 2),
       ('Ray', 'Lopez', 1, 1, 5),
       ('David', 'Brown', 3, 4, 2);
       
-- Show the tables made
SELECT * FROM department;
SELECT * FROM manager;
SELECT * FROM role;
SELECT * FROM employee;       
       
