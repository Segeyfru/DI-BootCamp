-- CREATE TABLE students(
-- 	stud_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (20) NOT NULL,
-- 	last_name VARCHAR (50) NOT NULL, 
-- 	birth_date DATE NOT NULL)

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES 
-- ('Marc','Benichou','02/11/1998'),
-- ('Yoan','Cohen','03/12/2010'),
-- ('Lea','Benichou','27/07/1997'),
-- ('Amelia','Dux','07/04/1996'),
-- ('David','Grez','14/06/2003'),
-- ('Omer','Simposon','03/10/1980'),
-- ('Sergey','Fruman','26/08/1996');

-- SELECT * FROM students

SELECT * FROM students WHERE stud_id = 2;
SELECT * FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou';
SELECT * FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou';
SELECT * FROM students WHERE first_name LIKE '%a%';
SELECT * FROM students WHERE first_name ILIKE 'a%';
SELECT * FROM students WHERE first_name ILIKE '%a_';
SELECT * FROM students WHERE first_name LIKE '%a'
SELECT * FROM students WHERE stud_id = 1 OR stud_id = 3;
SELECT * FROM students WHERE birth_date >= '01/01/2000';

