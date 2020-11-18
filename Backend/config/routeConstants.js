module.exports = {
    FRONTEND_URL: "http://localhost:3000",
    BACKEND_URL: "http://localhost:3001",

    //Login Routes
    POST_LOGIN: '/login',
    POST_REGISTER: '/register',
    FETCH_CUSTOMERINPUT: '/validationinput',

    //Company Routes
    PUT_COMPANY_SIGNUP: "/company/profile",
    GET_COMPANY_SIGNUP: "/company/profile",
    POST_COMPANY_SIGNUP: "/company/profile",

    //Review Routes
    REVIEW_ROUTE: "/review",
    POST_STUDENT_REVIEW: "/student/review",
    GET_STUDENT_REVIEWS: "/student/reviews",
    GET_ALL_REVIEWS: "/company/reviews",
    GET_COMPANY_REVIEWS: "/company/reviews",
    POST_COMPANY_REPLY: "/company/reply",

    //KAFKA TOPICS
    TOPIC_LOGIN: 'login',

    /**Response status codes */
    RES_UNKNOWN_ERROR: 502,
    RES_BAD_REQUEST: 400,
    RES_NOT_FOUND: 404,
    RES_DUPLICATE_RESOURCE: 409,
    RES_SUCCESS: 200,
    RES_INTERNAL_SERVER_ERROR: 500
}