//Dependencies
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
//Slice
import { removeCompany } from "../../store/slices/getCompanies.slice";

//Base url
const baseUrl = 'http://localhost:3000';

const DeleteModal = ({ action, closeModal }) => {
  const dispatch =useDispatch();
  const company = useSelector((state) => state.setItem);

  const deleteItem = (company) => {
    const id = company.id;
    console.log(company);
    // remove(id);
    dispatch(removeCompany(id));
    console.log('deleting');
    closeModal();
  };

  // const remove=(id)=>{
  //   axios.delete(`${baseUrl}/api/v1/companies/${id}`)
  //     .then(res=> console.log(res))
  //     .catch(error=>console.log(error))
  // }

  return (
    <article className="card p-2 p-md-3">
      <div className="card-title text-center">
        Esta seguro que desea borrar el item.
      </div>
      <div className="card-body d-flex justify-content-center align-items-center">
        <button onClick={()=>deleteItem(company)} className="btn bg-color-three mx-1">
          Si
        </button>
        <button onClick={closeModal} className="btn btn-secondary mx-1">
          No
        </button>
      </div>
    </article>
  );
};

export default DeleteModal;
