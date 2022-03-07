const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  photo: {
    type: String,
    required: [true, 'please upload your photo'],
  },
  description: {
    type: String,
    required: [true, 'Please tell us your description!'],
  },
  url: {
    type: String,
    required: "URL can't be empty",
  },
});

const ItemMen = mongoose.model('ItemMen', ItemSchema);
const ItemWomen = mongoose.model('ItemWomen', ItemSchema);

module.exports = { ItemMen, ItemWomen };
