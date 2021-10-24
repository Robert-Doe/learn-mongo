const express=require('express')
const router=express.Router();
const Book=require('../book.model');


router.route('/').get((req,res)=>{
    Book.find()
        .then((book)=>{
            res.json(book)
        })
        .catch((err)=>{
            res.status(400).json({err:err})
        })
})

router.route('/add').post((req,res)=>{
    const title=req.body.title;
    const newBook=new Book({title})
    newBook.save()
        .then(()=>res.json('User Added'))
        .catch(err=>res.status(400).json({'Error':err}))
})

module.exports=router;