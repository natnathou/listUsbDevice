import express, { Request, Response } from 'express';
import usb from 'usb';
const router = express.Router();

router.get('/fetch_usb_devises', (req: Request, res: Response): void => {
  usb.getDeviceList().forEach((data) => {
    console.log(data.parent);
  });

  let response = usb.getDeviceList();
  res.send(response);
});

module.exports = router;
