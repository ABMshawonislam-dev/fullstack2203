const Cart = require("../model/cartModel");

let cartController = async (req, res) => {
  
    let {productId,quantity,carOwnerId} = req.body

    console.log(req.query)

    let exixtingCartProduct = await Cart.find({productId:productId})

    if(exixtingCartProduct.length > 0 ){
        if(req.query.type == "incre"){
            let data = await Cart.findOneAndUpdate({_id:exixtingCartProduct[0]._id},{quantity:exixtingCartProduct[0].quantity+1},{new:true})

        }else{
            let data = await Cart.findOneAndUpdate({_id:exixtingCartProduct[0]._id},{quantity:exixtingCartProduct[0].quantity-1},{new:true})

        }

     
        // return res.send(data)
    }else{
        let cart = new Cart({
            productId:productId,
            quantity: 1,
            cartOwnerId: "65eec30dc9434f434d36d55b"
          })

          cart.save()

          res.send({status:"Done"})
    }


};

module.exports = cartController;
