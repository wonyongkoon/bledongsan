const user = require("./user.route");

module.exports= app => {
    // app.use("/", main)
    app.use("/user", user)
}
