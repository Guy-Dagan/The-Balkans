const express = require("express");
const router = express.Router();

// Require the User model in order to interact with the database
const Country = require("../models/Country.model");
const User = require("../models/User.model");
const Comment = require("../models/Comment.model.js");

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/countries-list", (req, res) => {
  /*     const { activitiesType, location, Comments, description, countries } = req.body;
   */ async function allCountries() {
    try {
      let listOfCountries = await Country.find();
      res.render("countries/countries-list.hbs", {
        countries: listOfCountries,
      });
    } catch (error) {
      console.log(error);
    }
  }
  allCountries();
});

router.get("/countries", async (req, res, next) => {
  try {
    const allCountries = await Country.find();
    res.render("countries/countries", { allCountries });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/*       router.get('/countries/:id', async (req, res, next) => {
        const countryId = req.params.id;
        try {
          const selectedCountry = await Country.findById(countryId);
          res.render('countries/countries-details', selectedCountry);
        } catch (error) {
          console.log(error);
          next(error);
        }
      }); */

/* router.get("/countries/albania", async (req, res, next) => {
  try {
    const albania = await Country.find();
    res.render("countries/albania");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/countries/bosnia", async (req, res, next) => {
  try {
    const bosnia = await Country.find();
    res.render("countries/bosnia");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/countries/bulgaria", async (req, res, next) => {
  try {
    const bulgaria = await Country.find();
    res.render("countries/bulgaria");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/countries/croatia", async (req, res, next) => {
  try {
    const croatia = await Country.find();
    res.render("countries/croatia");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/countries/greece", async (req, res, next) => {
  try {
    const greece = await Country.find();
    res.render("countries/greece");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/countries/kosovo", async (req, res, next) => {
  try {
    const kosovo = await Country.find();
    res.render("countries/kosovo");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/countries/montenegro", async (req, res, next) => {
  try {
    const montenegro = await Country.find();
    res.render("countries/montenegro");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/countries/north-macedonia", async (req, res, next) => {
  try {
    const northMacedonia = await Country.find();
    res.render("countries/north-macedonia");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/countries/romania", async (req, res, next) => {
  try {
    const romania = await Country.find();
    res.render("countries/romania");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/countries/serbia", async (req, res, next) => {
  try {
    const serbia = await Country.find();
    res.render("countries/serbia");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/countries/slovenia", async (req, res, next) => {
  try {
    const slovenia = await Country.find();
    res.render("countries/slovenia");
  } catch (error) {
    console.log(error);
    next(error);
  }
}); */

router.post("/countries/addFavs/:id", async (req, res, next) => {
  const { id } = req.params;
  const currentUser = req.session.currentUser._id;
  try {
    console.log(id);
    const favouriteCountry = await User.findByIdAndUpdate(currentUser, {
      $push: { bucketList: id },
    });
    res.redirect(`/countries/details/${id}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/countries/removeFavs/:id", async (req, res, next) => {
  const { id } = req.params;
  const currentUser = req.session.currentUser._id;
  try {
    const favouriteCountry = await User.findByIdAndUpdate(currentUser, {
      $pull: { bucketList: id },
    });
    res.redirect(`/countries/details/${id}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Create a new bucket list item
// router.post('/profile/bucketlist', (req, res) => {
//   const { title, description } = req.body;
//   const newItem = new BucketList({ title, description });
//   newItem.save()
//     .then((item) => res.status(201).json(item))
//     .catch((err) => {
//       console.error('Error creating bucket list item:', err);
//       res.status(500).json({ error: 'Error creating bucket list item' });
//     });
// });

// // Get all bucket list items
// router.get('/profile/bucketlist', (req, res) => {
//   BucketListItem.find()
//     .then((items) => res.json(items))
//     .catch((err) => {
//       console.error('Error retrieving bucket list items:', err);
//       res.status(500).json({ error: 'Error retrieving bucket list items' });
//     });
// });

// // Get a specific bucket list item by ID
// router.get('/bucketlist/:id', (req, res) => {
//   BucketListItem.findById(req.params.id)
//     .then((item) => {
//       if (!item) {
//         return res.status(404).json({ error: 'Bucket list item not found' });
//       }
//       res.json(item);
//     })
//   })
//     .catch((err) => {
//       console.error('Error retrieving bucket list item:', err);
//       res.status(500).json({

//     })
//   })

/* router.get("/favorites", async (req, res) => {
  try {
    const userId = req.session.currentUser._id; // Replace with your actual code to retrieve the user ID
    const user = await User.findById(userId).populate("favorites");

    res.render("countries/spot-favorites", { favorites: user.favorites });
  } catch (error) {
    console.log(error);
  }
}); */

router.post("/favorites/:spotId", async (req, res) => {
  try {
    const { spotId } = req.params;
    const favoriteSpot = await Country.findById(spotId);

    const userId = req.session.currentUser._id; // Replace with your actual code to retrieve the user ID

    await User.findByIdAndUpdate(userId, {
      $push: { bucketList: favoriteSpot._id },
    });

    res.redirect("/profile");
  } catch (error) {
    console.log(error);
    return res.render("error.hbs", { error: "Internal server error" });
  }
});

router.post("/favorites/:id/delete", async (req, res) => {
  try {
    const favoriteId = req.params.id;
    const userId = req.session.currentUser._id; // Replace with your actual code to retrieve the user ID

    await User.findByIdAndUpdate(userId, {
      $pull: { bucketList: favoriteId },
    });

    res.redirect("/profile");
  } catch (error) {
    console.log(error);
    return res.render("error.hbs", { error: "Internal server error" });
  }
});

router.get("/countries/:id", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    const country = await Country.findById(id).populate("comments");
    const allCountries = await Country.find();
    console.log(country);
    console.log(allCountries);

    res.render("countries/countries-details", { country, allCountries });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// COMMENTS ROUTE

router.post("/comment/create/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body; //'body' of the form that was submitted via POST method
  const currentUser = req.session.currentUser._id;

  // create the comment
  // push the country id to the comment
  // push the comment id to the user
  // push the comment id to the country

  async function createCommentinDb() {
    try {
      //Create the comment
      const newComment = await Comment.create({ content });
      const commentId = newComment._id;
      //Add the comment to the country
      const countryUpdate = await Comment.findByIdAndUpdate(commentId, {
        $push: { countries: id },
      });
      //Add the comment to the User
      const userUpdate = await User.findByIdAndUpdate(currentUser, {
        $push: { comments: commentId },
      });
      // push the comment id to the country
      const countryComment = await Country.findByIdAndUpdate(id, {
        $push: { comments: commentId },
      });

      res.redirect(`/countries/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
  createCommentinDb();
});

//Removing the id from the array of users

router.post("/comment/delete/:id", (req, res) => {
  const { id } = req.params;
  async function deleteCommentInDb() {
    try {
      const removedComment = await Comment.findByIdAndRemove(id);
      await User.findByIdAndUpdate(removedComment.user, {
        $pull: { comments: removedComment._id },
      });

      res.redirect("back");
    } catch (error) {
      console.log(error);
    }
  }
  deleteCommentInDb();
});

//edit route
// POST route to make updates on a specific comment
router.post("/comment/edit/:id", (req, res) => {
  const { id } = req.params;
  async function updateCommentFromDb() {
    try {
      let updatedComment = await Comment.findByIdAndUpdate(id, { new: true });
      res.redirect(`/comment/${updatedComment._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  updateCommentFromDb();
});

// Render the edit country form
router.get("/countries/edit/:id", async (req, res) => {
  try {
    const spot = await Country.findById(req.params.id);
    res.render("countries/edit", { id });
  } catch (error) {
    console.log(error);
  }
});

// Update the country details
router.post("/countries/edit/:id", async (req, res) => {
  try {
    const {
      description,
      doText1,
      doText2,
      doText3,
      eatText1,
      eatText2,
      eatText3,
    } = req.body;
    const spot = await Country.findByIdAndUpdate(
      req.params.id,
      { description, doText1, doText2, doText3, eatText1, eatText2, eatText3 },
      { new: true }
    );
    res.redirect(`/countries/countries-details/${id}`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
