const express = require("express");
const reviewRouter = express.Router();
const reviewServices = require("../servicesMongo/reviewServices");
const reviewKafkaServices = require("../servicesKafka/reviewServices");
// const { checkAuth } = require("../config/passport");

const { POST_STUDENT_REVIEW, GET_COMPANY_REVIEWS, GET_ALL_REVIEWS, GET_STUDENT_REVIEWS, PUT_COMPANY_REPLY } = require('../config/routeConstants');

// console.log(process.env.KAFKA_SWITCH)
if (process.env.KAFKA_SWITCH === 'true') {
    console.log("in kafka service")
    reviewRouter.route(POST_STUDENT_REVIEW).post(reviewKafkaServices.postStudentReview);
    reviewRouter.route(GET_COMPANY_REVIEWS).get(reviewKafkaServices.getCompanyReviews);
    reviewRouter.route(GET_STUDENT_REVIEWS).get(reviewKafkaServices.getStudentReviews);
    reviewRouter.route(PUT_COMPANY_REPLY).put(reviewKafkaServices.postReplyFromCompany);
}
else {
    reviewRouter.route(POST_STUDENT_REVIEW).post(reviewServices.postStudentReview);
    reviewRouter.route(GET_COMPANY_REVIEWS).get(reviewServices.getCompanyReviews);
    reviewRouter.route(GET_STUDENT_REVIEWS).get(reviewServices.getStudentReviews);
    reviewRouter.route(PUT_COMPANY_REPLY).put(reviewServices.postReplyFromCompany);
}

module.exports = reviewRouter;