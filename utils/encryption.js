const crypto = require("crypto");

// key and iv
var key = crypto.createHash("sha256").update(process.env.PASS_CRYPTO).digest();
var iv = "1234567890123456";
const cipherString = (secret) => {
  // create a aes256 cipher based on our password
  var cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  // update the cipher with our secret string
  cipher.update(secret, "ascii");
  // save the encryption as base64-encoded
  var encrypted = cipher.final("base64url");
  return encrypted;
};

const decipherString = (secret) => {
  // create a aes267 decipher based on our password
  var decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  // update the decipher with our encrypted string
  decipher.update(encrypted, "base64url");
  return decipher.final("ascii");
};

module.exports = {
  cipherString,
  decipherString,
};
