
// ++++++++++++++++++++++++Creation du model de la base de donnees/ model/shema +++++++++++++++++++++++++

const mangoose = require("mongoose");

const PostsModel = mangoose.model (
    
    "node-api", // le nom de la base de donnee creer dans mongodb 
    {
        author: {
            type : String,
            required: true },
        message:{
            type: String,
            required: true
        },
        date:{
            type: Date,
            default: Date.now 
        }
    },

    "posts" // le nom de la table
);
module.exports = {PostsModel };