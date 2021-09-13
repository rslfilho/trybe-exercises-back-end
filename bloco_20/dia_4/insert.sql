SELECT 
    *
FROM
    store;
    
# Insira um novo funcionário na tabela sakila.staff .
insert into staff (first_name, last_name, address_id, email, store_id, active, username, `password`)
values ('Roberval', 'Filho', 3, 'rslfilho@gmail.com', 2, true, 'rslfilho', 123456);

# Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
insert into staff (first_name, last_name, address_id, email, store_id, active, username) values
('João', 'Pedro', 4, 'joao@email.com', 1, true, 'Joao'),
('Maria', 'Amélia', 3, 'maria@email.com', 2, true, 'Maria');

# Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO actor (first_name, last_name)
	SELECT 
		first_name, last_name
	FROM
		customer
	LIMIT 5;
    
# Cadastre três categorias de uma vez só na tabela sakila.category .
	INSERT INTO category (`name`) VALUES
    ('Add 1'),
    ('Add 2'),
    ('Add 3'),
    ('Add 4'),
    ('Add 5');
    
# Cadastre uma nova loja na tabela sakila.store .
	INSERT INTO store (manager_staff_id, address_id)
		VALUES (3, 3);