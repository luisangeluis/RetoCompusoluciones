//Components
import { useSelector } from 'react-redux';
import FormModal from './modal/FormModal';
import CompanyTable from './CompanyTable';

const Home = () => {
  const isShowForm = useSelector((state) => state.showModal);
  // console.log(isShowForm);
  return (
    <section className="home flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CompanyTable />
          </div>
        </div>
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
      {isShowForm && <FormModal />}
    </section>
  );
};

export default Home;
