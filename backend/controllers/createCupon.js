const Discount = require("../model/discount");

let cuponController = async (req, res) => {

    let {cupon,cuponamount,cupontype,cuponrang} = req.body
  
    let exixtingDiscount =await Discount.find({cupon:cupon})

    if(exixtingDiscount.length > 0){
        return res.send("Cupon Exists")
    }else{
        if(cuponamount > 100){
            if(cupontype == "percent"){
                return res.send("invalid discount amount")
            }
        }else if(cuponamount > 50){
            if(cupontype == "delivercharge"){
                return res.send("invalid discount amount")
            }
        }else{
            let discount = new Discount({
                cupon:cupon,
                cuponamount: cuponamount,
                cupontype: cupontype,
                cuponrang:cuponrang
            })

            discount.save()

            res.send(discount)
        }
    }
    



    // Amount koto-> 200 tahole type percent , delivery charge -> 50   


};

module.exports = cuponController;
