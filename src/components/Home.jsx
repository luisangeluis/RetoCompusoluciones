//Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//Slice
import  { getCompanies } from '../store/slices/getCompanies.slice';
//Components
import CompanyTable from './CompanyTable';
import ModalContainer from './modal/ModalContainer';
import Notification from './modal/Notification';

const Home = () => {
  const dispatch = useDispatch();
  const isShowForm = useSelector((state) => state.showModal);
  const showNotification =useSelector(state=>state.showNotification);
  const allCompanies = useSelector(state=> state.getCompanies);
  // const [companies,setCompanies] = useState();

  useEffect(()=>{
    dispatch(getCompanies())
  } ,[])
  
  return (
    <section className="home flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CompanyTable />
          </div>
        </div>
        <div className="row"></div>
      </div>
      {isShowForm && <ModalContainer />}
      {showNotification?.show ? <Notification message={showNotification.message}/>:''}
    </section>
  );
};

export default Home;
