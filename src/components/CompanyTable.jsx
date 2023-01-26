//Dependencies
import { useDispatch } from 'react-redux';
//Slices
import { setAddModal } from '../store/slices/addModal.slice';
import { setItem } from '../store/slices/setItem.slice';
import { setShowModal } from '../store/slices/showModal.slice';

const CompanyTable = ({ companies }) => {
  const dispatch = useDispatch();

  const showModal = (modal, action, item) => {
    dispatch(setItem(item));
    dispatch(setAddModal({ modal, action }));
    dispatch(setShowModal(true));
  };

  return (
    <div className="table-responsive my-3 my-md-4 p-2 p-md-3 rounded-3">
      <table className="table company-table table-striped">
        <thead>
          <tr className="text-center">
            <th scope="col">Nombre</th>
            <th scope="col">Tipo de empresa</th>
            <th scope="col">Fecha de constitución</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr className="text-center">
            <th scope="row">Uno</th>
            <td>Mark</td>
            <td>Otto</td>
            <td className="text-center d-flex flex-nowrap justify-content-center">
              <button
                onClick={() =>
                  showModal('DeleteModal', 'delete', { name: 'luis' })
                }
                className="btn btn-danger mx-1"
              >
                borrar
              </button>
              <button
                onClick={() =>
                  showModal('FormModal', 'update', { name: 'luis' })
                }
                className="btn bg-color-three mx-1"
              >
                Actualizar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
