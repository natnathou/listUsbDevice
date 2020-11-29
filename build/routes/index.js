"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var usb_1 = __importDefault(require("usb"));
var router = express_1.default.Router();
router.get('/fetch_usb_devises', function (req, res) {
    usb_1.default.getDeviceList().forEach(function (data) {
        console.log(data.parent);
    });
    var response = usb_1.default.getDeviceList();
    res.send(response);
});
module.exports = router;
