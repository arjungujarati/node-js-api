var express=require('express');
var mongoose =require('mongoose');


var User = new mongoose.Schema({
    name :{
        type: String,
        require:true
    },
    age :{ 
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("user",User);