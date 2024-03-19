-- 			TASK 1
-- CREATE TABLE book(
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR (50) NOT NULL,
-- 	author VARCHAR (50) NOT NULL);
	
-- 			TASK 2
-- INSERT INTO book (title,author)
-- VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- 			TASK 3
-- CREATE TABLE student(
-- 	student_id SERIAL PRIMARY KEY,
-- 	name VARCHAR (20) NOT NULL UNIQUE,
-- 	age INT CHECK(age <= 15));
	
-- 			TASK 4
-- INSERT INTO student (name, age)
-- VALUES
-- ('John', '12'),
-- ('Lera', '11'),
-- ('Patrick', '10'),
-- ('Bob', '14');

-- 			TASK 5
-- CREATE TABLE library(
-- 	book_fk_id INTEGER,
-- 	student_fk_id INTEGER,
-- 	borrowed_date DATE NOT NULL,
-- 	PRIMARY KEY (book_fk_id, student_fk_id),
-- 	FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	FOREIGN KEY (student_fk_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE);

-- 			TASK 6

-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES
-- ((SELECT book_id FROM book WHERE title ='Alice In Wonderland'),
-- (SELECT student_id FROM student WHERE name = 'John'),
-- '15/02/2022'),
-- ((SELECT book_id FROM book WHERE title ='To kill a mockingbird'),
-- (SELECT student_id FROM student WHERE name = 'Bob'),
-- '03/03/2021'),
-- ((SELECT book_id FROM book WHERE title ='Alice In Wonderland'),
-- (SELECT student_id FROM student WHERE name = 'Lera'),
-- '23/05/2021'),
-- ((SELECT book_id FROM book WHERE title ='Harry Potter'),
-- (SELECT student_id FROM student WHERE name = 'Bob'),
-- '12/08/2021');

-- 			TASK 7

-- SELECT * FROM library;

-- SELECT student.name, book.title 
-- FROM student
-- INNER JOIN library ON student.student_id = library.student_fk_id
-- INNER JOIN book ON book.book_id = library.book_fk_id
-- ORDER BY student.name ASC

-- SELECT AVG(age) AS avg_age
-- FROM student
-- INNER JOIN library ON student.student_id = library.student_fk_id
-- INNER JOIN book ON book.book_id = library.book_fk_id;


-- DELETE FROM student WHERE name = 'Bob';
-- SELECT * FROM library

-- SELECT * FROM book



