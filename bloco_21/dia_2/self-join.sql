USE sakila;

# Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT 
    t1.film_id,
    t1.replacement_cost,
    t2.film_id,
    t2.replacement_cost
FROM
    film AS t1,
    film AS t2
WHERE
    t1.replacement_cost = t2.replacement_cost;

# Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT 
    t1.title, t1.length, t2.title, t2.length
FROM
    film AS t1,
    film AS t2
WHERE
    t1.rental_duration = t1.rental_duration;
