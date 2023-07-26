// import { error } from "console";
import express from "express";
import { MongoExpiredSessionError, ObjectId } from "mongodb";
import mongoose from "mongoose";

const app = express();

//! establishing Connection betaween MongoDB and Nodejs
mongoose
  .connect("mongodb://127.0.0.1:27017/thapaTech")
  .then(() => console.log("connection successful..."))
  .catch((error) => console.log(error));

//! defining Schema
const playlistSchema = new mongoose.Schema({
  name: String,
  courseType: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//! schema type supported
// Array
// Boolean
// Buffer
// Date
// Mixed
// Number
// ObjectId
// String

//! Creating Mondel : Means crewating collection
const Playlist = new mongoose.model("Playlist", playlistSchema); //* Playlist is name of colection and it should always singular noun anfd it will coverted to pular later

// //! Creating or Inserting documents
// const reactPlaylist = new Playlist({
//   name: "React JS ",
//   courseType: "FrontEnd",
//   videos: 50,
//   author: "Tausif Khan",
//   active: true,
// //   date : it will be added auto maticall beause Use default date in schema
// });

// //! Save the Created document to dataBase
// reactPlaylist.save();


//* error Handling While Creating/inserting a document
const creatNewDocument = async () => {
  try {
    // //! Creating or Inserting a new documents
    const reactPlaylist = new Playlist({
      name: 80,
      courseType: "BackEnd",
      videos: 75,
      author: "Tausif Khan",
      active: true,
      //   date : it will be added auto maticall beause Use default date in schema
    });
    // //! Save the Created document to dataBase
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
creatNewDocument();
