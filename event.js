// const eventEmiter = require('events');
// const emmiter = new eventEmiter();

// emmiter.on('MessageLogged', (arg) =>{
//     console.log('Listener called', arg);
// });

// emmiter.emit('MessageLogged', {id: 1, url: 'http://'});

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const joi = require('joi');
const app = express();
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyparser.urlencoded({extended : false}) );
app.use(bodyparser.json());

app.get('/:userQuery', (req,res) => {
    res.sendFile(path.join(__dirname,'static', 'index.html'));
    //new way with index from views
    /*res.render('index', {data: {userQuery:req.params.userQuery,
                                searchResult: ['book1', 'book2', 'book3']}});*/
    //res.send('Hello');
});

app.post('/', (req,res)=>{
    console.log(req.body);
    const schema = joi.object().keys({
        email: joi.string().trim().email().required(),
        password: joi.string().min(5).max(10).required()
    });
    joi.validate(req.body, schema, (err, result)=>{
        if(err){
            console.log(err);
            res.send('error happend');
        }
        console.log(result);
        res.send('success post data');
    });
    res.json({success : true});
})
app.listen(3000);