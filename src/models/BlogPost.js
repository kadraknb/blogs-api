module.exports = (sequelize, DataTypes) => {
  const ModuleBlog_posts = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      primaryKey: true,
      onDelete: 'CASCADE'
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'blog_posts',
    underscored: true,
    timestamps: false,
  });

  ModuleBlog_posts.associate = ({ User }) => {
    ModuleBlog_posts.belongsTo(User, {
        as: 'user',
        foreignKey: 'userId'
    })
}
  return ModuleBlog_posts;
};