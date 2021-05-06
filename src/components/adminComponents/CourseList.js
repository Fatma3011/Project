import React , {useState, useEffect} from "react";
import { deleteCourse, getCourses } from "../../services/admin.service";
import { useHistory } from "react-router-dom";  


function CourseList() {
  const history = useHistory();
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      salary: "",
    },
  ]);
  const redirectToChapter = (coursename , id) => {
    history.push(`/admin/coursechapters/${coursename}/${id}`);
  };
  //Delete Teacher 
  const handleDelete = (id) => {
    //  call to service 
    deleteCourse(id)
      .then(() => {
        console.log("teacher deleted");
      })
      .catch((error) => {
        console.log(error);
      });
    setClicked(!clicked);
  };

  //DidMount behavior
  useEffect(() => {
    //call to service
    getCourses()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clicked]);

  return (
    <div>
      <br />
      <br />
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid">
            <h1 className="mt-4">Courses List</h1>

            <br />
            <br />
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-table mr-1" />
                Data
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Topic</th>
                        <th>Created By</th>
                        <th>Language</th>
                        <th>Estimated Time</th>
                        <th>Chapters</th>
                        <th>Delete</th>

                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Title</th>
                        <th>Topic</th>
                        <th>Created By</th>
                        <th>Language</th>
                        <th>Estimated Time</th>
                        <th>Chapters</th>
                        <th>Delete</th>

                      </tr>
                    </tfoot>
                    <tbody>
                      
                      {data.map((item, index) => (
                        <tr>
                          <td>{item.title}</td>
                          <td>{item.topic}</td>
                          <td>{item.createdBy}</td>
                          <td>{item.language}</td>
                          <td>{item.estimatedTime} hours</td>
                          <td>
                            <a href="" 
                            onClick={() => redirectToChapter(item.title , item._id)}
                            >
                            <i class="far fa-folder-open"></i>
                            </a>
                          </td>

                          <td>
                            <a href="#" onClick={() => handleDelete(item._id)}>
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseList;