const JWT = require("jsonwebtoken");
const config = require("../config/config");

function issueJWT(user) {
  // generate the token
  const id = user.id;
  const expiresIn = "24H"; //jwt duration of the token
  const payload = {
    sub: id,
    iat: Date.now(),
  };
  const signedToken = JWT.sign(payload, "secret", { expiresIn: expiresIn });
  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
}
function getUserId(req) {
  // to check the user ID token
  const token = req.headers.authorization.split(" ")[1]; // extract the token from the incoming request
  const decodedToken = JWT.verify(token, "secret"); // verify the token
  const userId = decodedToken.sub;
  return userId; // return with the userID's token
}

module.exports.issueJWT = issueJWT;
module.exports.getUserId = getUserId;
