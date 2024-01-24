const mongoose = require("mongoose");
const MONGODB_URL = "mongodb+srv://rowdy:createnumber123@cluster0.hqrgvlb.mongodb.net/test";

exports.connect = () => {
    mongoose.connect(MONGODB_URL)
    .then(() => console.log("Database connected"))
    .catch((err) => {
        console.log("Db Connection failed");
        console.log(err)
        process.exit(1);
    })
}
