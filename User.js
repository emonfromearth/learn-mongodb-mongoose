const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
}
);

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    createdAt: String,
    updatedAt: String,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
});

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String,
//     createdAt: String,
//     updatedAt: String,
//     bestFriend: mongoose.SchemaTypes.ObjectId,
//     hobbies: [String],
//     address: {
//         street: String,
//         city: String,
//     },
// });

module.exports = mongoose.model('User', userSchema);