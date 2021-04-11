const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')
const router = require("./routes");

const app = express();

//database

const url = "mongodb+srv://admin:Code@786@cluster0.jqxgp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url, {useNewUrlParser: true})
.then(() => {
    console.log("successfully connected to database")
})
.catch((err) =>{
    console.log(err)
});

//middlewere
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//api

app.use('/', router);






const port = process.env.PORT || 3001;

app.listen(port, console.log(`Server is listening at Port ${port}`));

//mongodb+srv://admin:<password>@cluster0.jqxgp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority