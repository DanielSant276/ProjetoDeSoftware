CREATE DATABASE livrariasibd;

CREATE TABLE clientes (
  idCliente INT AUTO_INCREMENT,
  clienteQtdLocada INT NOT NULL,
  clienteTelefone VARCHAR(255) NOT NULL,
  clienteEndereco VARCHAR(255) NOT NULL,
  clienteCPF VARCHAR(255) NOT NULL UNIQUE,
  clienteNome VARCHAR(255) NOT NULL,
  PRIMARY KEY (idCliente)
);

CREATE TABLE dependentes (
  idDependente INT AUTO_INCREMENT,
  depCPF VARCHAR(255) NOT NULL,
  depNome VARCHAR(255) NOT NULL,
  PRIMARY KEY (idDependente) 
);

CREATE TABLE clienteDependentes (
  idCliente INT NOT NULL,
  idDependente INT NOT NULL,
  FOREIGN KEY (idCliente) REFERENCES cliente (idCliente),
  FOREIGN KEY (idDependente) REFERENCES dependente (idDependente)
);

CREATE TABLE locacoes (
  idLocacao INT AUTO_INCREMENT,
  idCliente INT NOT NULL,
  locacaoMulta FLOAT,
  locacaoPreco FLOAT NOT NULL,
  dataDevolucao DATE NOT NULL,
  dataLocada DATE NOT NULL,
  locacaoEstado ENUM("locado", "atrasado", "devolvido"),
  PRIMARY KEY (idLocacao)
);

CREATE TABLE usuarios (
  idUsuario INT AUTO_INCREMENT,
  usuarioTipo ENUM("gerente", "atendente") NOT NULL,
  senha VARCHAR(255) NOT NULL,
  login VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (idUsuario)
);

CREATE TABLE produtos (
  idProduto INT AUTO_INCREMENT,
  numExemplares INT NOT NULL,
  lancamento DATE NOT NULL,
  edicao INT NOT NULL,
  qtdPaginas INT NOT NULL,
  autor VARCHAR(255) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  tituloProduto VARCHAR(255) NOT NULL,
  qtdLocados INT NOT NULL,
  PRIMARY KEY (idProduto)
);

CREATE TABLE locacaoProdutos (
  idLocacao INT NOT NULL,
  idProduto INT NOT NULL,
  FOREIGN KEY (idLocacao) REFERENCES locacao (idLocacao),
  FOREIGN KEY (idProduto) REFERENCES produto (idProduto)
);

CREATE TABLE generos (
  idGenero INT AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (idTag)
);

CREATE TABLE produtoGeneros (
  idProduto INT NOT NULL,
  idGenero INT NOT NULL,
  FOREIGN KEY (idProduto) REFERENCES produto (idProduto),
  FOREIGN KEY (idTag) REFERENCES tag (idTag)
);




INSERT INTO clientes (idCliente, clienteQtdLocada, clienteTelefone, clienteEndereco, clienteCPF, clienteNome, createdAt, updatedAt) 
VALUES (1, 1, "21900000000", "Rua Teste, Número 5", "000-000-000-00", "josé da silva", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (2, 1, "21910000000", "Rua Teste, Número 2", "001-000-000-00", "jose fino da silva", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (3, 1, "21920000000", "Rua Teste, Número 33", "000-002-000-00", "jiovanna silve", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (4, 1, "21930000000", "Rua Teste, Número 1", "000-000-003-00", "johanna silva", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (5, 1, "21940000000", "Rua Teste, Número 90", "000-000-000-04", "josefina da silva", "2022-08-12 02:01:08", "2022-08-12 02:01:08");

INSERT INTO dependentes (idDependente, depCPF, depNome, createdAt, updatedAt) 
VALUES (1, "011-000-000-00", "maria da silva", "2022-08-12 02:01:08", "2022-08-12 02:01:08");

INSERT INTO clienteDependentes (idCliente, idDependente, createdAt, updatedAt) 
VALUES (1, 1, "2022-08-12 02:01:08", "2022-08-12 02:01:08");

-- senhas em ordem teste123, teste103, teste113, teste1a3, teste1b3 --

INSERT INTO usuarios (idUsuario, usuarioTipo, senha, login, createdAt, updatedAt) 
VALUES (1, "gerente", "289160db0d9f39f9ae1754c4ec9c16f90b50e32e09c5fb5481ae642b3d3d1a36", "gerente_01", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (2, "atendente", "7f15dbd82776d58d3c40cec59afc04877281591257134b394726dc15d9e4274c", "atendente_01", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (3, "atendente", "25c16608fc3c5e9f461a42a0683b844041ebcc12a5b4eb6ac90cb8e173a001f1", "atendente_02", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (4, "atendente", "b57f327aaa4631b2ac18fef0be3f816c76e47d90a16c7d472db1d00765fe674b", "atendente_03", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (5, "atendente", "7bf7f0f2e6af2c5c4b1c00fea154121c09f46fd0e15c4c217ac53bae068f7b21", "atendente_04", "2022-08-12 02:01:08", "2022-08-12 02:01:08");

INSERT INTO locacoes (idLocacao, idCliente, locacaoMulta, locacaoPreço, dataDevolucao, dataLocada, locacaoEstado, createdAt, updatedAt) 
VALUES (1, 1, 3.00, 34.50, "2022-09-12", "2022-09-06", "atrasado", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (2, 2, 0, 34.50, "2022-09-15", "2022-09-06", "locado", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (3, 3, 0, 34.50, "2022-09-17", "2022-09-06", "locado", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (4, 4, 0, 34.50, "2022-09-16", "2022-09-06", "locado", "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (5, 5, 0, 34.50, "2022-09-13", "2022-07-06", "devolvido", "2022-08-12 02:01:08", "2022-08-12 02:01:08");


INSERT INTO produtos (idProduto, numExemplares, lancamento, edicao,qtdPaginas, autor,descricao, tituloProduto, qtdLocados, createdAt, updatedAt) 
VALUES (1, 4, "2006", 1, 666, "Rick Riordan", "Série InfantoJuvenil", "Percy Jackson e O Ladrão de Raios", 1, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (2, 2, "2007", 1, 365, "Rick Riordan", "Série InfantoJuvenil", "Percy Jackson e O Mar de Monstros", 1, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (3, 2, "2008", 1, 365, "Rick Riordan", "Série InfantoJuvenil", "Percy Jackson e A maldição do titã", 1, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (4, 2, "2009", 1, 365, "Rick Riordan", "Série InfantoJuvenil", "Percy Jackson e A batalha do Labirinto", 1, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (5, 5, "2010", 1, 365, "Rick Riordan", "Série InfantoJuvenil", "Percy Jackson e O último Olimpiano", 1, "2022-08-12 02:01:08", "2022-08-12 02:01:08");

INSERT INTO produtoGeneros (idProduto, idGenero, createdAt, updatedAt) 
VALUES (1, 3, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (2, 4, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (3, 6, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (4, 8, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (5, 11, "2022-08-12 02:01:08", "2022-08-12 02:01:08");

INSERT INTO locacaoProdutos (idLocacao, idProduto, createdAt, updatedAt) 
VALUES (1, 1, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (2, 2, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (3, 3, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (4, 4, "2022-08-12 02:01:08", "2022-08-12 02:01:08"),
       (5, 5, "2022-08-12 02:01:08", "2022-08-12 02:01:08");