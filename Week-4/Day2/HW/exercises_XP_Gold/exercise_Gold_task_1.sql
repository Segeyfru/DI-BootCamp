-- You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- 	1.Find out how many films there are for each rating.
-- 	2.Get a list of all the movies that have a rating of G or PG-13.
-- 		1.Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
-- 	3.Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- 	4.Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).

-- 		TASK 1
-- SELECT rating, COUNT(*) AS film_count FROM film GROUP BY rating;

-- -- 		TASK 2
-- SELECT * FROM film WHERE rating IN('G','PG-13');

-- -- 		TASK 2.1
-- SELECT * FROM film WHERE rating IN('G','PG-13') AND length < 120 AND rental_rate < 3.00;

-- -- 		TASK 3
-- UPDATE customer SET first_name ='Sergey', last_name ='Fruman', email ='sergeyfru@mail.com' WHERE first_name ='Nina' AND last_name ='Soto';



-- 		TASK 4

-- UPDATE address 
-- SET address ='Chen 5, Petach-Tikva',
-- district = 'Gush-Dan',
-- postal_code ='4952017',
-- phone = '0584037556'
-- FROM customer
-- WHERE customer.address_id = address.address_id
-- AND last_name = 'Fruman';

SELECT * FROM address INNER JOIN customer ON customer.address_id = address.address_id
WHERE last_name = 'Fruman';