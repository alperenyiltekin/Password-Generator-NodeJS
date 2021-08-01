const fs = require("fs");
const os = require("os");
const path = require("path");
const chalk = require("chalk");

const savePasswd = (pw) => {
  fs.open(path.join(__dirname, "./", "passwords.txt"), "a", 666, (e, id) => {
    fs.write(id, pw + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.green("Your password saved into password.txt"));
      });
    });
  });
};
module.exports = savePasswd;
