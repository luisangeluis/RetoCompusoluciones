//Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//Slice
import { getCompanies } from '../store/slices/getCompanies.slice';
//Components
import CompanyTable from './CompanyTable';
import ModalContainer from './modal/ModalContainer';

const Home = () => {
  const dispatch = useDispatch();
  const isShowForm = useSelector((state) => state.showModal);
  const allCompanies = useSelector(state=> state.getCompanies);
  const [companies,setCompanies] = useState();
  
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
    </section>
  );
};

export default Home;
