module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  auth: {
    google: {
      CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
    },
    facebook: {
      CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
      CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET
    }
  },
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost/nodejsapistarter",
  TEAM_EMAIL: process.env.TEAM_EMAIL,
  BASE_URL: process.env.BASE_URL
}