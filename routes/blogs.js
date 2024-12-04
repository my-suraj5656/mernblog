const router = require("express").Router();
const blogs = require("../models/blog")

//post

router.post("/post", async (req,res)=>{
    try {
        const {title, desc} = req.body;
        const newpost = new blogs({title, desc})
        await newpost.save().then(()=>{
            res.status(200).json({message: "Data saved successfully"})
        })
    } catch (error) {
        res.status(400).json({message: "Some error has occured"})
    }
})

//get

router.get("/getall", async (req,res)=>{
    try {
        const data = await blogs.find().sort({createdAt: -1});
        res.status(200).json({data: data})
    } catch (error) {
        res.status(400).json({message: "Some error has occured"})
    }
})

//get recent blogs
router.get("/getrecentblogs", async (req,res)=>{
    try {
        const data = await blogs.find().sort({createdAt: -1}).limit(3);
        res.status(200).json({data: data})
    } catch (error) {
        res.status(400).json({message: "Some error has occured"})
    }
})

//get blogs by id
router.get("/getblog/:id", async (req,res)=>{
    try {
        const { id } = req.params;
        const data = await blogs.findById(id);
        res.status(200).json({data: data})
    } catch (error) {
        res.status(400).json({message: "Some error has occured"})
    }
})

//update by id
router.put("/updateblog/:id", async (req,res)=>{
    try {
        const { id } = req.params;
        const {title, desc} = req.body;

        await blogs.findByIdAndUpdate(id, {title, desc});
        res.status(200).json({message: "Data update successfully"})
    } catch (error) {
        res.status(400).json({message: "Some error has occured"})
    }
})



module.exports = router;
