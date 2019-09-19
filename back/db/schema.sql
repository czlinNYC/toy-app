DROP DATABASE IF EXISTS afthaMembers;

CREATE DATABASE afthaMembers;

\connect afthaMembers;
-- tables for the script and user
DROP TABLE IF EXISTS members;

CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(50),
    github VARCHAR(30),
    joined_at TIMESTAMP NOT NULL DEFAULT now()
);