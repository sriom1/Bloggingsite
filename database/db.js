
const mongoose = require("mongoose");

const Connection = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect("mongodb://127.0.0.1:27017/MyBlog").then(() => {

        console.log("connected!");
    }).catch((err) => {
        console.log("Error on while connecting database");
    })
}

module.exports = {
    Connection,
}