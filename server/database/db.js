import mongoose from "mongoose";

const Connection = async (username,password)=>{
  const URL= `mongodb://${username}:${password}@ac-aeirs9v-shard-00-00.cdcypyk.mongodb.net:27017,ac-aeirs9v-shard-00-01.cdcypyk.mongodb.net:27017,ac-aeirs9v-shard-00-02.cdcypyk.mongodb.net:27017/blog-app?ssl=true&replicaSet=atlas-vnqb6p-shard-0&authSource=admin&retryWrites=true&w=majority`;
  
  try{
     await mongoose.connect(URL,{useNewUrlParser:true});
     console.log('Database connected successfully');

  } catch(error){
    console.log('Error while connecting with the database',error);

  }
}

export default Connection;