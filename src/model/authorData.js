const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://userone:<password>@ictakfiles.rdlsu.mongodb.net/LIBRARYAPPANGULAR?retryWrites=true&w=majority');

const schema = mongoose.Schema;

const AuthorSchema = new schema({
    name: String,
    description: String,
    image: String
});

var authorData = mongoose.model('authorData',AuthorSchema);

module.exports = authorData;