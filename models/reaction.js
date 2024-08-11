const { Schema, model }= require('mongoose');

const reactionSchema = new Schema(
    {
      reactionId: {
        type:Schema.Types.ObjectId,
        default:() => new Types.ObjectId()
      },
      createdAt: {Date,default:Date.now},
      username: String,
      reactionBody: String,
    },
    {

        toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
module.exports = reactionSchema;