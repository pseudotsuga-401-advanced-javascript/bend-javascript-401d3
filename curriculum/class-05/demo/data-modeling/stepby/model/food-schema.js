'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema( {
  name: {type: String, required: true},
  calories: {type: Number, required: true},
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'PROTEIN']},

});

// TODO: Define ability to go and get one item, .findOne() method is invoked

food.post('findOne', function(){
  // doc.name = doc.name.toUpperCase();
});

// TODO: Create a new record instance when init() is invoked

food.post('init', function(){
  // console.log(this);
});


food.post('save', function(){
  // console.log('saving', this);
});