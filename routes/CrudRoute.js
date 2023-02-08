const express = require("express");
const {
  getAllInventory,
  getInventory,
  createInventory,
  updateInventoryData,
  deleteInventoryData,
} = require("../controllers/inventory");
const router = express.Router();

router.use(express.json());

router.route("/getInventory").get(getAllInventory);
router.route("/getInventory/:id").get(getInventory);
router.route("/createInventory").post(createInventory);
router.route("/updateInventory/:id").put(updateInventoryData);
router.route("/deleteInventory/:id").delete(deleteInventoryData);

module.exports = router;
