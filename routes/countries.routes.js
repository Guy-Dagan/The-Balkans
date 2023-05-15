const express = require('express');
const router = express.Router();

// Require the User model in order to interact with the database
const Country = require("../models/Country.model");



  router.get("/countries-list", (req, res) => {
/*     const { activitiesType, location, reviews, description, countries } = req.body;
 */    async function allCountries() {
        try {
          let listOfCountries = await Country.find();
          res.render("countries/countries-list.hbs", { countries: listOfCountries });
        } catch (error) {
          console.log(error);
        }
      }
      allCountries();
    });


    router.get('/countries', async (req, res, next) => {
        try {
          const allCountries = await Country.find();
          res.render('countries/countries', { allCountries});
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

      router.get('/countries/albania', async (req, res, next) => {
        try {
          const albania = await Country.find();
          res.render('countries/albania');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

      router.get('/countries/bosnia', async (req, res, next) => {
        try {
          const bosnia = await Country.find();
          res.render('countries/bosnia');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

      router.get('/countries/bulgaria', async (req, res, next) => {
        try {
          const bulgaria = await Country.find();
          res.render('countries/bulgaria');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

      router.get('/countries/croatia', async (req, res, next) => {
        try {
          const croatia = await Country.find();
          res.render('countries/croatia');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

      router.get('/countries/greece', async (req, res, next) => {
        try {
          const greece = await Country.find();
          res.render('countries/greece');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

      router.get('/countries/kosovo', async (req, res, next) => {
        try {
          const kosovo = await Country.find();
          res.render('countries/kosovo');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

      router.get('/countries/montenegro', async (req, res, next) => {
        try {
          const montenegro = await Country.find();
          res.render('countries/montenegro');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

      router.get('/countries/north-macedonia', async (req, res, next) => {
        try {
          const northMacedonia = await Country.find();
          res.render('countries/north-macedonia');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

      router.get('/countries/romania', async (req, res, next) => {
        try {
          const romania = await Country.find();
          res.render('countries/romania');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

      router.get('/countries/serbia', async (req, res, next) => {
        try {
          const serbia = await Country.find();
          res.render('countries/serbia');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

      router.get('/countries/slovenia', async (req, res, next) => {
        try {
          const slovenia = await Country.find();
          res.render('countries/slovenia');
        } catch (error) {
          console.log(error);
          next(error);
        }
      });
    

   

      module.exports = router;
