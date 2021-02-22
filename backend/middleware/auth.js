const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => { 
    try {
        const token = req.headers.authorization.split(' ')[1]; //extract the token from headers of the incoming request
        const decodedToken = jwt.verify(token, 'secret'); // 
        const userId = decodedToken.sub;         // take the token id
        if (req.body.userId && req.body.userId !== userId) { // compare the userId of the quest and the token
            throw 'Invalid user id!';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: new Error('Invalid request !') });
    }
};


