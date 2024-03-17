-- CREATE TABLE items(
-- 	item_id SERIAL PRIMARY KEY, 
-- 	item_name VARCHAR (30) NOT NULL,
-- 	item_price SMALLINT NOT NULL);
-- CREATE TABLE customers(
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (20) NOT NULL,
-- 	last_name VARCHAR (30) NOT NULL)

-- INSERT INTO items(item_name, item_price)
-- VALUES
-- ('Small Desk', '100'),
-- ('Large Desk', '300'),
-- ('Fan', '80');
-- INSERT INTO customers(first_name, last_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

-- SELECT * FROM items;

-- SELECT * FROM customers;

-- SELECT * FROM items WHERE item_price >  80;
-- SELECT * FROM items WHERE item_price <= 300;
-- SELECT * FROM customers WHERE last_name = 'Smith';
-- SELECT * FROM customers WHERE last_name = 'Jones';
SELECT * FROM customers WHERE first_name != 'Scott'
