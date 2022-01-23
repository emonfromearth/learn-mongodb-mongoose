const mongoose = require('mongoose');
const User = require('./User');

// mongoose.connect('mongodb://localhost/test', () => {
//     console.log('connected to mongodb'), e => {
//         console.log(e);
//     }
// });

// If connection take some time or failed it will queue the queries so that we can drop the 2 callback functions.
mongoose.connect('mongodb://localhost/test');

run()
async function run() {

    const user = new User({
        name: 'name',
        age: 24
    });

    try {
        await user.save();
        console.log('User saved!', user);
    } catch (e) {
        console.log(e.message);
    }
}
