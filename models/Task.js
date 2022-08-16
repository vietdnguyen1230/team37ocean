const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    events: [
      {
        eventId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    rewards: { type: Number },
    status: { type: String, default: "pending" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Task", TaskSchema);
