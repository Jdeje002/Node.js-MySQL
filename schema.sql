DROP DATABASE IF EXISTS bamazon

CREATE DATABASE bamazon

USE bamazon

CREATE TABLE products (
    id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER(11) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
)
