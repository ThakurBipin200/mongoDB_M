const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
// a mongoose schma defines the structure of the document, default values, validators, etc,
const playGames = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  game: String,
  players: Number,
  coach: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//collection creation
const GameList = new mongoose.model("GameList", playGames);

// //inset or create document

// const createDocument = async () => {
//   try {
//     const kabadiGame = new GameList({
//       name: "Kabadi",
//       game: "Physical Game",
//       players: 8,
//       coach: "Raju",
//       active: true,
//     });
//     const footballGame = new GameList({
//       name: "Foot Ball",
//       game: "Physical running Game",
//       players: 8,
//       coach: "Shyam",
//       active: true,
//     });
//     const hockeyGame = new GameList({
//       name: "Hockey",
//       game: "J Stick game",
//       players: 10,
//       coach: "Babu Rao",
//       active: true,
//     });
//     const swimmingGame = new GameList({
//       name: "Swimming",
//       game: "Water Game",
//       players: 2,
//       coach: "Dheeraj",
//       active: true,
//     });
//     const result = await GameList.insertMany([
//       kabadiGame,
//       footballGame,
//       hockeyGame,
//       swimmingGame,
//     ]);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createDocument();

//getData  we can use conditional opperators $gt $gte $lt $lte $in $nin
// const getData = async () => {
//   const result = await GameList.find({ players: { $gt: 8 } }).select({
//     name: 1,
//   });
//   console.log(result);
// };

// getData();

//update the data
// const updateData = async (_id) => {
//   try {
//     const result = await GameList.findByIdAndUpdate(
//       { _id },
//       {
//         $set: {
//           name: "Tenis upadated",
//         },
//       },
//       {
//         new: true,
//         useFindAndModify: false,
//       }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// updateData("64022fa9c10066f5bf4765ff");

//delete data if want to see how many data has been delete use delateOne or deleteMany or else if want to see which data is delete use findByIdAndDelete

// const deleteData = async (_id) => {
//   try {
//     const result = await GameList.findByIdAndDelete({ _id });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// deleteData("64022fa9c10066f5bf4765ff");
node_modules;
