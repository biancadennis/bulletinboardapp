var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgresql://localhost/bulletinboard');
module.exports = sequelize.define('messages', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.TEXT,
    body: Sequelize.TEXT
},{
    defaultScope: {
        order: [['createdAt', 'DESC']]
    },
    getterMethods: {
        url: function(){
            return(`/bulletinboard/${this.id}`)
        }
    }
})