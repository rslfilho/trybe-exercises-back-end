USE sakila;

# Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT 
    IF(active = 1, 'Ativo', 'Inativo') AS `Situação`,
    COUNT(active) AS `Quantidade`
FROM
    customer
GROUP BY active;

# Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .
SELECT 
    store_id AS `Loja`,
    IF(active = 1, 'Ativo', 'Inativo') AS `Status`,
    COUNT(active) AS `Quantidade`
FROM
    customer
GROUP BY active , store_id
ORDER BY store_id;

# Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT 
    rating AS `Classificação Indicativa`,
    ROUND(AVG(length), 2) AS `Média de duração`
FROM
    film
GROUP BY rating
ORDER BY AVG(length) DESC;

# Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT 
    district AS `Distrito`,
    COUNT(address) AS `Quantidade de endereços`
FROM
    address
GROUP BY district
ORDER BY COUNT(address) DESC , district;
