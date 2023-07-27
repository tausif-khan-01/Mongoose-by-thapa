// import { error } from "console";
import express from "express";
import { MongoExpiredSessionError, ObjectId } from "mongodb";
import mongoose from "mongoose";

const app = express();

//? establishing Connection betaween MongoDB and Nodejs
mongoose
  .connect("mongodb://127.0.0.1:27017/thapaTech")
  .then(() => console.log("connection successful..."))
  .catch((error) => console.log(error));

//? defining Schema
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

//? schema type supported
// Array
// Boolean
// Buffer
// Date
// Mixed
// Number
// ObjectId
// String

//? Creating Mondel : Means crewating collection
const Playlist = new mongoose.model("Playlist", playlistSchema); //* Playlist is name of colection and it should always singular noun anfd it will coverted to pular later

// //? Creating or Inserting documents
// const reactPlaylist = new Playlist({
//   name: "React JS ",
//   courseType: "FrontEnd",
//   videos: 50,
//   author: "Tausif Khan",
//   active: true,
// //   date : it will be added auto maticall beause Use default date in schema
// });

// //? Save the Created document to dataBase
// reactPlaylist.save();

//* error Handling While Creating/inserting a document
const creatNewDocument = async () => {
  try {
    // //? Creating or Inserting a new documents
    const reactPlaylist = new Playlist({
      name: 80,
      courseType: "BackEnd",
      videos: 75,
      author: "Tausif Khan",
      active: true,
      //   date : it will be added auto maticall beause Use default date in schema
    });
    // //? Save the Created document to dataBase
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// creatNewDocument();

//? Inserting multiple documents at a time in mongoose with error handling
const creatMultipleDocument = async () => {
  try {
    //? Inserting multiple documents at a time in mongoose
    const angularPlaylist = new Playlist({
      name: "AngularJS",
      courseType: "FrontEnd",
      videos: 100,
      author: "Tausif Khan",
      active: true,
    });
    const vuePlaylist = new Playlist({
      name: "VueJS",
      courseType: "FrontEnd",
      videos: 100,
      author: "Tausif Khan",
      active: true,
    });
    const nextPlaylist = new Playlist({
      name: "NextJS",
      courseType: "Fullsatck",
      videos: 50,
      author: "Tausif Khan",
      active: true,
    });
    const reduxPlaylist = new Playlist({
      name: "redux",
      courseType: "FrontEnd",
      videos: 30,
      author: "Tausif Khan",
      active: true,
    });
    const javascriptPlaylist = new Playlist({
      name: "JavaScript",
      courseType: "FrontEnd",
      videos: 130,
      author: "Tausif Khan",
      active: true,
    });
    const typescriptPlaylist = new Playlist({
      name: "TypeScript",
      courseType: "FrontEnd",
      videos: 30,
      author: "Tausif Khan",
      active: true,
    });

    //* insert using insertMany method
    const manyResult = await Playlist.insertMany([
      angularPlaylist,
      vuePlaylist,
      nextPlaylist,
      reduxPlaylist,
      javascriptPlaylist,
      typescriptPlaylist,
    ]);
    console.log(manyResult);

  } catch (err) {
    console.log(err);
  }
};

// creatMultipleDocument();


