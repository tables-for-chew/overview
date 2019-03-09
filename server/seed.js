var fs = require('fs');
var faker = require('faker');

function randomInt(min, max) {
  return Math.random() * (max - min) + min
}

function createData() {
  var obj = {};
  var dataArray = [];
  var obj;
  for (var i = 1; i <= 100000; i++) {
    var closingTime = randomInt(8, 12)
    obj = {
      id: index,
      id_name: index.toString(),
      name: faker.lorem.word(),
      rating: Math.random()*(3.9-3.1+1)+3,
      ratings_num: Math.floor(Math.random()*(1000-100+1)+100),
      price_min: Math.floor(Math.random()*(20-15+1)+15),
      price_max: Math.floor(Math.random()*(50-20+1)+20),
      description: faker.lorem.paragraph() + faker.lorem.paragraph(),
      food_type: faker.lorem.word(),
      tag_one: faker.lorem.word(),
      tag_two: faker.lorem.word(),
      tag_three: faker.lorem.word(),
      cross_street: faker.lorem.word(),
      neighborhood: faker.lorem.word(),
      brunch_hrs: faker.helpers.replaceSymbols("#:00 am to #:00 pm"),
      lunch_hrs: faker.helpers.replaceSymbols("#:00 am to #:00 pm"),
      dinner_hrs: `5:00 pm to ${closingTime}:00 pm`,
      dining_style: faker.lorem.word(),
      dress_code: faker.lorem.word(),
      payment_options: faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word(),
      chef: faker.name.firstName(),
      entertainment:  faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word(),
      additional_info:  faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word(),
      website: faker.internet.url(),
      phone_number: faker.helpers.replaceSymbols("(###) ###-####"),
      longitude: faker.address.longitude(),
      latitude: faker.address.latitude(),
      street_address: faker.address.streetAddress()
    };
    index++;
    dataArray.push(obj);
  }
  return dataArray;
}

function makeFile(index) {
  var stringArray = JSON.stringify(createData())
  console.log('ready to write!');
  fs.writeFileSync(`jsonData/file${index}.json`, stringArray)
  console.log('written!');
}

var index = 0;
for (var j = 0; j <= 100; j++) {
  console.log('loopin!', j);
  makeFile(j);
}


