SELECT 
  e.id AS 'Employee ID',
  e.first_name AS 'First Name',
  e.last_name AS 'Last Name',
  r.title AS 'Job Title',
  d.name AS 'Department',
  r.salary AS 'Salary',
  m.last_name AS 'Manager'
FROM
  employee e
  JOIN role r ON e.role_id = r.id
  JOIN department d ON e.department_id = d.id
  LEFT JOIN manager m ON e.manager_id = m.id;