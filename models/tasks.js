const moment = require('moment')
const conexao = require('../infra/conect')

class Task {
    create(task) {
        const create_at = moment(task.create_at, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const update_at = moment().format('YYYY-MM-DD')        
        const createAtTask = {...task, create_at, update_at}
        const sql = 'INSERT INTO tasks SET ?'
        conexao.query(sql, createAtTask, (erro, res) => {
            if(erro){
                console.log(erro)
            } else {
                console.log(res)
            }
        })
    }
}

module.exports = new Task