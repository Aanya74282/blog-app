import multer from 'multer';

import dotenv from 'dotenv';

import {GridFsStorage} from 'multer-gridfs-storage';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;



const storage = new GridFsStorage({
  url:`mongodb://${username}:${password}@ac-aeirs9v-shard-00-00.cdcypyk.mongodb.net:27017,ac-aeirs9v-shard-00-01.cdcypyk.mongodb.net:27017,ac-aeirs9v-shard-00-02.cdcypyk.mongodb.net:27017/blog-app?ssl=true&replicaSet=atlas-vnqb6p-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options:{useNewUrlParser:true},
  file:(request,file)=>{
    const match =["image/png", "image/jpg"];

    if(match.indexOf(file.mimeType)=== -1){
      return `${Date.now()}-blog-${file.originalname}`;
    }

    return{
      bucketName: "photos",
      filename:`${Date.now()}-blog-${file.originalname}`
    }
  }
})

export default multer({storage});