const DeleteModal = () => {
  return (
    <section className="modal position-fixed top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
      <div className="container bg-color-four rounded p-2 p-md-3 modal-container">
        <article className="card">
          <div className="card-body">
            <button className="btn bg-color-three">Si</button>
            <button className="btn btn-secondary">No</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default DeleteModal;
