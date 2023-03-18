
const express = require("express");
const router = express.Router();
const objectID = require('mongoose').Types.ObjectId; // pour recuperer les id des objets de la bd
const { PostsModel } = require('../models/postModel');

// Create new post data
router.post('/', (req, res)=>{
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });
    newRecord.save((err, docs)=> {
        if(!err){
            res.send(docs);
        }else{
            console.log(`Creating error : ${err}`);
        }
    })
       
});

// Read posts data
router.get('/',  (_req, res) => { 
    PostsModel.find((err, docs)=> {
        if(!err) {
            res.send(docs);
        }
        else{
            console.log(`Reading error: ${err}`);
        }
    })
});

// Update posts data
router.put('/:id', (req, res)=>{
    if(!objectID.isValid(req.params.id))
        return res.status(400).send(`ID unknow: ${req.params.id}`)

    const updateRecord = {
        author: req.body.author,
        message: req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        {new: true},
        (err, docs) => {
            if(!err){
                res.send(docs);
            }else{
                console.log(` Updating error : ${err}`);
            }
        }
    )
    
});

// Delete posts data by id
router.delete('/:id', (req, res)=>{
    if(!objectID.isValid(req.params.id))
        return res.status(400).send(`ID unknow: ${req.params.id}`)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err){
                res.send(docs)
            }else{
                console.log(`Deleting error : ${err}`);
            }
        }
    )
})

module.exports = router;