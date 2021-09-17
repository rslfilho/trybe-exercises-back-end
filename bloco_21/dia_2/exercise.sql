USE pixar;

# Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    boxoffice AS b
        JOIN
    movies AS m ON m.id = b.movie_id;

# Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT 
    m.title,
    (b.domestic_sales + b.international_sales) AS total_sales
FROM
    boxoffice AS b
        JOIN
    movies AS m ON m.id = b.movie_id
WHERE
    b.international_sales > b.domestic_sales;

# Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT 
    m.title, b.rating
FROM
    movies AS m
        JOIN
    boxoffice AS b ON m.id = b.movie_id
ORDER BY rating DESC;

# Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    *
FROM
    theater AS t
        LEFT JOIN
    movies AS m ON m.theater_id = t.id;

# Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    *
FROM
    theater AS t
        RIGHT JOIN
    movies AS m ON m.theater_id = t.id;

# Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT 
    m.title
FROM
    movies AS m
        JOIN
    boxoffice AS b ON m.id = b.movie_id
WHERE
    b.rating > 7.5;
    
SELECT 
    m.title
FROM
    movies AS m
WHERE
    EXISTS( SELECT 
            rating
        FROM
            boxoffice AS b
        WHERE
            m.id = b.movie_id AND b.rating > 7.5);

# Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT 
    b.rating
FROM
    boxoffice AS b
WHERE
    EXISTS( SELECT 
            year
        FROM
            movies AS m
        WHERE
            b.movie_id = m.id AND year > 2009);
            
SELECT 
    b.rating
FROM
    boxoffice AS b
        JOIN
    movies AS m ON b.movie_id = m.id
WHERE
    m.year > 2009;

# Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT 
    t.name, t.location
FROM
    theater AS t
WHERE
    EXISTS( SELECT 
            id
        FROM
            movies AS m
        WHERE
            m.theater_id = t.id
                AND m.theater_id IS NOT NULL);

# Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT 
    t.name, t.location
FROM
    theater AS t
WHERE
    NOT EXISTS( SELECT 
            id
        FROM
            movies AS m
        WHERE
            m.theater_id = t.id
                AND m.theater_id IS NOT NULL);
