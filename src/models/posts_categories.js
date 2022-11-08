module.exports = (sequelize, DataTypes) => {
  const ModulePostsCategories = sequelize.define(
    'Posts_categories',
    {},
    {
      timestamps: false,
      tableName: 'posts_categories',
      undescored: true,
    }
  );

  ModulePostsCategories.associate = ({Blog_posts, Categories}) => {
    Blog_posts.belongsToMany(Blog_posts, {
      as: 'blogPosts',
      through: ModulePostsCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id'
  })
    Categories.belongsToMany(Categories, {
      as: 'categories',
      through: ModulePostsCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id'
  })
  }
 
//  N-N




  return ModulePostsCategories;
};