-- Insert department names
INSERT INTO department (name)
VALUES ('Human Resources'),
       ('Accounting'),
       ('Marketing'),
       ('Sales'),
       ('IT');

-- Insert manager names
-- INSERT INTO manager (name)
-- VALUES ('Daniel Ortiz'),
--        ('Jennifer Johnson'),
--        ('Michael Brown'),
--        ('Emily Williams'),
--        ('Ron Stuart');

-- Insert roles with titles, salaries, and department IDs
INSERT INTO role (title, salary, department_id)
VALUES ('Manager', 80000.00, 1),
       ('Analyst', 60000.00, 5),
       ('Marketing Specialist', 55000.00, 3),
       ('Sales Representative', 50000.00, 4),
       ('IT Technician', 45000.00, 5);

-- Insert employee names (First and Last), role IDs, department IDs, and manager IDs (NULL until manager schema and seeding finished)
INSERT INTO employee (first_name, last_name, role_id, department_id, manager_id)
VALUES ('John', 'Doe', 2, 5, NULL),
       ('Jane', 'Smith', 2, 5, NULL),
       ('Michael', 'Johnson', 5, 5, NULL),
       ('Emily', 'Williams', 1, 4, NULL),
       ('Ron', 'Stuart', 1, 1, NULL),
       ('David', 'Brown', 3, 4, NULL);
       
-- Show the tables made
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;       
       
