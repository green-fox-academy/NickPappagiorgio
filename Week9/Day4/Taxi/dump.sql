CREATE TABLE cars (
  id int(11) NOT NULL,
  company varchar(50) NOT NULL,
  licence_plate varchar(7) NOT NULL,
  capacity tinyint(4) NOT NULL,
  price int(11) NOT NULL
);

INSERT INTO cars (id, company, licence_plate, capacity, price) VALUES
(1, 'Csudapest taxi', 'ABC-123', 4, 55),
(2, 'Absolut', 'ABS-001', 4, 54),
(3, 'Absolut', 'ABS-002', 3, 54),
(4, 'Absolut', 'ABS-003', 4, 54),
(5, 'Maxi', 'MMM-123', 7, 75),
(6, 'Maxi', 'MMM-845', 7, 75);

ALTER TABLE cars
  ADD PRIMARY KEY (id);

ALTER TABLE cars
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;