//Generates CSV data for postgres
var fs = require('fs');
var faker = require('faker');

function randomInt(min, max) {
  return Math.random() * (max - min) + min
}

function createData() {
  var closingTime = randomInt(8, 12);
  var obj = '';
  // var obj = `id,id_name,name,rating,ratings_num,price_min,price_max,description,food_type,tag_one,tag_two,tag_three,cross_street,neighborhood,brunch_hrs,lunch_hrs,dinner_hrs,dining_style,dress_code,payment_options,chef,entertainment,additional_info,website,phone_number,longitude,latitude,street_address\n`
  for (var i = 1; i <= 100000; i++) {
    obj += `${index}+${index.toString()}+${faker.lorem.word()}+${Math.random()*(3.9-3.1+1)+3}+${Math.floor(Math.random()*(1000-100+1)+100)}+${Math.floor(Math.random()*(20-15+1)+15)}+${Math.floor(Math.random()*(50-20+1)+20)}+${faker.lorem.paragraph() + faker.lorem.paragraph()}+${faker.lorem.word()}+${faker.lorem.word()}+${faker.lorem.word()}+${faker.lorem.word()}+${faker.lorem.word()}+${faker.lorem.word()}+${faker.helpers.replaceSymbols("#:00 am to #:00 pm")}+${faker.helpers.replaceSymbols("#:00 am to #:00 pm")}, 5:00 pm to ${closingTime}:00 pm+${faker.lorem.word()}+${faker.lorem.word()}+${faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word()}+${faker.name.firstName()}+${faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word()}+${faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word()}+${faker.internet.url()}+${faker.helpers.replaceSymbols("(###) ###-####")}+${faker.address.longitude()}+${faker.address.latitude()}+${faker.address.streetAddress()}+${closingTime = randomInt(8, 12)} \n`
    index++;
  }
  return obj;
}

function makeFile(index) {
  var stringArray = createData();
  console.log('ready to write!');
  fs.writeFileSync(`csvData/file${index}.csv`, stringArray)
  console.log('written!');
}

var index = 0;
for (var j = 0; j <= 100; j++) {
  console.log('loopin!', j);
  makeFile(j);
}


