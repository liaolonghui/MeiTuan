const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Menus = new Schema({
    menu: Array
})

module.exports = mongoose.model('Menus',Menus)