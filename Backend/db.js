const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI || '"mongodb://localhost:27017/IMSCOPY"'

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
