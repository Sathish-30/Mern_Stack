import express from "express";
import generateFile from "../generateFile.js";
import executeCpp from "../executeCpp.js";

const router = express.Router();

router.get("/"  ,(req , res) => {
    return res.json({
        "msg":"In Home Route"
    })
})

router.get("/about" , (req , res) => {
    res.json({
        "name" : "Sathish",
        "age":"21",
    })
})

router.post("/run" , async(req , res) => {
        const {language = "cpp", code} = req.body;
        if(code === undefined || code === ""){
            return res.status(400).json({
                success:false,
                error:"Empty message body",
            })
        }
        try{
            // Need to generate a file with particular language extension
            const filePath = await generateFile(language , code);
            // We need to run the file and send the response
            const output = await executeCpp(filePath);
            return res.json({
                filePath,output
            })
        }
        catch(err){
                console.log(err);
        }
    }
);

export default router;