const Task = require('../models/tasks')

module.exports = app => {
    app.get('/tasks', (req, res) => {
        Task.list(res)
    })

    app.get('/tasks/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Task.getItem(id, res)
    })

    app.post('/tasks', (req, res) => {
        const task = req.body        
        Task.create(task, res)        
    })

    app.patch('/tasks/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body
        Task.update(id, values, res)
    })

    app.delete('/tasks/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Task.delete(id, res)
    })
}