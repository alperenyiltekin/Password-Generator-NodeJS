const letters = "abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createPasswd = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = letters;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";
  return generatePasswd(length, chars);
};

const generatePasswd = (length, chars) => {
  let passwd = "";
  for (let i = 0; i < length; i++) {
    passwd += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return passwd;
};
module.exports = createPasswd;
