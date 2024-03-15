-- Active: 1710200740074@@127.0.0.1@3306@employees_db
INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Developer'),
    ('Finance'),
    ('Administration');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Developer', 150000, 2),
    ('Graphic Designer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Office Manager', 250000, 4),
    ('Receptionist', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Travolta', 1, NULL),
    ('Bernard', 'Polaski', 2, 1),
    ('David', 'Hradecky', 3, NULL),
    ('Martha', 'Cole', 4, 3),
    ('Sarah', 'Black', 5, NULL),
    ('Leonardo', 'Brown', 6, 5),
    ('Levan', 'Garfield', 7, NULL),
    ('Sean', 'Allen', 8, 7);
    