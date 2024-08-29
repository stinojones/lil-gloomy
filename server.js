const express = require('express');
const { db } = require('/firebase-admin-config.js');

const app = express();
app.use(express.json());

// Endpoint to save user data
app.post('/saveUserData', (req, res) => {
    const { userId, data } = req.body;
    db.collection('users').doc(userId).set(data)
        .then(() => res.status(200).send('User data saved successfully'))
        .catch(error => res.status(500).send('Error saving user data: ' + error));
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use(express.static('public'));

// Endpoint to retrieve user data
app.get('/getUserData/:userId', (req, res) => {
    const userId = req.params.userId;
    db.collection('users').doc(userId).get()
        .then(doc => {
            if (doc.exists) {
                res.status(200).send(doc.data());
            } else {
                res.status(404).send('No such document!');
            }
        })
        .catch(error => res.status(500).send('Error getting user data: ' + error));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
