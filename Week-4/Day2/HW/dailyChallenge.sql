-- 		FirstTab
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar');

-- 		SecondTab
-- (5),
-- (NULL)


-- Q1. What will be the OUTPUT of the following statement?
-- SELECT COUNT (*) FROM  AS ft WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL)

-- count = 0

-- Q2. What will be the OUTPUT of the following statement?

-- 		SELECT COUNT(*) 
-- 		FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- count = 2

-- Q3. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- count = 0

-- Q4. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- count =2