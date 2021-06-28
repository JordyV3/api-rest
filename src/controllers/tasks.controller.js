import Tasks from '../models/Tasks';

export async function postTasks(req, res){
    const {name, done, project_id} = req.body;
    try {
        let newTasks = await Tasks.create({
            name,
            done,
            project_id
        }, {
            fields: ['name', 'done', 'project_id']
        });
        if (newTasks) {
            return res.json({
                message: 'Tasks created successfully',
                data: newTasks
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
};

export async function getTask (req, res) {
    try {
        const tasks = await Tasks.findAll();
        res.json({
            data: tasks
        });
    } catch (error) {
      console.log(error);  
    }
};

export async function getOneTask (req, res) {
    try {
        const { id} = req.params;
        const tasks = await Tasks.findOne({
            where: {
                id
            }
        });
        res.json({
            data: tasks
        })
    } catch (error) {
        console.log(error);
    }
}

export async function deleteTask( req, res ) {
    try {
        const {id} = req.params;
        const deleRowCount = await Tasks.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Task deleted successfully',
            count: deleRowCount
        })
    } catch (error) {
        console.log(error);
    }
}

export async function updateTask(req, res) {
    try {
        const {id} = req.params;
        const {name, done, project_id} = req.body;

        const task = await Tasks.findAll({
            attributes: [ 'id', 'name', 'done', 'project_id'],
            where: {
                id
            }
        });

        if(task.length > 0 ) {
            task.forEach(async task => {
                await task.update({
                    name,
                    done,
                    project_id
                });
            });
        }
        return res.json({
            message: 'Task updated successfully',
            data: task
        });
    } catch (error) {
        console.log(error);
    }
}

export async function getTaskByProject (req, res){
    const {project_id } = req.params;
    const tasks = await Tasks.findAll({
        attributes: ['id', 'project_id', 'done', 'name'],
        where:{project_id}
    });
    res.json({tasks});
}