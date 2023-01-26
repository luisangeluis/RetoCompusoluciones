//Dependencies
import { useSelector } from 'react-redux';
import { useState } from 'react';
//Components
import CompanyTable from './CompanyTable';
import ModalContainer from './modal/ModalContainer';

const Home = () => {
  const isShowForm = useSelector((state) => state.showModal);
  const [myAction, setMyAction] = useState();

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
