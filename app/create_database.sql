create database notas;

use notas;

create table alumnos (
	ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL
    );

create table materias (
	IDMateria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL
    );
    
create table MxA (
	ID INT NOT NULL,
    IDMateria INT NOT NULL,
    Nota INT DEFAULT NULL, 
    CHECK (Nota>=1 && Nota <=10)
    );
    
create table users (
	nombre VARCHAR(45) NOT NULL,
    passwordhash VARCHAR(255) NOT NULL
);