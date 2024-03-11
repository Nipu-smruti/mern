import express from "express";
import { userLogin, userRegistration } from "../config/auth.js";

const Router = express.Router();

Router.route('/newUser').post(userRegistration);
Router.route('/userLogin').post(userLogin);



export default Router;