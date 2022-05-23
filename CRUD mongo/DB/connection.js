const mongoose = require('mongoose');
const DBconnect = () => {
    return mongoose.connect(process.env.DBURL).then((result) => {
        console.log("connected.....");
    }).catch((error) => { console.log("connected.....", error); });
}
module.exports = DBconnect