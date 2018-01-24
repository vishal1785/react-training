
import React from 'react';
import CourseComponent from './course.component.js'

export default class CourseListComponent extends React.Component {

    constructor(){
        super();
        
        //this.course1 = {name:"Rahul", last:"Sharma", price:15000}
        //this.course2 = {name:"Vishal", last:"Patel", price:20000}

        this.coursesList = [
            {name:"Rahul", last:"Sharma", price:10000},
            {name:"Vishal", last:"Patel", price:25000},
            {name:"Raman", last:"Raghav", price:35000}
        ];
    }

    render(){
        // this is via passing the whole object as a prop to the component
        /*return(
            <div>
                <CourseComponent courseObj={this.course1}/>
                <CourseComponent courseObj={this.course2}/>
            </div>
        );*/

        // this is passing an array of courses to create multiple components
        var listOfCoursesComponent = this.coursesList.map(function(course,index){
                return <CourseComponent courseObj={course} index={index+1} key={index}/>
        });

        return(
            <div>
                <CourseComponent />
                { listOfCoursesComponent }
            </div>
        );
    }
}