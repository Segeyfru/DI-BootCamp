-- CREATE TABLE colors (
-- 	color_id SERIAL PRIMARY KEY,
-- 	color_name VARCHAR(20)
-- 	);
	
-- CREATE TABLE cars(
-- car_id SERIAL PRIMARY KEY,
-- car_color INTEGER REFERENCES colors (color_id) ON DELETE SET NULL,
-- car_name TEXT);

-- INSERT INTO colors(color_name) VALUES('yellow'), ('red'),('blue');

-- INSERT INTO cars(car_color, car_name) VALUES
-- ((SELECT color_id FROM colors WHERE color_name = 'blue'), 'Mazda'),
-- ((SELECT color_id FROM colors WHERE color_name = 'yellow'), 'BMW'),
-- ((SELECT color_id FROM colors WHERE color_name = 'red'), 'Bugatti');

DELETE FROM colors WHERE color_name = 'red';

DELETE FROM colors WHERE color_name = 'blue';

select * from cars