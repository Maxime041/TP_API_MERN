import mongoose from "mongoose";

interface IMovie {
  title: string;
  director: string;
  year: number;
  genre: string;
  duration: number;
}

const MovieSchema = new mongoose.Schema<IMovie>({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
    year: {
    type: Number,
    required: true,
  },
    genre: {
    type: String,
    required: true,
  },
    duration: {
    type: Number,
    required: true,
  },
}, {
    timestamps: true,
  }
);

const Movie = mongoose.model<IMovie>("Movie", MovieSchema);

export default Movie;