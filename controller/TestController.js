const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const e = require('express');
const Employee = mongoose.model('Employee');

router.get("/", (req, res) => {
    Employee.find((err, employee) => {
        if(!err) {
            res.send(employee);
        } else {
            res.send(err);
        }
    })
});

router.get("/:id", (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if(!err) {
            res.send(employee);
        } else {
            res.send(err);
        }
    })
});

router.get("/:email", (req, res) => {
    Employee.findOne({"email": req.params.email}, (err, employee) =>{
        if(!err) {
            res.send(employee._id);
        } else {
            res.send(err);
        }
    })
})

module.exports = router;
