"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/SUM", function (req, res) {
    var _a = req.query, page_number = _a.page_number, page_length = _a.page_length;
    var sum = Number(req.query.num1) + Number(req.query.num2);
    res.send(sum.toString());
});
router.get("/SUB", function (req, res) {
    var _a = req.query, num1 = _a.num1, num2 = _a.num2;
    var sum = Number(req.query.num1) - Number(req.query.num2);
    res.send(sum.toString());
});
module.exports = router;
