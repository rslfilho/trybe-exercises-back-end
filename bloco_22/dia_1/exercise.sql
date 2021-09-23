CREATE DATABASE zoo;

USE zoo;

CREATE TABLE staffs(
	staff_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE managers (
    manager_id INT PRIMARY KEY AUTO_INCREMENT,
    staff_id INT NOT NULL,
    FOREIGN KEY (staff_id) REFERENCES staffs (staff_id)
)  ENGINE=INNODB;

CREATE TABLE tutors (
    tutor_id INT PRIMARY KEY AUTO_INCREMENT,
    staff_id INT NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (staff_id) REFERENCES staffs (staff_id),
    FOREIGN KEY (manager_id) REFERENCES managers (manager_id)
)  ENGINE=INNODB;

CREATE TABLE locations(
	location_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE species(
	specie_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE animals (
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    specie_id INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    location_id INT NOT NULL,
    FOREIGN KEY (specie_id) REFERENCES species (specie_id),
    FOREIGN KEY (location_id) REFERENCES locations (location_id)
)  ENGINE=INNODB;

CREATE TABLE animals_tutors(
	animal_id INT,
    tutor_id INT,
	CONSTRAINT PRIMARY KEY(animal_id, tutor_id),
	FOREIGN KEY (animal_id) REFERENCES animals (animal_id),
	FOREIGN KEY (tutor_id) REFERENCES tutors (tutor_id)
) ENGINE=InnoDB;