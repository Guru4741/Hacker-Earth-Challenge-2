const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  image: {
    type: String,
  },
  date: {
      type: Date,
  }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;