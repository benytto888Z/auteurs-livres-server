const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const cors=require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());
//se connecter à atlas cloud mongodb

mongoose.connect('mongodb+srv://root:root@cluster0-s6kch.mongodb.net/bibliodb?retryWrites=true&w=majority',
    { 
        useNewUrlParser: true ,
        useUnifiedTopology: true
});

mongoose.connection.once('open',()=>{
    console.log('connected to database');
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true //we want to use graphiql tool when go to this address
}));

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log('now listen for request on port'+PORT)
})

