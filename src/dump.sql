-- Active: 1696269749668@@127.0.0.1@5432@autenticacao_criptografia

CREATE TABLE carros (
    id serial primary key,
    modelo text not null,
    marca text not null,
    ano integer not null,
    cor text not null,
    descricao text
);