const  {Schema, model} = require("mongoose");

const commentSchema = new Schema({
    content: String,
    countries: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    }
});

module.exports = model('Comment', commentSchema);