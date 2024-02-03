import express from "express";
import {getAllRequests , updateRequest} from "../controllers/requestController.js"
import {authorizePermissions } from "../middleware/authentication.js";

const Router = express.Router()

Router.route("/").get(getAllRequests)
Router.route("/:id").patch( updateRequest)

export default Router