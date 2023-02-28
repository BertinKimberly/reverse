const express=require('express');
const app=express();
const port=4000;
const bodyParser=require('body-parser');

app.use(bodyParser.json());

function reverse(str){
    let newstr=str.split('');
    let reversed=newstr.reverse().join('');
    return reversed;
}
app.get('/str-reverse',(req,res)=>{
const {str}=req.body;
const result=reverse(str);
res.json({reversed: result});
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})