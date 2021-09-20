# Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$

CREATE FUNCTION getNumberOfPaymentsByCustomer(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE numberOfPayments INT;
	SELECT 
    COUNT(payment_id) AS payments
FROM
    payment
WHERE
    customer_id = id INTO numberOfPayments;
	RETURN numberOfPayments;
END $$

DELIMITER ;

SELECT getNumberOfPaymentsByCustomer(4);

# Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$

CREATE FUNCTION getFilmTitleByInventaryId(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE filmTitle VARCHAR(100);
	SELECT 
		f.title AS title
	FROM
		film AS f
	WHERE
		f.film_id = (SELECT 
				i.film_id
			FROM
				inventory AS i
			WHERE
				inventory_id = id) INTO filmTitle;
	RETURN filmTitle;
END $$

DELIMITER ;

SELECT getFilmTitleByInventaryId(19);

# Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$

CREATE FUNCTION getNumberOfFilmsByCategory(categoryName VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE numberOfFilms INT;
	SELECT 
		COUNT(fc.film_id)
	FROM
		film_category AS fc
			JOIN
		category AS c ON c.category_id = fc.category_id
	WHERE
		c.`name` = categoryName into numberOfFilms;
	RETURN numberOfFilms;
END $$

DELIMITER ;

SELECT getNumberOfFilmsByCategory('horror');
