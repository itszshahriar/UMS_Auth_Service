import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createFaculty, createStudent } from "./user.controller";
import {
  createFacultyZodSchema,
  createStudentZodSchema,
} from "./user.validation";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(createStudentZodSchema),
  createStudent,
);

router.post(
  "/create-faculty",
  validateRequest(createFacultyZodSchema),
  createFaculty,
);

export default router;
