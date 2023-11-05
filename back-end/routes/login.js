const express = require('express');
const UserRepo  = require('../repo/userRepo');
const router = express.Router();
const bcrypt = require('bcrypt');
class LoginRouter {
  constructor() { }

  getRouters() {
    router.post('/', async (req, res, next) => {
      const userRepo = new UserRepo();
      const { password, email } = req.body;
      if (!password || !email) {
      return  res.status(400).json("Bad Request Missing Email or Password");
      }
      const userExist = await userRepo.getUserByEmail(email);
      if (!userExist) return res.status(404).json(" User Not Found");
      const match = this.comparePassword(userExist.password, password);
      if (!match) return res.status(401).json("Incorrect Password");
      delete userExist.password;
      res.status(200).json({
        ... userExist
      });

    });
    router.post('/create-user', async (req, res, next) => {
      console.log(req.body);
      const userRepo = new UserRepo();
      const { email , password } = req.body;
      if (!password || !email) {
       return res.status(400).json("Bad Request Missing Email or Password");
      }
      const userExist = await userRepo.getUserByEmail(email);

      if (userExist) return res.status(404).json(" User Found");
      const passwordHash = this.createHash(password);
      const create =  await userRepo.createUser({
        email,
        password: passwordHash,
        active: true,
        score: 0,
        rol: "User"
      });
      return res.status(200).json({
        success: create ? true : false
      })
    })
    return router
  }

  comparePassword(password, userPassword) {
    return bcrypt.compareSync(userPassword.toString(), password);
  }

  createHash(password) {
    const salt = bcrypt.genSaltSync(15);
    const hash = bcrypt.hashSync(password.toString(), salt);
    return hash;
  }
}
module.exports = LoginRouter;
