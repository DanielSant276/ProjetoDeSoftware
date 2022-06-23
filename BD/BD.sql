CREATE DATABASE livrariabd;
 
CREATE TABLE cliente (
  idCliente INT AUTO_INCREMENT,
  clienteQtdLocada INT NOT NULL,
  clienteTelefone VARCHAR(255) NOT NULL,
  clienteEndereco VARCHAR(255) NOT NULL,
  clienteCPF VARCHAR(255) NOT NULL UNIQUE,
  clienteNome VARCHAR(255) NOT NULL,
  PRIMARY KEY (idCliente)
);

CREATE TABLE dependente (
  idDependente INT AUTO_INCREMENT,
  depResponsavel VARCHAR(255) NOT NULL,
  PRIMARY KEY (idDependente) 
);

CREATE TABLE clienteDependente (
  idCliente INT NOT NULL,
  idDependente INT NOT NULL,
  FOREIGN KEY (idCliente) REFERENCES cliente (idCliente),
  FOREIGN KEY (idDependente) REFERENCES dependente (idDependente)
);

CREATE TABLE locacao (
  idLocacao INT AUTO_INCREMENT,
  locacaoMulta FLOAT,
  locacaoPreco FLOAT NOT NULL,
  dataDevolucao DATE NOT NULL,
  dataLocada DATE NOT NULL,
  locacaoEstado ENUM('locado', 'pendente', 'atrasado'),
  PRIMARY KEY (idLocacao)
);

CREATE TABLE clienteLocacao (
  idCliente INT NOT NULL,
  idLocacao INT NOT NULL,
  FOREIGN KEY (idCliente) REFERENCES cliente (idCliente),
  FOREIGN KEY (idLocacao) REFERENCES locacao (idLocacao) 
);

CREATE TABLE usuario (
  idUsuario INT AUTO_INCREMENT,
  usuarioTipo ENUM('gerente', 'atendente') NOT NULL,
  senha VARCHAR(255) NOT NULL,
  login VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (idUsuario)
);

CREATE TABLE produto (
  idProduto INT AUTO_INCREMENT,
  numExemplares INT NOT NULL,
  lancamento DATE NOT NULL,
  edicao INT NOT NULL,
  qtdPaginas INT NOT NULL,
  autor VARCHAR(255) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  tituloProduto VARCHAR(255) NOT NULL,
  PRIMARY KEY (idProduto)
);

CREATE TABLE locacaoProduto (
  idLocacao INT NOT NULL,
  idProduto INT NOT NULL,
  FOREIGN KEY (idLocacao) REFERENCES locacao (idLocacao),
  FOREIGN KEY (idProduto) REFERENCES produto (idProduto)
);

CREATE TABLE tag (
  idTag INT AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (idTag)
);

CREATE TABLE produtoTag (
  idProduto INT NOT NULL,
  idTag INT NOT NULL,
  FOREIGN KEY (idProduto) REFERENCES produto (idProduto),
  FOREIGN KEY (idTag) REFERENCES tag (idTag)
);