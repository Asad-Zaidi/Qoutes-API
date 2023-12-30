const express = require("express");
let router = express.Router();
var Qoute = require("../../models/qoutesModel");
var cors = require("cors");
router.use(cors());
router.get("/", async (req, res) => {
    let qoutes = await Qoute.find();
    return res.send(qoutes);
});


router.get("/:id", async (req, res) => {
    try {
        let qoute = await Qoute.findById(req.params.id);
        if (!qoute)
            return res.status(400).send("Qoute with given ID is not Available...!!!");
        return res.send(qoute);
    }
    catch (err) {
        return res.status(400).send("Invalid ID...!!!");
    }
});


router.put("/:id", async (req, res) => {
    let qoute = await Qoute.findById(req.params.id);
    if (!qoute) return res.status(400).send("No Record Found With Given Id");

    qoute.qoute = req.body.qoute;
    qoute.author = req.body.author;
    qoute.category = req.body.category;

    await qoute.save();
    return res.send(qoute);
});

router.delete('/:id', async (req, res) => {
    let qoute = await Qoute.findByIdAndDelete(req.params.id);
    if (!qoute) return res.status(400).send("No Record Found With Given Id");

    return res.send(qoute);
});

router.post("/", async (req, res) => {
    let qoute = new Qoute();
    qoute.qoute = req.body.qoute;
    qoute.author = req.body.author;
    qoute.category = req.body.category
    await qoute.save();
    return res.send(qoute);
});

module.exports = router;