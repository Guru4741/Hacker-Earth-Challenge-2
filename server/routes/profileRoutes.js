const express = require("express");
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const profileModel = require("../models/profile");
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,path.join(__dirname,'../uploads'))
    },
    filename: function (req, file, cb) {
        cb(null,uuidv4().replace(/-/g, "") + path.extname(file.originalname))
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
  console.log('Body', req.body);
  console.log('File', req.file);

    const profileData = {
        name: req.body.name,
        image: req.file.filename
    }

    const profile = new profileModel(profileData);
    try {
        await profile.save();
        res.send(profile);
      } catch (error) {
        res.status(500).send(error);
      }    
})

module.exports = app;