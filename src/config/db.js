const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.pc6g7xu.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to Mongoose');
    } catch (error) {
        console.log(error);
    }
};

module.exports = ConnectDB;
