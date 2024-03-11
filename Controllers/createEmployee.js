import { Employee } from "../Models/createEmpModel.js";

export const CreateEmployee = async (req, res, next) => {
    const { name, email, mobileNo, gender, course, img } = req.body;

    const employee = new Employee({
        name: name,
        email: email,
        mobileNo: mobileNo,
        gender: gender,
        course: course,
        img: img,
    });
    const newEmployee = await employee.save();
    res.json({
        success: true,
        message: "Employee Created Successfully",
        newEmployee,
    })
};

export const updateEmployee = async (req, res, next) => {
    const { _id } = req.query;
    const { name, email, mobileNo, gender, course, img } = req.body;
    const employee = await Employee.findById(_id);
    if (!employee) {
        console.log("Employee Not Found");
    }

    if (name) employee.name = name;
    if (email) employee.email = email;
    if (mobileNo) employee.mobileNo = mobileNo;
    if (gender) employee.gender = gender;
    if (course) employee.course = course;
    if (img) employee.img = img;

    await employee.save();
    res.json({
        success: true,
        message: "Employee Updated Successfully",
        employee,
    })
};

export const getAllEmployee = async (req, res, next) => {
    const allEmployee = await Employee.find({});
    res.json({
        success: true,
        message: "Employees found Successfully",
        allEmployee,
    });
};

