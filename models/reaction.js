const { Schema, Types }= require('mongoose');

const reactionSchema = new Schema(
    {
      reactionId: {
        type:Schema.Types.ObjectId,
        default:() => new Types.ObjectId()
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
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