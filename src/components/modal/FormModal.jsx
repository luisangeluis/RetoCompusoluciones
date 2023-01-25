const FormModal = () => {
  return (
    <section className="form-modal position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
      <div className="container bg-light rounded p-2 p-md-3 modal-container">
        <form className=" modal-sm">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              id="name"
              aria-describedby="name"
            />
            <label htmlFor="name">Nombre</label>
          </div>
          <div className="mb-3">
            <label htmlFor="constitution-date" className="form-label">
              Fecha de constitución
            </label>
            <input
              type="date"
              className="form-control"
              id="constitution-date"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label" id="company-type">
              Tipo de empresa
            </label>
            <br />
            <select
              id="company-type"
              className="select-company form-select-sm"
              aria-label="Select your type of company"
            >
              <option defaultValue>Select your company</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="comentarios"
              placeholder="Comentarios"
            />
            <label htmlFor="comentarios">Comentarios</label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormModal;
