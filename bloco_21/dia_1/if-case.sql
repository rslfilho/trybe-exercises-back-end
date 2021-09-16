USE sakila;

# Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?' , em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.
SELECT 
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER',
        'Já assisti a esse filme',
        'Não conheço o filme') AS `conheço o filme?`
FROM
    film;

# Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:
SELECT 
    title,
    rating,
    CASE rating
        WHEN 'g' THEN 'Livre para todos'
        WHEN 'pg' THEN 'Não recomendado para menores de 10 anos'
        WHEN 'pg-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN 'r' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS `público-alvo`
FROM
    film;
