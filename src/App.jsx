import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Layout from './Pages/Layout';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import CoursesLayout from './componenets/Courses/CoursesLayout';
import AddCourse from './Pages/Courses/AddCourse';
function App() {

   let Routes = createBrowserRouter([
        {  element: <Layout/>, errorElement: <NotFound/>, children:[
        {index: true , element: <Home/>},
        {path: "/courses",  element: <CoursesLayout/>, children:[
            {index: true, element: <Courses/>},
            {path: "/courses/:id", element: <CourseDetails/>},
            {path: "/courses/add", element: <AddCourse/>}
        ]
        },
        
        {path: "/about", element: <About/>},
        {path: "/contact", element: <Contact/>},
        {path: "*", element: <NotFound/>},
    ]}
]);
   
  return (
      <RouterProvider router={Routes} />
  )
  
  
}

export default App
