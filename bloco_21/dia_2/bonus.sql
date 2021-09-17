USE Pixar;

# Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
SELECT 
    m.*
FROM
    movies AS m
        JOIN
    boxoffice AS b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;

# Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT 
    t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM
    movies AS t1,
    movies AS t2
WHERE
    t1.director = t2.director;

# Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
SELECT 
    m.title
FROM
    movies AS m
        JOIN
    boxoffice AS b ON b.movie_id = m.id
WHERE
    b.international_sales + b.domestic_sales >= 500000000
        AND m.length_minutes > 110;
        
SELECT 
    m.title
FROM
    movies AS m
WHERE
    EXISTS( SELECT 
            *
        FROM
            boxoffice AS b
        WHERE
            b.movie_id = m.id
                AND b.domestic_sales + b.international_sales >= 500000000)
        AND m.length_minutes > 110;

