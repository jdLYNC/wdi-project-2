const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2';
const secret = process.env.SESSION_SECRET || 'Victoria\'s?  She\'s a man...';

module.exports = { port, dbURI, secret };
