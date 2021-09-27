USE sakila;

# Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- 1.85

CREATE FULLTEXT INDEX category_name_index ON category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
-- 0.35

DROP INDEX category_name_index ON category;

# Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- 65.40

CREATE INDEX postalCode_index ON address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- 0.95

