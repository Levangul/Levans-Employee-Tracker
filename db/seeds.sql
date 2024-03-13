INSERT INTO department (name)
VALUES
("sales"),
("marketing"),
("Finance"),
("Human Resources"),
("Informat ion Technology");

INSERT INTO role (title, salary, department_id)
VALUES
("IT Lead","$80,000.00",5),
("Sales Rep","$40,000.00",1),
("HR Manager","$95,000.00",4),
("CFO","$120,000.00",3),
("IT Specialist","$50,000.00",5)
("Marketing Specialist","$45,000.00",2),
("Marketing Manager","$95,000.00",2),
("HR Specialist","$45,000.00",4),
("Sales Manager","$90,000.00",1),
("Financial Analyst","$70,000.00",3);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES 
("Olivia","Mitchell",2,Null),
("Ethan","Reynolds",4,4),
("Sophia","Patel",1,5),
("Mason","Carter",10,NULL),
("Ava","Thompson",8,NULL),
("Liam","Rodriguez",5,NULL),
("Isabella","Wright",3,3),
("Noah","Turner",6,NULL),
("Mia","Foster",7,7),
("Lucas","Hayes",9,9);