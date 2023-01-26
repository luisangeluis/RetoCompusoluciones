const DeleteModal = ({ action, cancel }) => {
  const deleteItem = () => {
    console.log('deleting');
  };

  return (
    <article className="card p-2 p-md-3">
      <div className="card-title text-center">
        Esta seguro que desea borrar el item.
      </div>
      <div className="card-body d-flex justify-content-center align-items-center">
        <button onClick={deleteItem} className="btn bg-color-three mx-1">
          Si
        </button>
        <button onClick={cancel} className="btn btn-secondary mx-1">
          No
        </button>
      </div>
    </article>
  );
};

export default DeleteModal;
