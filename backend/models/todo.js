const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    value: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        required: true
    },
    userId: {
        type: Number,
        required: true
    }
});

module.exports = {Todo};
