CREATE DATABASE soildb;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  phone VARCHAR,
  password VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS meals (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  meal VARCHAR NOT NULL,
  proteinsamount INTEGER,
  carbohydratesamount INTEGER,
  vegetablesamount INTEGER,
  proteinfood VARCHAR,
  carbohydratefood VARCHAR,
  vegetablefood VARCHAR
);