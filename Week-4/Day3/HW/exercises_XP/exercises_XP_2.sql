
--1 Use UPDATE to change the language of some films. Make sure that you use valid languages.

--2 Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

--3 We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

--4 Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

--5 Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

--6 Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
	-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

	-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

	-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

	-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.



-- 			TASK 1

-- UPDATE film SET language_id = '2' WHERE film_id BETWEEN 1 AND 15;
-- SELECT * FROM film ORDER BY film_id ASC;

-- 			TASK 2

-- 			TASK 3
-- DROP TABLE customer_review
-- 				(NO problem with it)
-- 			TASK 4

-- SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

-- 			TASK 5
-- SELECT title, replacement_cost FROM film 
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
-- WHERE return_date is NULL 
-- ORDER BY film.replacement_cost DESC
-- LIMIT 30;

-- 			TASK 6.1

-- SELECT film.title, film.description FROM film 
-- INNER JOIN film_actor ON film.film_id = film_actor.film_id
-- INNER JOIN actor ON film_actor.actor_id = actor.actor_id
-- WHERE film.description ILIKE '%sumo wrestler%' 
-- AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';

-- 			TASK 6.2

-- SELECT film.title, film.length, category.name, film.rating
-- FROM film
-- INNER JOIN film_category ON film.film_id = film_category.film_id
-- INNER JOIN category ON category.category_id = film_category.category_id
-- WHERE category.name = 'Documentary'
-- AND film.length < '60'
-- AND film.rating = 'R';


-- 			TASK 6.3

-- SELECT customer.first_name||' '|| customer.last_name AS friend_name, film.title, film.replacement_cost, rental.return_date
-- FROM rental
-- INNER JOIN customer ON customer.customer_id = rental.customer_id
-- INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN film ON film.film_id = inventory.film_id
-- WHERE customer.first_name = 'Matthew' AND customer.last_name ='Mahan'
-- AND film.replacement_cost > '4.00'
-- AND rental.return_date BETWEEN '2005-07-28%' AND '2005-08-01%';


-- 			TASK 6.4

SELECT customer.first_name||' '|| customer.last_name AS friend_name, film.title, film.description, film.replacement_cost
FROM rental
INNER JOIN customer ON customer.customer_id = rental.customer_id
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
INNER JOIN film ON film.film_id = inventory.film_id
WHERE customer.first_name = 'Matthew' AND customer.last_name ='Mahan'
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC

