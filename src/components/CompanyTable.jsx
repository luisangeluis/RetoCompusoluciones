//Dependencies
import { useDispatch, useSelector } from 'react-redux';
import useGetCompanies from '../hooks/useGetCompanies';
import convertDateFormat from '../utils/convertDateFormat';
//Slices
import { setAddModal } from '../store/slices/addModal.slice';
import { setItem } from '../store/slices/setItem.slice';
import { setShowModal } from '../store/slices/showModal.slice';

const CompanyTable = () => {
  const dispatch = useDispatch();
  const [companies] = useGetCompanies();
  // const companies = useSelector(state=>state.getCompanies)

  const showModal = (modal, action, item) => {
    dispatch(setItem(item));
    dispatch(setAddModal({ modal, action }));
    dispatch(setShowModal(true));
  };
  
  return (
    <div className="table-responsive my-3 my-md-4 p-2 p-md-3 rounded-3">
      {
        companies?.length ? (
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
              {
                companies && companies.map(company => (
                  <tr className="text-center" key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.company_type.name}</td>
                    <td>{convertDateFormat(company.constitutionDate)}</td>
                    <td className="text-center d-flex flex-nowrap justify-content-center">
                      <button
                        onClick={() =>
                          showModal('DeleteModal', 'delete', company)
                        }
                        className="btn btn-danger mx-1"
                      >
                        borrar
                      </button>
                      <button
                        onClick={() =>
                          showModal('FormModal', 'update', company)
                        }
                        className="btn bg-color-three mx-1"
                      >
                        Actualizar
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        ) : (
          <h2 className='card-title'>Sin empresas...</h2>
        )
      }

    </div>
  );
};

export default CompanyTable;
