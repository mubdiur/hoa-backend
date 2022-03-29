const express = require("express");
const router = express.Router();
const CityCorporation = require("../model/CityCorporation");
// middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })
// define the home page route
// router.get('/', (req, res) => {
//   res.send('Birds home page')
// })
// define the about route
router.post("/city-corporation",async (req, res) => {
    try {
        const cityCorporation = new CityCorporation({
            division: req.body.division,
            mayor: req.body.mayor,
            website: req.body.website,
            email: req.body.email,
            phoneNumber: req.body.phonenumber
        });
        await cityCorporation.save();
        res.status(201).send(cityCorporation);
    } catch (error) {
        res.status(400).send(error);
    }
});
module.exports = router;
