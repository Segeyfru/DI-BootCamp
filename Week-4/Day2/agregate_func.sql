-- -- SELECT *FROM actors;

-- ALTER TABLE actors RENAME COLUMN just_number TO number_oscars

-- SELECT number_oscars as oscars FROM actors;

-- SELECT avg(number_oscars)
-- AS averege_oscars_per_actor FROM actors

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('George', 'Clooney', '06/05/1961', 1);

--  SELECT sum(number_oscars) AS total_oscars FROM actors WHERE first_name = 'George';

-- SELECT *FROM actors;

-- DELETE FROM actors WHERE first_name = 'George' AND number_oscars = 1;

-- SELECT *FROM actors;

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Ross','03/01/1970', 0);

-- SELECT * FROM actors;

-- SELECT DISTINCT first_name FROM actors ORDER BY first_name DESC;

-- SELECT * FROM actors WHERE first_name in ('Lisa', 'Matt','Hugh');

-- SELECT first_name, last_name, max(number_oscars) FROM actors GROUP BY first_name, last_name

-- SELECT avg(number_oscars) AS avg_numb_oscars FROM actors
-- SELECT * FROM actors WHERE number_oscars BETWEEN 0 AND 5

-- SELECT * FROM actors WHERE age >= '01/01/1970'

SELECT * FROM actors WHERE first_name in('Gal','Jennifer','Stephen')







