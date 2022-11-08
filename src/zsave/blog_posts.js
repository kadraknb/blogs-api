// module.exports = (sequelize, DataTypes) => {
//   const ModuleBlog_posts = sequelize.define('Blog_posts', {
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'blog_posts',
//     underscored: true,
//     timestamps: false,
//   });

//   ModuleBlog_posts.associate = ({ Users }) => {
//     ModuleBlog_posts.belongsTo(Users, {
//         as: 'usersID',
//         foreignKey: 'user_id'
//     })
// }
//   return ModuleBlog_posts;
// };