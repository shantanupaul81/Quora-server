//* username : quora
//* password : AiZmieQaFJukuTCh

const mongoose = require("mongoose");

const url =
  "mongodb://quora:AiZmieQaFJukuTCh@ac-kqnveia-shard-00-00.uxac7bn.mongodb.net:27017,ac-kqnveia-shard-00-01.uxac7bn.mongodb.net:27017,ac-kqnveia-shard-00-02.uxac7bn.mongodb.net:27017/quora-clone-mern?ssl=true&replicaSet=atlas-na1ep2-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
