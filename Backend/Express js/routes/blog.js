const express = require("express");
const router = express.Router()

//define the home page route
router.get('/', (req, res)=>{
    res.send('Blog Home Page')
})

//define the about route
router.get('/about', (req, res)=>{
    res.send('About Blog')
})

//define the general route
router.get('/blogpost/:slug', (req, res)=>{
    res.send(`fetch the blogpost for the ${req.params.slug}`)
})

module.exports = router