module.exports = (sequelize, DataTypes) => {
  const ModuleUsers = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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

  ModuleUsers.associate = ({ BlogPost }) => {
    ModuleUsers.hasMany(BlogPost, {
        as: 'idUsers',
        foreignKey: 'id'
    })
}
  return ModuleUsers;
};