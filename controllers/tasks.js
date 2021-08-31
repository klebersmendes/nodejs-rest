const Task = require('../models/tasks')

module.exports = app => {
    app.get('/tasks', (req, res) => res.send('Você está na rota de tarefas GET.'))
    app.post('/tasks', (req, res) => {
        const task = req.body        
        Task.create(task)
        res.send('Você está na rota de tarefas POST.')
    })
}