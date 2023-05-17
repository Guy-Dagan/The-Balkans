const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const countrySchema = new Schema({
  name: String,
  quote: String,
  headerImage: String,
  description: String,
  titleDo: String,
  doImage: [String],
  doText1: String,
  doText2: String,
  doText3: String,
  titleEat: String,
  eatImage: [String],
  eatText1: String,
  eatText2: String,
  eatText3: String,

  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],

  countries: {
    enum: [
      "Albania",
      "Bosnia and Herzegovina",
      "Bulgaria",
      "Croatia",
      "Greece",
      "Kosovo",
      "Montenegro",
      "North Macedonia",
      "Romania",
      "Serbia",
      "Slovenia",
    ],
  },
  images: [String],
 
});

const Country = model("Country", countrySchema);

module.exports = Country;



