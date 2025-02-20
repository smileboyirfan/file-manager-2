const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,resp) => {
    resp.render("index");
});

app.get('/read', async (req,resp) => {
    let users = await userModel.find();
    resp.render("read",{users});
});

app.post('/create', async (req,resp) => {
    let {name,email,img_url} = req.body;
    let createdUser = await userModel.create({
        name,
        email,
        img_url
    });
    resp.redirect("/read");
});

app.get('/delete/:id', async (req,resp) => {
    let users = await userModel.findOneAndDelete({_id:req.params.id});
    resp.redirect("/read");
});

app.get('/edit/:userid', async (req,resp) => {
    let users = await userModel.findOne({_id:req.params.userid});
    resp.render("edit",{users});
});

app.post('/update/:userid', async (req,resp) => {
    let {name,email,img_url} = req.body;
    let users = await userModel.findOneAndUpdate({_id:req.params.userid},{name,email,img_url},{new:true});
    resp.redirect("/read");
});

app.listen(4000);