import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as  Router , Route , Routes } from 'react-router-dom';
import UploadBlog from './Components/UploadBlog';
import ViewBlog from './Components/ViewBlog';
import ViewBook from './Components/ViewBook';
import UploadBook from './Components/UploadBook';
import UploadTest from './Components/UploadTest';
import UploadCourse from './Components/UploadCourse';
import ViewCourse from './Components/ViewCourse';
import ViewTest from './Components/ViewTest';
import QuestionPages from './Components/ViewTest';



function App() {
  return (
    <Router>
    <div className="App">
      <div className="Navbar">
      <Navbar />
      </div>
      {/* <ErrorRadios/> */}
      {/* <QuestionPag  e /> */}
      <QuestionPages />
      <div className="content_x">
      <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/upload_blog" element={<UploadBlog />} />
            <Route path="/view_blog" element={<ViewBlog />} />
            <Route path="/upload_book" element={<UploadBook />} />
            <Route path="/view_book" element={<ViewBook />} />
            <Route path="/upload_test" element={<UploadTest />} />
            <Route path="/view_test" element={<ViewTest />} />
            <Route path="/upload_course" element={<UploadCourse />} />
            <Route path="/view_course" element={<ViewCourse />} />
          </Routes>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
