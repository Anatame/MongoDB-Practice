const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB',  {useUnifiedTopology:true, useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
}) 

const peopleSchema = new mongoose.Schema({
    name : String,
    age : Number
})

const Fruit = mongoose.model("Fruit", fruitSchema)
const People = mongoose.model("People", peopleSchema)


const fruit = new Fruit ({
    name: "Apple",
    rating: 5,
    review: "Pretty awesome"
})

const people = new People({
    name:"Sam",
    age:18
})


const people2 = new People({
    name:"Bam",
    age:18
})

const people3 = new People({
    name:"Bam3",
    age:18
})


// People.insertMany({people2, people3}, function (err){
//     if (err){
//         console.log(err)
//     } else {
//         console.log("Successfully saved to db")
//     }
// })

People.find(function(err, fruits){
    if(err){
        console.log(err)
    }else{
    console.log(fruits.name[1])
    }
})