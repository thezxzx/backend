create table heroes(
    id int primary key auto_increment,
    nombre varchar(30),
    poder varchar(30)
);

insert into heroes (nombre, poder)
values
    ('Ironman', 'Dinero'),
    ('Spiderman', 'Poderes de araña'),
    ('Capitán américa', 'Drogas')