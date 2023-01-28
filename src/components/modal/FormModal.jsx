//Dependencies
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useReducer, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Hooks
import useGetCompanyTypes from '../../hooks/useGetCompanyTypes';
import axios from 'axios';
import {getCompanies} from '../../store/slices/getCompanies.slice';
//Form schema
const companySchema = yup.object({
  name: yup
    .string()
    .required('Este campo es requerido')
    .max(255, 'Tu nombre debe tener menos de 255 caracteres'),
  constitutionDate: yup
    .date()
    .required('Este campo es requerido'),
  typeId: yup
    .string()
    .required('Este campo es requerido'),
  comments: yup.string().max(1020),
});

//Base url
const baseUrl = 'http://localhost:3000';

//Component
const FormModal = ({ action, closeModal }) => {
  const [companyTypes] = useGetCompanyTypes();
  const form = useRef();
  const company = useSelector((state) => state.setItem);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(companySchema),
  });

  useEffect(() => {
    if (action === 'update') {
      form.current.name.value = company.name;
      form.current.constitutionDate.value = company.constitutionDate;
      form.current.comments.value = company.comments;
    }
  }, []);

  const sendForm = (data) => {
    console.log(data);
    if (action === 'create') {
      console.log('creating')
      postCompany(data)
    };
    if (action === 'update') {

      editCompany(company.id,data)
    }
    closeModal();
  };

  const postCompany = (params) => {
    axios.post(`${baseUrl}/api/v1/companies`, params)
      .then(res => {
        console.log(res);
        dispatch(getCompanies());
      })
      .catch(error => console.log(error))
  }

  const editCompany=(id,params)=>{
    axios.put(`${baseUrl}/api/v1/companies/${id}`,params)
      .then(res=>{
        console.log(res);
        dispatch(getCompanies());
      })
      .catch(error=>console.log(error))
  }

  const makeSelect = (items) => {
    return (
      <>
        <option value="" defaultValue>Seleciona un valor</option>
        {items.map((item, i) => <option value={item.id} key={item.id}>{item.name}</option >)}
      </>
    )
  }
  
  return (
    <>
      <form className=" modal-sm" onSubmit={handleSubmit(sendForm)} ref={form}>
        {/*Name */}
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="name"
            aria-describedby="name"
            {...register('name')}
            autoFocus
          />
          <label htmlFor="name">Nombre</label>
          {errors.name?.message && (
            <div className="alert alert-primary my-2 p-1" role="alert">
              {errors.name.message}
            </div>
          )}
        </div>
        {/* Constitution date */}
        <div className="mb-3">
          <label htmlFor="constitutionDate" className="form-label">
            Fecha de constitución
          </label>
          <input
            type="date"
            className="form-control"
            id="constitutionDate"
            {...register('constitutionDate')}
          />
          {errors.constitutionDate?.message && (
            <div className="alert alert-primary my-2 p-1" role="alert">
              {errors.constitutionDate.message}
            </div>
          )}
        </div>
        {/* Company type */}
        <div className="mb-3">
          <label htmlFor="company-type" className="form-label">
            Tipo de empresa
          </label>
          <br />
          <select
            id="company-type"
            className="select-company form-select-sm d-block w-100"
            aria-label="Select your type of company"
            {...register('typeId')}
          >
            {
              companyTypes && makeSelect(companyTypes)
            }
          </select>
          {errors.typeId?.message && (
            <div className="alert alert-primary my-2 p-1" role="alert">
              {errors.typeId.message}
            </div>
          )}
        </div>
        {/*Comments*/}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="comentarios"
            placeholder="Comentarios"
            {...register('comments')}
          />
          <label htmlFor="comentarios">Comentarios</label>
          {errors.comments?.message && (
            <div className="alert alert-primary my-2 p-1" role="alert">
              {errors.comments.message}
            </div>
          )}
        </div>
        {/* Submit */}
        <div className="mb-3">
          <input type="submit" className="btn bg-color-three" value="Enviar" />
          <button onClick={closeModal} className="btn btn-secondary">
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormModal;
