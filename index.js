const express = require ('express');
const app = express();

app.get('/', function (req,res){
    res.status(200).json({
        message: 'gg'
    });
});

app.listen(3000, ()=>{
    console.log('service port 3000');
})
