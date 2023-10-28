import Movie from "../models/movie.model.js";


export const getMovies =  async(req, res) => {
     const movie = await Movie.find()
     res.json(movie)
}

export const createMovie = async(req, res) => {

    const {title, img, sorting, show} = req.body

    try {
    
        const newMovie = new Movie({
            title,
            img,
            sorting,
            show
        })
        const movieSave = await newMovie.save()

        res.json({
            id: movieSave._id,
            title: movieSave.title,
            img: movieSave.img,
            sorting: movieSave.sorting,
            show: movieSave.show
        })
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}