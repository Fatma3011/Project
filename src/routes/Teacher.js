import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import NavBar from "../components/teacherComponents/Navbar";
import SideBar from "../components/teacherComponents/Sidebar";
import Profile from "../components/teacherComponents/Profile";
import Courses from "../components/teacherComponents/Courses";
import AddCourse from "../components/teacherComponents/AddCourse";
import ViewCourse from "../components/teacherComponents/ViewCourse";


function Teacher() {
  let url = useRouteMatch();

  return (
    <Router  >
<div className="sb-nav-fixed"> 
        <NavBar />

      <div id="layoutSidenav" >
          <SideBar />
         
            <Switch>
              {/* <Route path={`${url}`}   component={CourseList} /> */}
              {/* <Route path={`${url.path}/courseList`} exact component={CourseList} /> */}
              <Route path={`${url.path}/profile/`}  exact component={Profile} />
              <Route path={`${url.path}/addCourse`}  exact component={AddCourse} />
              <Route path={`${url.path}/courses`}  exact component={Courses} />
              <Route path={`${url.path}/seeCourse/:idC`}  exact component={ViewCourse} />
          

              {/* <Route path={`${url.path}/editCourse/:id`}  exact component={EditCourse} />
              <Route path={`${url.path}/viewCourse/:id`}  exact component={ViewCourse} /> */} 

            </Switch>
          
        </div>
    </div>
    </Router>
    
  );
}

export default Teacher;