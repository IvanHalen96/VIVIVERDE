const express = require('express');
const router = express.Router();
class RegisterRouter {
constructor() {}

getRouters() {
  router.get('/register', async (req, res, next) => {
    return res.json({
      render: "done"
    });
  });
  return router
}
}
module.exports = RegisterRouter;