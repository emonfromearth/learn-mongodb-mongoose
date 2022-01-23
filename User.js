const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
}
);

// this help us to validate data automatically. But this only works for create and save methods. 
// Other methods (ie, updateOne, updateMany) do not validate automatically. They directly save on mongo database.
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 200,
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not a even number age`
        },
    },
    email: {
        type: String,
        minLength: 5,
        maxLength: 255,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
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