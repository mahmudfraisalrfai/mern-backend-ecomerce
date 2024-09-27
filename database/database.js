const mongoose = require("mongoose");

async function conected() {
  await mongoose.connect(process.env.MONGODB);
}

module.exports = conected;
