import mongoose from "mongoose";

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  addres: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  agencyname: {
  type: String,
  required: true,
},

position: {
  type: String,
  required: true,
},

idcardnumber: {
  type: String,
  required: true,
},

  date: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Users", User);
