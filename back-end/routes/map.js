import express from 'express';
const router = express.Router();

router.get('/getAllPoints', async (req, res, next) => {
    return res.json({
        render: "done"
    });
});

router.get('/addPoint', async (req, res, next) => {
    return res.json({
        render: "done"
    });
});

router.get('/editPoint', async (req, res, next) => {
    return res.json({
        render: "done"
    });
});

router.get('/delPoint', async (req, res, next) => {
    return res.json({
        render: "done"
    });
});

export { router };
