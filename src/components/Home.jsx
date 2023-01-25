//Components
import { useSelector } from 'react-redux';
import FormModal from './modal/FormModal';

const Home = () => {
  const isShowForm = useSelector((state) => state.showModal);
  console.log(isShowForm);
  return (
    <section className="home flex-grow-1">
      <div className="container"></div>
      {isShowForm && <FormModal />}
    </section>
  );
};

export default Home;
