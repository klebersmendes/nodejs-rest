const moment = require('moment')
const conexao = require('../infra/conect')
class Task {    
    create(task, res)
    {
        const create_at = moment().format('YYYY-MM-DD HH:MM:SS')
        const update_at = moment().format('YYYY-MM-DD HH:MM:SS')
        
        const titleIsValid = task.title.length >= 5
        const descriptionIsValid = task.description.length >= 10
        const companyIsValid = task.company.length >= 5
        
        const validations = [
            {
                name: 'title',
                valid: titleIsValid,
                mensagem: 'Title is invalid, the text must be at least 5 characters.'
            },
            {
                name: 'description',
                valid: descriptionIsValid,
                mensagem: 'Description is invalid, the text must be at least 10 characters.'
            },
            {
                name: 'company',
                valid: companyIsValid,
                mensagem: 'Company is invalid.'
            },
        ]

        const errors = validations.filter(field => !field.valid)

        const isErrors = errors.length

        if(isErrors){
            res.status(400).json(errors)            
        } else {
            const createAtTask = {...task, create_at, update_at}
            const sql = 'INSERT INTO tasks SET ?'

            conexao.query(sql, createAtTask, (erro, response) => {
                if(erro){
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(task)
                }
            })
        }
    }
    
    list(res)
    {
        const sql = 'SELECT * FROM tasks'

        conexao.query(sql, (erro, response) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(response)
            }
        })
    }

    getItem(id, res)
    {
        const sql = `SELECT * FROM tasks WHERE id=${id}`
        
        conexao.query(sql, (erro, response) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

    update(id, values, res)
    {
        const sql = `UPDATE tasks SET ? WHERE id=?`
        
        conexao.query(sql, [values, id], (erro, response) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

    delete(id, res)
    {
        const sql = `DELETE FROM tasks WHERE id=?`
        
        conexao.query(sql, id, (erro, response) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}
module.exports = new Task