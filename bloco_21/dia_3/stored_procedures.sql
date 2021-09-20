# Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE getTenMostPopularActors()
BEGIN
	SELECT 
		a.actor_id, COUNT(fa.film_id) AS films
	FROM
		actor AS a
			JOIN
		film_actor AS fa ON a.actor_id = fa.actor_id
	GROUP BY fa.actor_id
	ORDER BY films DESC
	LIMIT 10;
END $$

DELIMITER ;

CALL getTenMostPopularActors();

# Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE getFilmInfosByCategory(IN categoryName VARCHAR(50))
BEGIN
	SELECT 
		f.film_id AS film_id,
		f.title AS title,
		fc.category_id AS category_id,
		c.name AS category
	FROM
		film AS f
			JOIN
		film_category AS fc ON f.film_id = fc.film_id
			JOIN
		category AS c ON c.category_id = fc.category_id
	WHERE
		c.name = categoryName;
END $$

DELIMITER ;

CALL getFilmInfosByCategory('action');

# Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$

CREATE PROCEDURE getCustomerStatus(IN customerEmail VARCHAR(50), OUT customerStatus VARCHAR(200))
BEGIN
	SELECT 
		CONCAT('O cliente ',
				first_name,
				' ',
				last_name,
				' está ',
				IF(active = 1, 'ativo', 'inativo'),
				'.') INTO customerStatus
	FROM
		customer
	WHERE
		email = customerEmail;
END $$

DELIMITER ;

CALL getCustomerStatus('ERICA.MATTHEWS@sakilacustomer.org', @customerStatus);
SELECT @customerStatus;