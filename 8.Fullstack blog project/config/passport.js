const User = require("../models/User");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

module.exports = function (passport) {
  // Define the local strategy for email and password authentication
  passport.use(
    new localStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          // Find the user
          const user = await User.findOne({ email });
          if (!user) {
            return done(null, false, {
              message: "User not found with entered email",
            });
          }

          //   compare the provided password with the hashed password
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return done(null, false, { message: "Incorrect password" });
          }

          //   Authentication successfull, return the object
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  // serializedUser:Determines which data of the user object should be stored in the session. (Here,we store the user ID)
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  //   Deserialize the user object based on the use ID stored in the session
  try {
    passport.deserializeUser(async function (id, done) {
      const user = await User.findById(id);
      done(null, user);
    });
  } catch (error) {
    done(error);
  }
};
