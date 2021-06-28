import  Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import Tasks from './Tasks';

const Project =  sequelize.define('tbl_projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.TEXT,
    },
    priority: {
        type: Sequelize.INTEGER,
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Project.hasMany(Tasks, { foreignKey: 'project_id', sourceKey: 'id'});
Tasks.belongsTo(Project, { foreignKey: 'project_id', sourceKey: 'id'});

// TEST POST 

// {
// 	"name": "Project Testing",
// 	"priority": 3,
// 	"description": "This ir a test Project",
// 	"deliverydate": "2021-06-28"
// }
export default Project;