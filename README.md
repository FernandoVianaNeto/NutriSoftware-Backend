Para execução do programa em desenvolvimento é necessário seguir alguns passos:

## 1 - Rodar o banco de dados

Antes de tudo, para que todo o backend e frontend funcionem de forma integrada, é fundamento que o banco de dados esteja rodando e funcionando. Para isso, eu utilizei o docker como uma forma de rodar o backend como um container.

Para isso, é importante instalar todas as dependências da aplicação. Em seguida, rodas os seguintes comandos no terminal, do vscode de preferência: 

## docker run --name soildb -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

## docker exec -it soil bash

## psql -U root

Ao efetuar esses comandos, o container estará rodando, mas o db não está funcionando ainda, já que não criamos. Para isso, execute o comando: CREATE DATABASE soildb;

Em seguida, \connect soildb. Pronto, após isso, a database ja está criada e só precisamos criar as tabelas e extensões:

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
  vegetablefood VARCHAR,
  date VARCHAR NOT NULL, 
  reference UUID NOT NULL
);

(pode checar todos os comandos para o database dentro de src/database/schema.sql)

Pronto, o banco de dados está funcionando e rodando. Só precisamos rodar a aplicação em desenvolvimento utilizando o comando: 

## yarn dev

