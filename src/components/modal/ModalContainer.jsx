const ModalContainer = ({ modal, action }) => {
  return (
    <section className="modal position-fixed top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
      <div className="container bg-color-four rounded p-2 p-md-3 modal-container"></div>
    </section>
  );
};

export default ModalContainer;
