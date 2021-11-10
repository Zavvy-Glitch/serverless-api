const dynamoose = require('dynamoose');

exports.handler = async (event) => {
  // TODO implement

  const peopleSchema = new dynamoose.Schema({
    'id': Number,
    'name': String,
    'role': String
  })

  let data = null;
  let status = 500;

  try{
    data = await peopleSchema.scan().exec();
    status = 200;
  } catch (e) {
    data = new Error(e)
    status = 400;
  }

  const response = {
      statusCode: 200,
      body: JSON.stringify(data),
  };
  return response;
};