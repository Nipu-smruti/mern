import express from "express";
import { CreateEmployee, getAllEmployee, updateEmployee } from "../Controllers/createEmployee.js";

const Router = express.Router();
// route....api/createEmp
Router.route('/createEmp').post(CreateEmployee);
// route....api/updateEmp
Router.route('/updateEmp').put(updateEmployee);
// route....api/allEmp
Router.route('/allEmp').get(getAllEmployee);

export default Router;