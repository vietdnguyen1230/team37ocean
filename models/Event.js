const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    country: { type: String },
    tasks: { type: String },
    img: { type: String },
    city: { type: String },
    phone: { type: String },
    date: { type: String },
    rewards: { type: Number, required: true },
    id: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Event", EventSchema);
