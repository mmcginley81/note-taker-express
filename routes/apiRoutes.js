// Dependency
const router = require("express").Router();
const db = require('../db/db.json');
const fs = require('fs');

//UUID couldn't get npm package UUID to work


// Fuctions to get, create, and delete notes

// get api/notes
router.get('/notes', (req, res) => {
    res.json(db)
});

// post api/notes
router.post('/notes', (req, res) =>{
    const {title, text} = req.body
    const newNote = {title, text, id: Math.floor(Math.random() * 1000) }
    //req.push(body)
    db.push(newNote)
    console.log(db)
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db)
});

// delete api/notes
router.delete('/notes/:id', (req, res) =>{

    
    const id = Number(req.params.id) 

    // use the filter method on the db array to remove the object that matches the id
    let newDb = db.filter((note) => {
        return note.id !== id
    })
    console.log(newDb)
    fs.writeFileSync('db/db.json', JSON.stringify(newDb))
    res.json(newDb)

})

// Export
module.exports = router