CREATE USER 'marbo'@'localhost' IDENTIFIED BY 'marbo123';

GRANT ALL PRIVILEGES ON notas.* TO 'marbo'@'localhost';

flush privileges;