module.exports = (sequelize, DataTypes) => {
  const ModuleCategories = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      modelName: 'categorie',
      underscored: true,
      timestamps: false,
    }
  );
  return ModuleCategories;
};