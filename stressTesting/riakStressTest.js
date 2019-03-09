const faker = require('faker');

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// for (var i = 0; i <= 10000; i++) {
//   let number = getRandomArbitrary(0, 10000000);
// }

function randomNum(context, events, done) {
  context.vars['id'] = getRandomArbitrary(0, 10000000)
  return done();
}

function randomData(context, events, done) {
  var closingTime = getRandomArbitrary(8, 12)
  let index = getRandomArbitrary(10000000, 20000000)
  context.vars['data'] = obj = {
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
  done();
}

module.exports = {
  randomNum, randomData
}