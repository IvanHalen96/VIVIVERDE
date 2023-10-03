const express = require('express');
const router = express.Router();
class MapRouter {
constructor() {}

getRouters() {
  router.get('/map', async (req, res, next) => {
    return res.json({
      render: "done"
    });
  });
  return router
}
}
module.exports = MapRouter;