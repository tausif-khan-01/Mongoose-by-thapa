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

//! <==================#CREATE OPERATIONS #==========================================================================>
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
//* creatNewDocument();

//? Inserting multiple documents at a time in mongoose with error handling
const creatMultipleDocuments = async () => {
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
      author: "Code With Harry",
      active: true,
    });
    const nextPlaylist = new Playlist({
      name: "NextJS",
      courseType: "Fullsatck",
      videos: 50,
      author: "Thapa Technical",
      active: true,
    });
    const reduxPlaylist = new Playlist({
      name: "redux",
      courseType: "FrontEnd",
      videos: 30,
      author: "Code With Harry",
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
      author: "Thapa Technical",
      active: true,
    });
    const nodejsPlaylist = new Playlist({
      name: "Nodejs",
      courseType: "BackEnd",
      videos: 150,
      author: "Tausif Khan",
      active: true,
    });
    const expressPlaylist = new Playlist({
      name: "Express",
      courseType: "BackEnd",
      videos: 20,
      author: "Tausif Khan",
      active: true,
    });
    const phpPlaylist = new Playlist({
      name: "PHP",
      courseType: "BackEnd",
      videos: 60,
      author: "Thapa Technical",
      active: true,
    });
    const javaPlaylist = new Playlist({
      name: "Java",
      courseType: "BackEnd",
      videos: 80,
      author: "Code With Harry",
      active: true,
    });
    const larvelPlaylist = new Playlist({
      name: "Larvel",
      courseType: "DataBase",
      videos: 70,
      author: "Tausif Khan",
      active: true,
    });
    const mongodbPlaylist = new Playlist({
      name: "MongoDB",
      courseType: "DataBase",
      videos: 40,
      author: "Thapa Technical",
      active: true,
    });
    const sqlPlaylist = new Playlist({
      name: "sql",
      courseType: "DataBase",
      videos: 75,
      author: "Code With Harry",
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
      nodejsPlaylist,
      expressPlaylist,
      phpPlaylist,
      javaPlaylist,
      larvelPlaylist,
      mongodbPlaylist,
      sqlPlaylist,
    ]);
    console.log(manyResult);
  } catch (err) {
    console.log(err);
  }
};

//*  creatMultipleDocuments();

//! <==================#READ OPERATIONS #==========================================================================>

//? read all data of collection
const readAllCollection = async () => {
  const readedData = await Playlist.find();
  console.log(readedData);
};
//* readAllCollection();

const readCollectionWithFilter = async () => {
  const readedData = await Playlist.find({ courseType: "FrontEnd" })
    .select({ name: 1, _id: 0 }) //select specific Feild
    .limit(2); //read limit
  console.log(readedData);
};
//* readCollectionWithFilter();

//! <--------------------------------- COMPARISON QUERY OPERATOS IN MONGOdb------------------------->
//? 1. $eq : equal to
const readCollectionWithFilterEqualTo = async () => {
  const readedData = await Playlist.find({ courseType: { $eq: "FrontEnd" } }); //select specific Feild
  console.log(readedData);
};
//* readCollectionWithFilterEqualTo();

//? 2. $ne : not equal to
const readCollectionWithFilterNotEqualTo = async () => {
  const readedData = await Playlist.find({ courseType: { $ne: "FrontEnd" } }); //select specific Feild
  console.log(readedData);
};
//* readCollectionWithFilterNotEqualTo();

//? 3. $gt : greater than
const readCollectionWithFilterGreaterThan = async () => {
  const readedData = await Playlist.find({ videos: { $gt: 50 } }); //select specific Feild
  console.log(readedData);
};
//*  readCollectionWithFilterGreaterThan();

//? 4. $gte : greater than equal to
const readCollectionWithFilterGreaterThanEqualTo = async () => {
  const readedData = await Playlist.find({ videos: { $gte: 50 } }); //select specific Feild
  console.log(readedData);
};
//* readCollectionWithFilterGreaterThanEqualTo();

//? 5. $lt : less than
const readCollectionWithFilterLessThan = async () => {
  const readedData = await Playlist.find({ videos: { $lt: 50 } }); //select specific Feild
  console.log(readedData);
};
//* readCollectionWithFilterLessThan();

//? 6. $lte : less than equal to
const readCollectionWithFilterLessThanEqualTo = async () => {
  const readedData = await Playlist.find({ videos: { $lte: 50 } }); //select specific Feild
  console.log(readedData);
};
//* readCollectionWithFilterLessThanEqualTo();

//? 7. $in : in
const readCollectionWithFilterIn = async () => {
  const readedData = await Playlist.find({
    courseType: { $in: ["BackEnd", "DataBase"] },
  }); //select specific Feild
  console.log(readedData);
};
//*  readCollectionWithFilterIn();

//? 8. $nin : not in
const readCollectionWithFilterNotIn = async () => {
  const readedData = await Playlist.find({
    courseType: { $nin: ["BackEnd", "DataBase"] },
  }); //select specific Feild
  console.log(readedData);
};
//* readCollectionWithFilterNotIn();

//! <--------------------------------- LOGICAL QUERY OPERATOS IN MONGOdb------------------------->
//? 1. $and : Logical AND
const readCollectionWithFilterAnd = async () => {
  const readedData = await Playlist.find({
    $and: [{ courseType: "FrontEnd" }, { author: "Tausif Khan" }],
  });
  console.log(readedData);
};
//*  readCollectionWithFilterAnd()

//? 2. $or : Logical OR
const readCollectionWithFilterOr = async () => {
  const readedData = await Playlist.find({
    $or: [{ courseType: "FrontEnd" }, { author: "Tausif Khan" }],
  });
  console.log(readedData);
};
//* readCollectionWithFilterOr();

//? 3. $not : Logical NOT
const readCollectionWithFilterNot = async () => {
  const readedData = await Playlist.find({
    videos: {$not:{$gt:100} } 
  });
  console.log(readedData);
};
//* readCollectionWithFilterNot();


//? 4. $nor : Logical NOR
const readCollectionWithFilterNor = async () => {
  const readedData = await Playlist.find({
    $nor: [{ courseType: "FrontEnd" }, { author: "Tausif Khan" }],
  });
  console.log(readedData);
};
//* readCollectionWithFilterNor();


//! <==================#UPDATE OPERATIONS #==========================================================================>
//! <==================#DELETE OPERATIONS #==========================================================================>
