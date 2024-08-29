const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://practice-8d695.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };