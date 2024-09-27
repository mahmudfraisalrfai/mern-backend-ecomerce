const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // لضمان أن البريد الإلكتروني فريد
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"], // تعبير منتظم للتحقق
  },
  password: {
    type: String,
    required: true,
  },
  dataUser: { type: Array, default: [] },
  date: { type: Date, default: Date.now() },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
