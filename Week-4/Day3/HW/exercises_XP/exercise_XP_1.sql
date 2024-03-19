--1.  Get a list of all the languages, from the language table.

--2.  Get a list of all films joined with their languages – select the following details : film title, description, and language name.

--3.  Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

--4.  Create a new table called new_film with the following columns : id, name. Add some new films to the table.

--5.  Create a new table called customer_review, which will contain film reviews that customers will make.
-- 	Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- 	It should have the following columns:
	--1. review_id – a primary key, non null, auto-increment.
	--2. film_id – references the new_film table. The film that is being reviewed.
	--3. language_id – references the language table. What language the review is in.
	--4. title – the title of the review.
	--5. score – the rating of the review (1-10).
	--6. review_text – the text of the review. No limit on the length.
	--7. last_update – when the review was last updated.
	
--6.  Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

--7.  Delete a film that has a review from the new_film table, what happens to the customer_review table?

-- -- 			TASK 1
-- SELECT * FROM language;

-- -- 			TASK 2
-- SELECT film.title, film.description, language.name 
-- FROM film
-- INNER JOIN language
-- ON language.language_id = film.language_id;

-- -- 			TASK 3
-- SELECT film.title,film.description,language.name 
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id;

-- 			TASK 4
-- CREATE TABLE new_film(
-- 	new_film_id SERIAL PRIMARY KEY ,
-- 	new_film_name VARCHAR (50) NOT NULL);
-- INSERT INTO new_film(new_film_name)
-- VALUES ('Baywatch'),('Neighbors'),('Long Shot'),('Easy A');
-- SELECT * FROM new_film;

-- 			TASK 5
-- CREATE TABLE customer_review (
-- 	review_id SERIAL PRIMARY KEY,
-- 	new_film_id INTEGER NOT NULL REFERENCES new_film(new_film_id) ON DELETE CASCADE,
-- 	language_id INTEGER NOT NULL REFERENCES language(language_id) ON DELETE SET NULL,
-- 	title VARCHAR (25) NOT NULL,
-- 	score INT CHECK(score > 0 AND score < 10),
-- 	review_text TEXT,
-- 	last_update TIMESTAMP DEFAULT NOW()
-- -- 	FOREIGN KEY new_film_id 
-- -- 	FOREIGN KEY language_id 
-- 	);
	

-- -- 			TASK 6
-- INSERT INTO customer_review(new_film_id,language_id,title,score,review_text)
-- VALUES
-- -- ((SELECT new_film_id FROM new_film WHERE new_film_name = 'Easy A'),
-- -- (SELECT language_id FROM language WHERE name = 'English'),
-- -- 'Cool','8','Easy A" offers an intriguing middle ground to the absolute of sexual abstinence: engaging comedy that takes the familiar but underrated '),
-- ((SELECT new_film_id FROM new_film WHERE new_film_name = 'Neighbors'),
-- (SELECT language_id FROM language WHERE name = 'English'),
-- 'BOOOO','6','Neighbours is a pretty good comedy movie.');

-- SELECT * FROM customer_review;

-- 			TASK 7

-- DELETE FROM new_film WHERE new_film_name = 'Easy A';

-- SELECT * FROM new_film LEFT JOIN customer_review ON new_film.new_film_id = customer_review.new_film_id;