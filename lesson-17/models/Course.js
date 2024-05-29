// models/Course.js
"use strict";

/**
 * Listing 17.6 (p. 249)
 * 새로운 스키마와 모델의 생성
 */
const mongoose = require("mongoose"),
  courseSchema = mongoose.Schema({
    _id:{
      type : String,
      required: true,
      unique: true
    },
    title:{
      type:String,
      required: true
    },
    description: {
      type : String,
      required: true
    },
    price:{
      type : Number,
      required: true,
      min: 0
    },
    courseImg: {
      type : String
    },
    /**
     * @TODO 1. 스키마에 필드 추가
     */
  });

  courseSchema.methods.getInfo = () =>{
    return `Title: ${this.title} Description: ${this.description}`;
  };

  courseSchema.methods.findSamePrice = () => {
    return this.model("Corse")
    .find({price: this.price})
    .exec();
  };

  courseSchema.methods.findDiscoundprice = (price) => {
    return this.model("Corse")
    .find({price: {$lt: price}})
    .exec();
  };
  //역 populate
  courseSchema.virtual("subscribers", {
    ref: "Subscriber",
    localField: "_id",
    foreignField:"Courses"
  });

  //Object 및 JSON 가상 속성
  courseSchema.set("toObject", {virtuals: true});
  courseSchema.set("toJSON", {virtuals: true});

module.exports = mongoose.model("Course", courseSchema);