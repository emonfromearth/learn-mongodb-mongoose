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
    const user = await User.create({
      name: "Emon Sabbir",
      age: 24,
      email: "mail@omega.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      hobbies: ["hobby1", "hobby2"],
      address: {
        street: "street1",
        city: "Dhaka",
      },
    });
    console.log("User saved!", user);
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
