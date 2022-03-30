const express = require("express");
const router = express.Router();

var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(
        JSON.parse(
            Buffer.from(process.env.FIREBASE_CONFIG_BASE64, "base64").toString(
                "ascii"
            )
        )
    ),
});

router
    .post("/*", async (req, res, next) => {
        admin
            .auth()
            .verifyIdToken(req.body.token)
            .then(() => {
                next();
            })
            .catch((error) => {
                console.error("Error: " + error);
                res.status(401).send("unauthorized");
            });
    })
    .get("/*", async (req, res, next) => {
        admin
            .auth()
            .verifyIdToken(req.params.token)
            .then(() => {
                next();
            })
            .catch((error) => {
                console.error("Error: " + error);
                res.status(401).send("unauthorized");
            });
    });

module.exports = router;
