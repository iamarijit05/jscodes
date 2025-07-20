//object destructure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "arijit" 
}
//course.courseInstructor

const {courseInstructor: instructor} = course
//console.log(instructor);
/*
{
    "name": "arijit",
    "coursename": "js in hindi",
    "price": "free"
}*/

