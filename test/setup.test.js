import mongoose from "mongoose";
import petModel from "../src/dao/models/Pet.js";
import userModel from "../src/dao/models/User.js";

before(async()=>{
    mongoose.connect('mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/?retryWrites=true&w=majority')
})
after (async ()=>{
    mongoose.connection.close()
  // this.timeoute(5000)
})
export const dropPets = async()=>{
    await petModel.collection.drop()

}
export const dropUser = async()=>{
    await petModel.collection.drop()
}