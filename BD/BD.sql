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
  locacaoEstado ENUM('locado', 'atrasado', 'devolvido'),
  PRIMARY KEY (idLocacao)
);

CREATE TABLE usuarios (
  idUsuario INT AUTO_INCREMENT,
  usuarioTipo ENUM('gerente', 'atendente') NOT NULL,
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