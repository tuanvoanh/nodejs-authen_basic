// Passport Google
const GooglePlusTokenStrategy = require("passport-google-plus-token");
const FacebookTokenStrategy = require('passport-facebook-token');
const { JWT_SECRET, auth } = require("../configs");

passport.use(
    new GooglePlusTokenStrategy(
      {
        clientID: auth.google.CLIENT_ID,
        clientSecret: auth.google.CLIENT_SECRET,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log('accessToken ', accessToken)
          console.log('refreshToken ', refreshToken)
          console.log('profile ', profile)
          // check whether this current user exists in our database
          const user = await User.findOne({
            authGoogleID: profile.id,
            authType: "google",
          });
  
          if (user) return done(null, user)
  
          // If new account
          const newUser = new User({
            authType: 'google',
            authGoogleID: profile.id,
            email: profile.emails[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
          })
  
          await newUser.save()
  
          done(null, newUser)
        } catch (error) {
          console.log('error ', error)
          done(error, false);
        }
      }
    )
  );
  
  // Passport Facebook
  passport.use(
    new FacebookTokenStrategy(
      {
        clientID: auth.facebook.CLIENT_ID,
        clientSecret: auth.facebook.CLIENT_SECRET,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // check whether this current user exists in our database
          const user = await User.findOne({
            authFacebookID: profile.id,
            authType: "google",
          });
  
          if (user) return done(null, user)
  
          // If new account
          const newUser = new User({
            authType: 'facebook',
            authFacebookID: profile.id,
            email: profile.emails[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
          })
  
          await newUser.save()
  
          done(null, newUser)
        } catch (error) {
          console.log('error ', error)
          done(error, false);
        }
      }
    )
  );