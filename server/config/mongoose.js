const mongoose = require('mongoose');
const fs = require("fs")
const path = require("path")

mongoose.connect('mongodb://localhost/restfulTaskDB', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

// if you wanted to require just a single model:
// require("../models/task")



// programmatically require all .js files that are in models folder
// sync rather than async

const modelsPath = path.join(__dirname, "../models")

fs.readdirSync(modelsPath).forEach(file => {
  if (file.includes(".js")) {
    require(path.join(modelsPath, file))
  }
})