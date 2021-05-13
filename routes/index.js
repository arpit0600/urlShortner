const express=require('express')

const router=express.Router();  
const Url=require('../models/Url')

router.get('/',async (req,res)=>{
    const url=await Url.find()
    
    res.render('index',{url:url})
})
router.get('/:code',async (req,res)=>{

    try{
        const url=await Url.findOne({urlCode:req.params.code});
        if(url){
             res.redirect(url.longUrl);
        }
        else{
            res.status(400).send('No url found')

        }
    }
    catch(err){
        console.log(err)
    }

})


module.exports=router