const express = require("express");
const multer = require('multer');
const path = require('path');
const profileModel = require("../models/profile");
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,path.join(__dirname,'../uploads'))
    },
    filename: function (req, file, cb) {
        cb(null,Date.now() + path.extname(file.originalname))
    }
  })
   
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.send('Home');
})

app.get("/profiles", async (req, res) => {
  const profiles = await profileModel.find({});
  try {
    res.send(profiles);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/profile', upload.single("profile"), async (req, res) => {
    const profile = new profileModel(req.body);
    try {
        await profile.save();
        res.send(profile);
      } catch (error) {
        res.status(500).send(error);
      }    
})

module.exports = app;