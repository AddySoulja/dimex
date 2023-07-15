const User = require("../db/User"),
  passportJWT = require("passport-jwt"),
  JWTStrategy = passportJWT.Strategy,
  ExtractJWT = passportJWT.ExtractJwt;

// Local Strategy
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

function initialize(passport, getUserByEmail, getUserById) {
  const authUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "User Not Found !" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password Incorrect !" });
      }
    } catch (e) {
      return done(e);
    }
  };

  //AuthUser
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      authUser
    )
  );
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SESSION,
      },
      (jwtPayload, done) => {
        User.findById(jwtPayload.id)
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => {
            return done(err, false, {
              message: "Token mismatch!",
            });
          });
      }
    )
  );

  //Serialize

  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  //Deserialize
  passport.deserializeUser(async (id, done) => {
    return done(null, await getUserById(id));
  });
}

module.exports = initialize;
