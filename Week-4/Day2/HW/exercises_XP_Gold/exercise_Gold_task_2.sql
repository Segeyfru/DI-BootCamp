-- Update
-- 		‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to 02/11/1998.

-- UPDATE students SET birth_date = '02/11/1998' WHERE last_name = 'Benichou';


-- 		Change the last_name of David from ‘Grez’ to ‘Guez’.

-- UPDATE students SET last_name = 'Guez' WHERE last_name = 'Grez';
-- SELECT * FROM students;


-- Delete
-- 		Delete the student named ‘Lea Benichou’ from the table.
-- DELETE FROM students WHERE last_name = 'Benichou' AND first_name = 'Lea';


-- Count
-- 		Count how many students are in the table.
-- 		Count how many students were born after 01/01/2000.

-- SELECT COUNT(*) FROM students;

-- SELECT COUNT(*) FROM students WHERE birth_date > '01/01/2000';


-- Insert / Alter
	-- Add a column to the student table called math_grade.
	-- Add 80 to the student which id is 1.
	-- Add 90 to the students which have ids of 2 or 4.
	-- Add 40 to the student which id is 6.
	-- Count how many students have a grade bigger than 83
	-- Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.
	-- Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, although he received 2 different grades because he retook the math exam.
	-- Bonus: Count how many grades each student has.
	-- Tip: You should display the first_name, last_name and the number of grades of each student. If you followed the instructions above correctly, all the students should have 1 math grade, except Omer Simpson which has 2.
	-- Tip : Use an alias called total_grade to fetch the grades.
	-- Hint : Use GROUP BY.

-- ALTER TABLE students ADD COLUMN math_grade SMALLINT;
-- UPDATE students SET math_grade = '80' WHERE stud_id = '1';

-- UPDATE students SET math_grade = '90' WHERE stud_id IN(2,4);

-- UPDATE students SET math_grade = '40' WHERE stud_id = '6';

-- SELECT COUNT(*) FROM students WHERE math_grade > '83';

-- INSERT INTO students(first_name,last_name,birth_date,math_grade)
-- VALUES ('Omer', 'Simpson', '03/10/1980','70');

-- SELECT first_name, last_name, COUNT(math_grade) FROM students GROUP BY first_name, last_name;


-- SUM
	-- Find the sum of all the students grade
	
-- SELECT SUM(math_grade) AS sum_grade FROM students;







-- SELECT * FROM students ORDER BY stud_id ASC;







