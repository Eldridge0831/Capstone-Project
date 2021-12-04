const express = require("express");
const app = express ();
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const https = require('https');

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// object reset everytime login with provider. User object gets overridden
let user = {};

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});


/*------Google Passport-------*/

passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE.clientID,
  clientSecret: keys.GOOGLE.clientSecret,
  callbackURL: "/auth/google/callback"
},
(accessToken, refreshToken, profile, cb) => {
  console.log(chalk.blue(JSON.stringify(profile)));
  user.findorCreate = { ...profile };
  return cb(null, profile);
}));

// path to start the OAuth 
app.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

// OAuth callback url
app.get("/auth/google/callback",
  passport.authenticate("google"),
      (req, res) => {
          res.redirect("/"); //redirect to home if successful
      });
      app.get("/user", (req, res) => {
        console.log("getting user data!");
        res.send(user);
    });
    //logout
    app.get("/auth/logout", (req, res) => {
        console.log("logging out!");
        user = {}; 
        res.redirect("/");  //redirect to home page
    });
    app.listen(PORT);