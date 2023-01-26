//Dependencies
import { useDispatch, useSelector } from 'react-redux';
//Slices
import { setShowModal } from '../../store/slices/showModal.slice';
//Components
import FormModal from './FormModal';
import DeleteModal from './DeleteModal';

const ModalContainer = ({ modal, action }) => {
  const dispatch = useDispatch();
  const addModal = useSelector((state) => state.addModal);
  const closeModal = () => dispatch(setShowModal(false));
  // console.log(addModal);
  const makeModal = (addModal) => {
    if (addModal.modal == 'FormModal')
      return <FormModal action={`${addModal.action}`} cancel={closeModal} />;
    if (addModal.modal == 'DeleteModal')
      return <DeleteModal action={`${addModal.action}`} cancel={closeModal} />;
  };

  const onKeyPressed = (e) => {
    console.log(e.key);
  };

  return (
    <section
      className="modal position-fixed top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100"
      onKeyDown={onKeyPressed}
      tabIndex="0"
    >
      <div className="container bg-color-four rounded p-2 p-md-3 modal-container">
        <button
          onClick={closeModal}
          className="btn btn-outline-secondary my-2 btn-close"
        ></button>
        {addModal && makeModal(addModal)}
      </div>
    </section>
  );
};

export default ModalContainer;
