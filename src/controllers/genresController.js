const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Genre.findAll()
        .then((genres) => {
            return res.render('genresList',{
                genres
            })
        })
    },
    detail : (req,res) => {
        const id = req.params.id
        db.Genre.findByPk(id)
        .then((genre) => {
          if(genre){
            return res.render('genresDetail',{
                genre
            })
          }
        })

        .catch(error => console.log(error))

    }
}