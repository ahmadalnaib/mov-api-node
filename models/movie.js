const mongoose = require('mongoose');

const ModelsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    default: 0,
  },
  reviews:{
    type:[
      {
        user:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
       comment:String,
        rate:Number,
      }
    ],
    default:[]
  }
},{
  timestamps: true,

});

ModelsSchema.set('toJSON', {
virtuals: true,
versionKey:false,
transform: function (doc, ret) {
  // remove these props when object is serialized
  delete ret._id;
}
});
const Model = mongoose.model('Movie', ModelsSchema);
module.exports = Model;
