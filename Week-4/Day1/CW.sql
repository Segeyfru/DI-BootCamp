-- CREATE TABLE actors( 
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL,
-- 	age DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- -- VALUES ('Matt','Damon', '08/10/1970', 5)
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- -- VALUES
-- -- ('George','Clooney', '06/05/1961', 2),
-- -- ('Gal','Gadot', '30/05/1985', 2),
-- -- ('Brad','Pit', '18/12/1963', 2);
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- -- VALUES ('Lisa','Edelstein', '21/05/1966', 0);
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES ('Jennifer','Morrison', '12/05/1979', 0);
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES 
-- ('Hugh','Laurie','11/06/1959',2),
-- ('Stephen','Fry','24/08/1957',2),
-- ('Emma','Thompson','15/04/1959',2);


-- SELECT first_name, number_oscars FROM actors;

-- SELECT * FROM actors WHERE first_name = 'Gal';
-- SELECT number_oscars FROM actors WHERE first_name = 'Gal';

-- SELECT first_name, number_oscars FROM actors WHERE number_oscars > 2 AND age '08/10/1970';

-- SELECT * FROM actors WHERE last_name LIKE '%mon%';
-- SELECT * FROM actors WHERE last_name LIKE 'Ga%';
-- SELECT * FROM actors WHERE last_name LIKE '%y';
-- SELECT * FROM actors WHERE last_name ILIKE 'lau%';

-- SELECT * FROM actors LIMIT 3;
-- SELECT * FROM actors ORDER BY first_name ASC OFFSET 4 LIMIT 3;

-- 
UPDATE actors
SET first_name = 'Angelina',
last_name = 'Jolie'
WHERE first_name = 'Brad';

DELETE FROM actors
WHERE first_name = 'Angelina';

-- actor_id 3 'Gal'

ALTER TABLE actors RENAME COLUMN number_oscars TO just_number;

SELECT * FROM actors;
