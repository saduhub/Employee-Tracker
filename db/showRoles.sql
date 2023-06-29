SELECT 
  r.id AS 'Role ID',
  r.title AS 'Job Title',
  r.salary AS 'Salary',
  d.name AS 'Department Name'
FROM
  role r
  JOIN department d ON r.department_id = d.id;