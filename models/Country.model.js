const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const countrySchema = new Schema(
{
  activitiesType:{
     enum:["activites", "food", "sights"],
  },
  location: String,
  reviews:{
    enum:["rating", "comment"]
},
  description: String,
   countries:{
    enum: ["Albania", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Greece", "Kosovo", "Montenegro", "North Macedonia", "Romania", "Serbia", "Slovenia"]
  },
  images: [String],
}
)

const Country = model("Country", countrySchema);

module.exports = Country;