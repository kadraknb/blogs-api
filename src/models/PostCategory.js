module.exports = (sequelize, DataTypes) => {
  const ModulePostsCategories = sequelize.define(
    'PostCategory',
    {
      post_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'posts_categories',
    }
  );

  ModulePostsCategories.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      as: 'blogPostsCategories',
      through: ModulePostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    BlogPost.belongsToMany(Category, {
      as: 'categoriesPosts',
      through: ModulePostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return ModulePostsCategories;
};
