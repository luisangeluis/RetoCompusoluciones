//Dependencies
import { useDispatch } from 'react-redux';
//Slices
import { setShowModal } from '../../store/slices/showModal.slice';

const DeleteModal = ({ action }) => {
  const closeModal = () => useDispatch(setShowModal(false));

  const deleteItem = () => {
    console.log('deleting');
  };

  return (
    // <section className="modal position-fixed top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
    //   <div className="container bg-color-four rounded p-2 p-md-3 modal-container">
    <article className="card p-2 p-md-3">
      <div className="card-title text-center">
        Esta seguro que desea borrar el item.
      </div>
      <div className="card-body d-flex justify-content-center align-items-center">
        <button onClick={deleteItem} className="btn bg-color-three mx-1">
          Si
        </button>
        <button onClick={closeModal} className="btn btn-secondary mx-1">
          No
        </button>
      </div>
    </article>
    //   </div>
    // </section>
  );
};

export default DeleteModal;
