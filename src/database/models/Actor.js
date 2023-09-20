module.exports = (sequelize, dataTypes) => {

    const alias = "Actor";
    const cols = {
      id : {
        type : dataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
      },
      first_name : {
        type : dataTypes.STRING(100),
        allowNull : false
      },
      last_name : {
        type : dataTypes.STRING(100),
        allowNull : false
      },
      rating : {
        type : dataTypes.DECIMAL(3,1),
        allowNull : true,
        defaultValue : null
      },
      favorite_movie_id : {
        type : dataTypes.INTEGER.UNSIGNED,
        allowNull : true,
        defaultValue : null
      }
    }

    // si la tabla es el plural del modelo
    const config = {
        tableName : "actors",
        timestamps : true,    /* en caso de que la tabla no tenga marcas de tiempo, poner FALSE */
        underscored : true    /* las columnas estan escritas_de_esta_manera ---------- si fuera camelCase es FALSE */
    }

    const Actor = sequelize.define(alias, cols, config)
    
    return Actor

}