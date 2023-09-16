module.exports = (sequelize, dataTypes) => {

    const alias = "Genre";
    const cols = {
      id : {
        type : dataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
      },
      name : {
        type : dataTypes.STRING(100),
        allowNull : false
      },
      ranking : {
        type : dataTypes.DECIMAL(3,1).UNSIGNED,
        allowNull : false
      },
      active : {
        type : dataTypes.INTEGER,
        allowNull : false,
        defaultValue : 1
      }
    }

    // si la tabla es el plural del modelo
    const config = {
        tableName : "genres",
        timestamps : true,    /* en caso de que la tabla no tenga marcas de tiempo, poner FALSE */
        underscored : true    /* las columnas estan escritas_de_esta_manera ---------- si fuera camelCase es FALSE */
    }

    const Genre = sequelize.define(alias, cols, config)
    
    return Genre

}