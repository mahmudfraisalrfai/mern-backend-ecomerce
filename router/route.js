const routers = require("express").Router();
const controller = require("../controller/controller");

routers
  .route("/product")
  .get(controller.getProducts)
  .post(controller.postProducts)
  .delete(controller.deleteProducts)
  .patch(controller.postComments);
routers
  .route("/loginSingup")
  .delete(controller.deleteUser)
  .get(controller.getUser)
  .post(controller.postSingup);
routers
  .route("/updatCard")
  .post(controller.postAddCard)
  .get(controller.getcart);

routers.route("/name").get(controller.getUserName);

module.exports = routers;
