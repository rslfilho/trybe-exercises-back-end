USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;

-- Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;

-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

-- Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;

-- Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;

CREATE INDEX index_first_name ON sakila.actor(first_name);

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

DROP INDEX index_first_name ON sakila.actor;

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

CREATE FULLTEXT INDEX index_address ON sakila.address(address);

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');

DROP INDEX index_address ON sakila.address;

SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';