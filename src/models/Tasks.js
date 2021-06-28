import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Tasks = sequelize.define('tbl_tasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    project_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
})


export default Tasks;