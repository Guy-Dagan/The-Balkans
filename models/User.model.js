const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case

// const bucketListSchema = new Schema({
//   title: String,
//   description: String,
// });

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },

    bucketList:[
      {
        type: Schema.Types.ObjectId,
        ref:'Country'
      }],
      comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]

  },
  
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);


const User = model("User", userSchema);
// const BucketList = model("Bucketlist", bucketListSchema);

// module.exports = BucketList;
module.exports = User;
