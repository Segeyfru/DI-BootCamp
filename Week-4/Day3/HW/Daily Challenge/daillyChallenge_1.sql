-- CREATE TABLE customer(
-- 	customer_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (20) NOT NULL,
-- 	last_name VARCHAR (30) NOT NULL);
	
-- CREATE TABLE customer_profile(
-- 	id SERIAL,
-- 	isLoggedIn BOOLEAN DEFAULT FALSE,
-- 	customer_id INTEGER REFERENCES customer(customer_id) ON DELETE CASCADE);

-- INSERT INTO customer(first_name, last_name)
-- VALUES
-- ('John','Doe'),
-- ('Jerome','Lalu'),
-- ('Lea','Rive');

-- INSERT INTO customer_profile(isLoggedIn, customer_id)
-- VALUES
-- (TRUE, (SELECT customer_id FROM customer WHERE first_name = 'John')),
-- (FALSE, (SELECT customer_id FROM customer WHERE first_name = 'Jerome'));


SELECT customer.first_name FROM customer
INNER JOIN customer_profile ON customer.customer_id = customer_profile.customer_id
WHERE customer_profile.isLoggedIn is true;

SELECT customer.first_name, customer_profile.isLoggedIn FROM customer
LEFT JOIN customer_profile ON customer.customer_id = customer_profile.customer_id;

SELECT COUNT(*) FROM customer
LEFT JOIN customer_profile ON customer.customer_id = customer_profile.customer_id
WHERE customer_profile.isLoggedIn IS NOT false;


 
 