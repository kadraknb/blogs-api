module.exports = (sequelize, DataTypes) => {
  const ModuleUsers = sequelize.define('User', {
    id: DataTypes.NUMBER,
    displayName: DataTypes.STRING,
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
};