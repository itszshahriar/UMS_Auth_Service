import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import {
  createAcademicFaculty,
  deleteSingleFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateSingleAcademicFaculty,
} from "./academicFaculty.controller";
import {
  createAcademicSemesterZodSchema,
  updateAcademicFacultyZodSchema,
} from "./academicFaculty.validation";

const router = express.Router();

router.post(
  "/create",
  validateRequest(createAcademicSemesterZodSchema),
  createAcademicFaculty,
);

router.get("/:id", getSingleAcademicFaculty);

router.patch(
  "/:id",
  validateRequest(updateAcademicFacultyZodSchema),
  updateSingleAcademicFaculty,
);

router.delete("/:id", deleteSingleFaculty);

router.get("/", getAllAcademicFaculty);

export default router;
