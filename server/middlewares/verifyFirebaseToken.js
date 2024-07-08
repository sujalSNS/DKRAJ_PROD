// verifyFirebaseToken.js
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(require('../dkraj-jewels-firebase-adminsdk.json')),
});

const verifyFirebaseToken = async (req, res, next) => {
  const token = req.body.token;

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

module.exports = verifyFirebaseToken;
