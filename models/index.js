//Import models
const User = require("./user");
const Blog = require("./blogPost");
const Comment = require("./comment")

//Associations - what belongs to what

//User has many blog posts
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//User has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

//blog posts belong to users
Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//posts have many comments
Blog.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

//comments belong to user
Comment.belongsTo(User, {
    through: Blog,
    foreignKey: 'user_id',
  
});

//comments are tied to posts - not sure if this is needed given the above...
Comment.belongsTo(Blog, {
    foreignKey: 'user_id',

});


//hasOne is another type

//belongsToMany, belongsToOne - read docs

module.exports = { User, Blog, Comment };
