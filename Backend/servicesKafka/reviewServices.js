const {
    CONTENT_TYPE,
    APP_JSON,
    RES_SUCCESS,
    RES_BAD_REQUEST,
    RES_NOT_FOUND,
    RES_DUPLICATE_RESOURCE,
    TEXT_PLAIN,
    RES_INTERNAL_SERVER_ERROR,
    REVIEW_ROUTE,
    POST_STUDENT_REVIEW,
    GET_STUDENT_REVIEWS,
    GET_ALL_REVIEWS,
    GET_COMPANY_REVIEWS,
    POST_COMPANY_REPLY,
  } = require("../config/routeConstants");
  

  var kafka = require('../kafka/client');
  
  module.exports.postStudentReview=(req,res)=>{
    console.log("req.body"+JSON.stringify(req.body))
    data={
      api:"POST_STUDENT_REVIEW",
      body: req.body
    }
    kafka.make_request('reviews', data, function(err,results){
      console.log('in result');
      console.log(results);
      if (error) {
        console.log("In error");
        res.status(RES_INTERNAL_SERVER_ERROR).end(JSON.stringify(error));
    } else {
        console.log("In else");
        res.status(RES_SUCCESS).send(JSON.stringify(result));
    }
      
  });
  }

  module.exports.getCompanyReviews=(req,res)=>{
    console.log("req.body"+JSON.stringify(req.body))
    data={
      api:"GET_COMPANY_REVIEWS",
      body: req.body
    }
    kafka.make_request('reviews', data, function(err,results){
      console.log('in result');
      console.log(results);
      if (error) {
        console.log("In error");
        res.status(RES_INTERNAL_SERVER_ERROR).end(JSON.stringify(error));
    } else {
        console.log("In else");
        res.status(RES_SUCCESS).send(JSON.stringify(result));
    }
      
  });
  }

  module.exports.getStudentReviews=(req,res)=>{
    console.log("req.body"+JSON.stringify(req.body))
    data={
      api:"GET_STUDENT_REVIEWS",
      body: req.body
    }
    kafka.make_request('reviews', data, function(err,results){
      console.log('in result');
      console.log(results);
      if (error) {
        console.log("In error");
        res.status(RES_INTERNAL_SERVER_ERROR).end(JSON.stringify(error));
    } else {
        console.log("In else");
        res.status(RES_SUCCESS).send(JSON.stringify(result));
    }
      
  });
  }
  
  