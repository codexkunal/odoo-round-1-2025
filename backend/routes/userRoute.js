import express from "express";
import {registerUser,loginUser} from "../controller/userController.js";
import authUser from "../middleware/authUser.js";
import upload from "../middleware/multer.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-profile",authUser, getProfile);

// userRouter.get("/get-profile",authUser, getProfile);
// userRouter.post("/update-profile", upload.single('image'),authUser,updateProfile);
// userRouter.post("/book-appointment",upload.single('image'),authUser,bookAppointment);
// userRouter.get("/appointments",authUser, listAppointment);
// userRouter.post("/cancel-appointment",authUser,cancelAppointment);



export default userRouter;