import connectDB from '../../db/connect';
import Product from '../../models/Product';

const handler = async (req, res) => {
    if (req.method === 'POST') {

        const { title, description, image, price } = req.body;
      if (title && description && image && price) {
            try {
                var product = new Product({
                title,
                description,
                image,
                price
                })
                // Create new product
                var productcreated = await product.save();
                return res.status(200).send(productcreated); 
            } catch(error) {
                res.status(500).send(error.message);
              }
        } else {
          res.status(422).send('data miss');
        }
    } else {
      res.status(422).send('error method');
    }
  };
  
  export default connectDB(handler);