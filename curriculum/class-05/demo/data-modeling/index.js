'use strict';

const mongoose = require('mongoose');
const Players = require('./models/players-model');

const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

let food = new food();

const doDataStuff = async () => {

  let sampleObject = {
    name: 'Cabbage',
    calories: 146,
    type: 'VEGETABLE',
  };

  let newFood = await food.create(sampleObject);
  console.log('Food Created', newFood);


  let allFood = await food.get();
  console.log('All Food', allFood);

  // let oneFood = await food.get('');
  // console.log('One Food', oneFood);

  // Disconnect from Mongo
  mongoose.disconnect();

};

doDataStuff();
