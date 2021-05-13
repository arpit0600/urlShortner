const express=require('express')

const validUrl=require('valid-url')
const shortid=require('shortid')

const Url=require('../models/Url')

const router=express.Router();
 const baseUrl='http://localhost:600'


 router.post('/shorten', async (req,res)=>{
     const longUrl=req.body.longUrl

     console.log(longUrl);
     

     const urlCode=shortid.generate(); 

     if(validUrl.isUri(longUrl)){
         try{

            let url=await Url.findOne({longUrl:longUrl})

            if(url){
                res.status(200).redirect('/')
            }
            else{
                const shortUrl=baseUrl+'/'+urlCode
                
                url=new Url({
                    longUrl:longUrl,
                    shortUrl:shortUrl,
                    urlCode:urlCode,
                    date: new Date()
                });
                await url.save();

                res.status(200).redirect('/')


            }

         }
         catch(err){
             console.error(err);
             res.status(500).send('server error')

         }
     }
     else{
         res.status(401).send('put valid URL')
     }
 })

module.exports=router