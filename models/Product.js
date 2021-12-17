import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var product = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    price: {
      type: Number,
      required: false
    },
    image: {
      type: String,
      required:  false
    }
  });
  
  mongoose.models = {};
  
  var Product = mongoose.model('Product', product);
  
  export default Product;