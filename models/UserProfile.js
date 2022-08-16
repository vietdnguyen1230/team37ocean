const mongoose = require("mongoose");

const RewardSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    rewards: [
      {
        rewardsId: {
          type: String,
        },
        points: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Reward", RewardSchema);
