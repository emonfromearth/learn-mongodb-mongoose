const mongoose = require("mongoose");
const { mainModule } = require("process");
const User = require("./User");

// mongoose.connect('mongodb://localhost/test', () => {
//     console.log('connected to mongodb'), e => {
//         console.log(e);
//     }
// });

// If connection take some time or failed it will queue the queries so that we can drop the 2 callback functions.
mongoose.connect("mongodb://localhost/test");

run();
async function run() {
  try {
    // const user = await User.findById("61ecff0d492183439c04ea2b");
    // const user = await User.findOne({name: "Emon"});
    // const user = await User.where("name").equals("Emon").where("age").gt(20).lt(30).findOne()
    // const user = await User.where("name").equals("Emon").where("age").gt(20).lt(30).limit(2)
    // const user = await User.where("name").equals("Emon").where("age").gt(20).lt(30).limit(2).select('age')

    // // foreign key mapping
    // const user = await User.where("name").equals("Emon").where("age").gt(20).lt(30).limit(1).select('age')
    // user[0].bestFriend = "61ecfe47fc6494184b21b099";
    // await user[0].save();

    // populate is like join method in sql. its populated the foreign key mapping for 'bestFriend' field.
    const user = await User.where("name").equals("Emon").where("age").gt(20).lt(30).limit(1).populate('bestFriend')

    console.log(user);
  } catch (e) {
    console.log(e.message);
  }

  // another method to create a user (document)
  //   const user = new User({
  //     name: "name",
  //     age: 24,
  //   });
  //   await user.save();
}
