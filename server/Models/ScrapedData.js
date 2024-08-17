const mongoose = require('mongoose');
const { Schema } = mongoose;

const scrapedDataSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  pageTitle: {
    type: String,
    required: true,
  },
  paragraphs: {
    type: [String], // An array of strings to store paragraph content
  },
  headings: {
    type: [String], // An array of strings to store heading content
  },
  links: [
    {
      text: String, // Text of the link
      href: String, // URL of the link
    },
  ],
  images: [
    {
      src: String, // Source URL of the image
      alt: String, // Alt text of the image
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
});

const ScrapedData = mongoose.model('ScrapedData', scrapedDataSchema);

module.exports = ScrapedData;
