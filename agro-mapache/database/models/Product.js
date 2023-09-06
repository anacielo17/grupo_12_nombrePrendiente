const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataType) => {
    const alias = "Product";
    const cols = {
        product_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        product_date: {
            type: DataType.DATE
        },
        product_inStock: {
            type: DataType.INTEGER
        },
        brand_code: {
            type: DataType.STRING,
            allowNull: false,
            references: {
                model: "brands",
                key: "brand_code"
            }

        },
        origin: {
            type: DataType.STRING,
            allowNull: false
        },
        product_price: {
            type: DataType.DECIMAL
        },
        name: {
            type: DataType.STRING
        },
        image: {
            type: DataType.STRING,
            /* allowNull: false */
        },
        description: {
            type: DataType.STRING
        },
        product_category: {
            type: DataType.INTEGER, 
             references: {
                model: "categories",
                key: "category_id"
            } 
        },
        product_condition: {
            type: DataType.STRING
        }, 
        product_discount :{
            type : DataType. DECIMAL 
        }/* ,
        quantity :{
            type :DataType.SMALLINT,
            allowNull: false
        } */
    };

    const config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);
        
        Product.associate = models =>{
        Product.belongsTo(models.Brand, {
         as : "brand", 
         timestamps:false, 
         foreignKey: "brand_code"
        }); 
        Product.belongsTo(models.Category, {
            as : "category", 
            timestamps:false, 
            foreignKey: "product_category"
           });
     }  
  
    return Product;
}