import { Request, Response } from 'express';
import Movie from '../models/movie.model';

export const createMovie = async (req: Request, res: Response) => {
  try {
    const { title, director, year, genre, duration } = req.body;
    const newMovie = new Movie({ title, director, year, genre, duration });
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du film', error });
  }
};

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des films', error });
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: 'Film non trouvé' });
    } 
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du film', error });
  }
};