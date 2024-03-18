-- CREATE TABLE movies(
-- 	movie_id SERIAL,
-- 	movie_title VARCHAR (50) NOT NULL,
-- 	movie_story TEXT,
-- 	actor_playing_id INTEGER,
-- 	PRIMARY KEY (movie_id),
-- 	FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
-- ('Wounder Woman',
--  'An immortal Amazon warrior demigoddess who is the crown princess of Themyscira and the daughter of Queen Hippolyta and Zeus being raised by the Amazons.
-- ',(SELECT actor_id FROM actors WHERE first_name = 'Gal' AND last_name = 'Gadot'));

-- INSERT INTO movies (movie_title, movie_story) VALUES
-- ('Harry Potter and the goblet of fire',
-- 'Harry Potter has a nightmare in which a Muggle caretaker is murdered after overhearing a plot by Lord Voldemort, Peter Pettigrew and another man whom');

-- SELECT * FROM movies;
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id


-- LEFT JOIN : ALL THE DATA IN THE LEFT TABLE AND DATA FROM THE RIGHT TABLE
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- LEFT OUTER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id

 
-- RIGHT JOIN : ALL THE DATA IN THE RIGHT TABLE AND DATA FROM THE LEFT TABLE

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- RIGHT OUTER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id

-- FULL JOIN: GIVES EVERETHING FROM BOTH TABLE


-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- FULL OUTER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id






