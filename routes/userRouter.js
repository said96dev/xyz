import  {
    getAllUsers,
    createUser,
    getSingleUser ,
    updateUser,
    getEmployee,
    deleteUser
} from "../controllers/userController.js"
import express from "express"
import { authentication , authorizePermissions } from "../middleware/authentication.js";

const router = express.Router()

router.route('/').get(authentication , getAllUsers);
router.route("/getEmployee").get(authentication , getEmployee)
router.route('/updateUser').patch(authentication , updateUser);
router.route("/adduser").post(authentication ,authorizePermissions("admin"), createUser)
router.route("/:id").get(authentication , getSingleUser).delete(authentication ,authorizePermissions("admin") , deleteUser)
export default router;