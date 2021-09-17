USE hotel;

# Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT 
    id, title
FROM
    books AS b
WHERE
    NOT EXISTS( SELECT 
            book_id
        FROM
            books_lent
        WHERE
            book_id = b.id);

# Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT 
    id, title
FROM
    books
WHERE
    EXISTS( SELECT 
            book_id
        FROM
            books_lent
        WHERE
            returned = 0)
        AND title LIKE '%lost%';

# Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT 
    `name`
FROM
    customers AS c
WHERE
    NOT EXISTS( SELECT 
            customerId
        FROM
            carsales
        WHERE
            customerId = c.customerId);

# Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT 
    cus.`name`, car.`name`
FROM
    customers AS cus
        JOIN
    cars AS car
WHERE
    EXISTS( SELECT 
            *
        FROM
            carsales AS cs
        WHERE
            cus.customerId = cs.customerId
                AND car.id = cs.carid);

