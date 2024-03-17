-- 1. Fetch the first four students. You have to order the four 
-- 	students alphabetically by last_name.

-- SELECT * FROM students ORDER BY first_name ASC LIMIT (4) 


-- 2. Fetch the details of the youngest student.

SELECT * FROM students WHERE birth_date = (SELECT MAX(birth_date) FROM students)


-- 3. Fetch three students skipping the first two students.

-- SELECT * FROM students OFFSET (2) LIMIT (3)