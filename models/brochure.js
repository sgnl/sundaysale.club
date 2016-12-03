
'use strict';
const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const brochureSchema = new Schema({
  url: {required: true, type: String},
  dateAdded: {
    required: true,
    type: String,
    default() {
      return moment().format('MMM Do');
    }
  }
  // clicks: {type: Number, default: 0} TODO
});

const Brochure = mongoose.model('Brochure', brochureSchema);

module.exports = Brochure;
