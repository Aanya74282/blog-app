import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required : true
  },
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type: String,
    required:true
  }
});

//tell which database/collection has to be restricted for this

const user = mongoose.model('user',userSchema);

export default user;