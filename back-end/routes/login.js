import express from 'express';
const router = express.Router();

router.get('/login', async (req, res, next) => {
  return res.json({
    render: "done"
  });
});



export { router };
