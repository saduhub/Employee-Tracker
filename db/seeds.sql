INSERT INTO department (name)
VALUES ("Dep1"),
       ("Dep2"),
       ("Dep3"),
       ("Dep4"),
       ("Dep5");

INSERT INTO role (title, salary, department_id)
VALUES ("Title1", 1234.00, 1),
       ("Title2", 1234.00, 2),
       ("Title3", 1234.00, 3),
       ("Title4", 1234.00, 4),
       ("Title5", 1234.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Name1", "LName1", 1, NULL),
       ("Name2", "LName2", 2, NULL),
       ("Name3", "LName3", 3, NULL),
       ("Name4", "LName4", 4, NULL),
       ("Name5", "LName5", 5, NULL);
       
       
       
