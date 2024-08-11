const { Schema, model }= require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema(
    {
      thought: String,
      createdAt: {Date,default:Date.now},
      username: String,
      reactions: [
        reactionsSchema
      ]
    },
    {

        toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  thoughtSchema
    .virtual('reactionCount')
    .get(function () {
      return `${this.username} ${this.reactions.length}`;
    })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;