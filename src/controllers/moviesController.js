const db = require('../database/models')

module.exports = {
    list: (req, res) => {

        db.Movie.findAll()
            .then((movies) => {
                return res.render('moviesList', {
                    movies
                })
            })
            .catch((error) => console.log(error))
    },
    new: (req, res) => {
        return res.send('Peliculas de estreno')

    },
    recomended: (req, res) => {
        return res.send('peliculas recomendadas')
    },
    detail: (req, res) => {


        const id = req.params.id;
        db.Movie.findByPk(id)
            .then((movie) => {
                if(movie) {
                    return res.render('moviesDetail',{
                        movie
                    })
                }
            })
            .catch((error) => console.log(error))

    }
}