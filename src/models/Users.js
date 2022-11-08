module.exports = (sequelize, DataTypes) => {
  const ModuleUsers = sequelize.define('Users', {
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
    underscored: true,
    timestamps: false,
  });
  return ModuleUsers;
};~