const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true 
    },
    message: {
        type: String,
        required: true 
    },
    commentedAt: {
        type: Date,
        default: Date.now 
    }
});


const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is required
        unique: true,   // Ensure titles are unique
        minlength: 5    // Minimum length of 5 characters
    },
    content: {
        type: String,
        required: true, // Content is required
        minlength: 50   // Minimum length of 50 characters
    },
    author: {
        type: String,
        required: true // Author is required
    },
    tags: {
        type: [String], // Array of strings for tags
        default: []     // Default to an empty array
    },
    category: {
        type: String,
        default: "General" // Default category is "General"
    },
    likes: {
        type: [String], // Array of strings for user IDs who liked the post
        default: []     // Default to an empty array
    },
    comments: [CommentSchema], // Array of comments using the CommentSchema
    createdAt: {
        type: Date,
        default: Date.now // Automatically set to the current date and time
    },
    updatedAt: {
        type: Date // Field to track the last update time
    }
}, {
    timestamps: true // Automatically manages createdAt and updatedAt fields
});

// Create the BlogPost model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// Export the BlogPost model for use in other parts of the application
module.exports = BlogPost;  