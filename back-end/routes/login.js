const express = require('express');
const router = express.Router();
class LoginRouter {
constructor() {}

getRouters() {
  router.get('', async (req, res, next) => {
    return res.json({
      render: "done"
    });
  })
  router.get('/test', async (req, res, next) => {
    return res.json({
      name: "John",
      age: 21
    });
  });
  return router
}
}
module.exports = LoginRouter;