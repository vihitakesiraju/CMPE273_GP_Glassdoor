const express = require("express");
const salaryRouter = express.Router();
const salaryServices = require("../servicesMongo/salaryServices");
const salaryKafkaServices = require("../servicesKafka/salaryServices.js");
// const { checkAuth } = require("../config/passport");

const { POST_STUDENT_SALARY, GET_COMPANY_SALARIES, GET_STUDENT_SALARIES, GET_SALARY_AVERAGES } = require('../config/routeConstants');

// console.log(process.env.KAFKA_SWITCH)
if (process.env.KAFKA_SWITCH === 'true') {
    salaryRouter.route(POST_STUDENT_SALARY).post(salaryKafkaServices.postStudentSalary);
    salaryRouter.route(GET_COMPANY_SALARIES).get(salaryKafkaServices.getCompanySalaries);
    salaryRouter.route(GET_STUDENT_SALARIES).get(salaryKafkaServices.getStudentSalaries);
    salaryRouter.route(GET_SALARY_AVERAGES).get(salaryKafkaServices.getSalaryAverages);
}
else {
    salaryRouter.route(POST_STUDENT_SALARY).post(salaryServices.postStudentSalary);
    salaryRouter.route(GET_COMPANY_SALARIES).get(salaryServices.getCompanySalaries);
    salaryRouter.route(GET_STUDENT_SALARIES).get(salaryServices.getStudentSalaries);
    salaryRouter.route(GET_SALARY_AVERAGES).get(salaryServices.getSalaryAverages);
}

module.exports = salaryRouter;