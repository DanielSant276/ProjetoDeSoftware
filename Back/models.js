const Sequelize = require('sequelize')
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
        type: Sequelize.INTEGER
    },
    clienteTelefone: {
        type: Sequelize.STRING
    },
    clienteEndereco: {
        type: Sequelize.STRING
    },
    clienteCPF: {
        type: Sequelize.STRING
    },
    clienteNome: {
        type: Sequelize.STRING
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
        type: Sequelize.INTEGER
    }
})

// Dependent.sync({force:true})

//olhar essa tabela de clientdependent

// const ClientDependent = sequelize.define("clienteDependente", {
//     idCliente: {
//         type: Sequelize.INTEGER,
//         references: {
//             model: Client,
//             key: "idCliente",
//             deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
//         }
//     },
//     idDependente: {
//         type: Sequelize.INTEGER,
//         references: {
//             model: Dependent,
//             key: "idDependente",
//             deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
//         }
//     }
// })
// ClientDependent.sync({force:true})

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
        type: Sequelize.DATE
    },
    dataLocada: {
        type: Sequelize.DATE
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
        type: Sequelize.ENUM("gerente", "atendente")
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
