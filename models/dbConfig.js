
    const mongoose = require('mongoose')
    
    mongoose.connect(
      "mongodb://localhost:27017/node-api",// le lien url de la base de donnees
      { useNewUrlParser: true, 
        useUnifiedTopology: true 
      },
      (err) => {
        if (!err) {
          console.log("Mongodb connected...");
        }
        else {
          console.log(`Mongodb Connection error :  ${err}`);
        }
      }
    )