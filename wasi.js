require('dotenv').config();

module.exports = {
    sessionId: process.env.SESSION_ID || 'jiftxgtgtbo',
    mongoDbUrl: process.env.MONGODB_URI || process.env.MONGODB_URL || 'mongodb+srv://wasidev710_db_user:5xwzp9OQcJkMe1Tu@cluster0.ycj6rnq.mongodb.net/botnew?retryWrites=true&w=majority&appName=Cluster0',
};


