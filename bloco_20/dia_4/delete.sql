SELECT 
    *
FROM
    film_category;

# Exclua do banco de dados o ator com o nome de "KARL".
DELETE FROM film_actor 
WHERE
    actor_id = 12;
    
DELETE FROM actor 
WHERE
    first_name = 'karl';

# Exclua do banco de dados os atores com o nome de "MATTHEW".
DELETE FROM film_actor 
WHERE
    actor_id IN (SELECT 
        actor_id
    FROM
        actor
    WHERE
        first_name = 'matthew');

DELETE FROM actor 
WHERE
    first_name = 'Matthew';

# Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM film_text 
WHERE
    `description` LIKE '%saga%';

# Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
truncate film_actor;
truncate film_category;

# Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
# sakila.address => ON DELETE RESTRICT
# sakila.city => ON DELETE RESTRICT
# sakila.customer => ON DELETE RESTRICT
# sakila.film => ON DELETE RESTRICT
# sakila.filma_actor => ON DELETE RESTRICT
# sakila.inventory => ON DELETE RESTRICT
# sakila.payment => ON DELETE RESTRICT
# sakila.rental => ON DELETE RESTRICT
# sakila.staff => ON DELETE RESTRICT
# sakila.store => ON DELETE RESTRICT

# Exclua o banco de dados e o recrie (use as instruções no início desta aula).
