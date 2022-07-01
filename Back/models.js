const Sequelize = require('sequelize')
//(servidor, usuário, senha)
const sequelize = new Sequelize('teste', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falha ao se conectar: "+erro)
// })

const Client = sequelize.define("cliente", {
    idCliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    clienteQtdLocada: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    clienteTelefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clienteEndereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clienteCPF: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    clienteNome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
// Client.sync({force: true})

const Dependent = sequelize.define("dependente", {
    idDependente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    depResponsavel: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// Dependent.sync({force:true})

const Rental = sequelize.define("locacao", {
    idLocacao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    locacaoMulta: {
        type: Sequelize.FLOAT
    },
    locacaoPreço: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    dataDevolucao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dataLocada: {
        type: Sequelize.DATE,
        allowNull: false
    },
    locacaoEstado: {
        type: Sequelize.ENUM("locado", "pendente", "atrasado")
    }
})

// Rental.sync({force: true})

const User = sequelize.define("usuario", {
    idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuarioTipo: {
        type: Sequelize.ENUM("gerente", "atendente"),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

// User.sync({force: true})

const Product = sequelize.define("produto", {
    idProduto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    numExemplares: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    lancamento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    edicao: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    qtdPaginas: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    tituloProduto: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Product.sync({force:true})

const Tag = sequelize.define("tag", {
    idTag: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

// Tag.sync({force:true})

const ClientDependent = sequelize.define("clienteDependente", {
    idCliente: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
            model: Client,
            key: "idCliente",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    idDependente: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
            model: Dependent,
            key: "idDependente",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
})
// ClientDependent.sync({force:true})

const ClientRentals = sequelize.define("clienteLocacao", {
    idCliente: {
        type: Sequelize.INTEGER,
        // allowNull: false,        
        references: {
            model: Client,
            key: "idCliente",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    idLocacao: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
            model: Rental,
            key: "idLocacao",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
})

// ClientRentals.sync({force:true})

const RentalProduct = sequelize.define("locacaoProduto", {
    idLocacao: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
            model: Rental,
            key: "idLocacao",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    idProduto: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
            model: Product,
            key: "idProduto",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
})

// RentalProduct.sync({force:true})

const ProductTag = sequelize.define("produtoTag", {
    idProduto: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
            model: Product,
            key: "idProduto",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    idTag: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
            model: Tag,
            key: "idTag",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
})

// ProductTag.sync({force:true})