import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../componenets/Footer/Footer'
import NavBar from '../componenets/NavBar/NavBar'

const defaultTitle = 'Course Platform';

const routeTitles = {
  '/': 'Home',
  '/courses': 'Browse Courses',
  '/about': 'About',
  '/contact': 'Contact',
};

function RouteTitleHandler() {
     
  const location = useLocation();

  useEffect(() => {
    let pageTitle = routeTitles[location.pathname];

     if(location.pathname.startsWith('/courses/')) {
      pageTitle = 'Course Details';
     }
    document.title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  }, [location.pathname]);

  return null;
}

export default function Layout() {
  return (
    <>
    <RouteTitleHandler />
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
