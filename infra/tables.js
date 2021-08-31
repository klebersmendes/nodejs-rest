const { connect } = require("./conect");

class Tables {
    init(conexao){
        this.conexao = conexao
        this.criarTasks()
    }

    criarTasks() {
        const sql = 'CREATE TABLE IF NOT EXISTS tasks (id int NOT NULL AUTO_INCREMENT, title varchar(250) NOT NULL, description text, owner varchar(250), company varchar(250) NOT NULL, create_at datetime NOT NULL, update_at datetime NOT NULL, PRIMARY KEY(id))'
        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log("Tabela tasks criada com sucesso.");
            }
        })
    }
}

module.exports = new Tables