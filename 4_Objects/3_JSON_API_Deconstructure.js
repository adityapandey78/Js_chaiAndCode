const course={
    courseName:"Js in Hindi",
    price:"999",
    courseInstructer:"Hitesh OG!"
}

//course.courseInstructer => ese baar baar dot use krna make ths code tidy, so we can directly use the courseInstructure

// const {courseInstructer}=course;
// console.log(courseInstructer);

//we can destructure the object using this method
//idhar agar uska bada naam hai to uske dusra name bhi de skta hun
const {courseInstructer:tr}=course;
console.log(tr);
/////


