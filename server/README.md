<Additional information about your API call. Try to use verbs that match both request type (fetching vs modifying) and plurality (one vs multiple).>

GET INFORMATION FOR A GIVEN RESTAURANT:

  URL

    /products/:id

  Method:

    GET

  URL Params

    Required:

      id=[integer]

  Success Response:

  Code: 200 
  Content: {
    id: Number,
    name: String,
    ratings_num: Number,
    rating: Number,
    description: String,
    price_min: Number,
    price_max: Number,
    food_type: String,
    tag_one: String,
    tag_two: String,
    tag_three: String,
    cross_street: String,
    neighborhood: String,
    brunch_hrs: String,
    lunch_hrs: String,
    dinner_hrs: String,
    dining_style: String,
    dress_code: String,
    payment_options: String,
    chef: String,
    entertainment: String,
    additional_info: String,
    website: String,
    phone_number: String,
    longitude: Number,
    latitude: Number,
    street_address: String
  }
  Error Response:

  Code: 404 ID NOT FOUND 
  Content: { error : error message }

  Sample Call:


  $.ajax({
        url: `/overview/${id}`,
        method: 'GET',
        contentType: 'application/json',
        success: (data) => {
          console.log(data);
          this.setState({
            restaurant: data[0],
            restaurantDescSplit: data[0].description.match(/.{78}/g)
          });
        },
      });

POST INFORMATION FOR A GIVEN RESTAURANT:

  URL

    /products/:id

  Method:

    POST

  URL Params

    Required:

      id=[integer]

  Success Response:

  Code: 201 
  Content: {
    id: Number
    text: Successfully posted!
  }
  Error Response:

  Code: 403 NOT VALID
  Content: { error : error message }

  Sample Call:


  $.ajax({
        url: `/overview/${id}`,
        method: 'POST',
        contentType: 'application/json',
        success: (data) => {
          console.log("data successfully posted")
        },
      });

DELETE INFORMATION FOR A GIVEN RESTAURANT:

  URL

    /products/:id

  Method:

    DELETE

  URL Params

    Required:

      id=[integer]

  Success Response:

  Code: 202 
  Content: "Deletion successful"

  Error Response:

  Code: 403 NOT FOUND 
  Content: { error : error message }

  Sample Call:


  $.ajax({
        url: `/overview/${id}`,
        method: 'DELETE',
        contentType: 'application/json',
        success: (data) => {
          console.log("Deleted restaurant data")
        },
      });

UPDATE INFORMATION FOR A GIVEN RESTAURANT:

  URL

    /products/:id

  Method:

    PUT

  URL Params

    Required:

      id=[integer]

  Success Response:

  Code: 203
  Content: "Successfully updated!"

  Error Response:

  Code: 403 NOT FOUND 
  Content: { error : error message }

  Sample Call:


  $.ajax({
        url: `/overview/${id}`,
        method: 'PUT',
        contentType: 'application/json',
        success: (data) => {
          console.log("Data was updated!")
        },
      });

Notes:

<This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here.>