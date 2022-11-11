module.exports = (sequelize, DataTypes) => {
  const ModuleCategories = sequelize.define('Category', {
    // id: DataTypes.NUMBER,
    name: DataTypes.STRING,
  }, {
    modelName: 'Category',
    underscored: true,
    timestamps: false,
  });
  return ModuleCategories;
};