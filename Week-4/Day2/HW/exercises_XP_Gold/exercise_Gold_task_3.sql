-- Part I

-- Create a table named purchases. It should have 3 columns :
-- id : the primary key of the table
-- customer_id : this column references the table customers
-- item_id : this column references the table items
-- quantity_purchased : this column is the quantity of items purchased by a certain customer

-- CREATE TABLE purchases (
-- 	id SERIAL PRIMARY KEY,
-- 	customer_id INTEGER,
-- 	item_id INTEGER,
-- 	quantity_purchased SMALLINT,
-- 	FOREIGN KEY (customer_id) REFERENCES customers (id),
-- 	FOREIGN KEY (item_id) REFERENCES items (item_id)
-- );

-- INSERT INTO purchases(customer_id, item_id, quantity_purchased)
-- VALUES
-- ((SELECT id FROM customers WHERE first_name = 'Scott'AND last_name = 'Scott'),
-- (SELECT item_id FROM items WHERE item_name = 'Fan'),
-- 1),
-- ((SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
-- (SELECT item_id FROM items WHERE item_name = 'Large Desk'),
-- 10),
-- ((SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
-- (SELECT item_id FROM items WHERE item_name = 'Small Desk'),
-- 2)
-- ;

-- SELECT * FROM purchases;


-- Part II

-- Use SQL to get the following from the database:
	-- All purchases. Is this information useful to us?+
	
-- SELECT * FROM purchases;

	-- All purchases, joining with the customers table.+
	
-- SELECT * FROM purchases INNER JOIN customers ON customers.id = purchases.customer_id;

	-- Purchases of the customer with the ID equal to 5.++
	
-- SELECT purchases.customer_id, purchases.item_id, purchases.quantity_purchased FROM purchases INNER JOIN customers ON customers.id = purchases.customer_id
-- WHERE customers.id = '5';

	-- Purchases for a large desk AND a small desk+
	
-- SELECT purchases.customer_id, purchases.item_id, purchases.quantity_purchased FROM purchases INNER JOIN items ON items.item_id = purchases.item_id WHERE items.item_name IN ('Large Desk', 'Small Desk')



-- Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
	-- Customer first name
	-- Customer last name
	-- Item name
	
-- SELECT customers.first_name, customers.last_name,items.item_name, purchases.quantity_purchased 
-- FROM purchases 
-- INNER JOIN customers ON customers.id = purchases.customer_id 
-- INNER JOIN items ON items.item_id = purchases.item_id

-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?

-- INSERT INTO purchases(customer_id, quantity_purchased)
-- VALUES
-- ((SELECT id FROM customers WHERE first_name = 'Trevor'AND last_name = 'Green'),
-- 1);

-- select * from purchases;







