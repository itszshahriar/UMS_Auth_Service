import { Schema, model } from "mongoose";
import {
  AcademicFacultyModel,
  IAcademicFaculty,
} from "./academicFaculty.interface";

const academicFacultySchema = new Schema<
  IAcademicFaculty,
  AcademicFacultyModel
>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

const AcademicFaculty = model<IAcademicFaculty, AcademicFacultyModel>(
  "AcademicFaculty",
  academicFacultySchema,
);

export default AcademicFaculty;
