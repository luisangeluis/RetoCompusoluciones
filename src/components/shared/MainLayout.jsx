import { Outlet } from 'react-router-dom';
//Components
import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
