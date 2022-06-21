CREATE DATABASE livrariabdteste;
 
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
  locacaoEstado VARCHAR(255),
  PRIMARY KEY (idLocacao)
);

CREATE TABLE clienteLocacao (
  idCliente INT NOT NULL,
  idLocacao INT NOT NULL,
  FOREIGN KEY (idCliente) REFERENCES cliente (idCliente),
  FOREIGN KEY (idLocacao) REFERENCES locacao (idLocacao) 
)