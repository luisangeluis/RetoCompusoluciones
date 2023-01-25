import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setShowModal } from '../../store/slices/showModal.slice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Form schema
const companySchema = yup.object({
  name: yup
    .string()
    .required('Este campo es requerido')
    .max(255, 'Tu nombre debe tener menos de 255 caracteres'),
  constitutionDate: yup
    .date()
    .required('Este campo es requerido')
    .max(new Date(), 'La fecha debe ser menor a la actual'),
  companyType: yup.string().required('Este campo es requerido'),
  comments: yup.string().max(1020),
});

const FormModal = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(companySchema),
  });

  const closeModal = () => dispatch(setShowModal(false));
  const sendForm = (data) => console.log(data);
  // console.log(watch);
  return (
    <section className="form-modal position-fixed top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
      <div className="container bg-light rounded p-2 p-md-3 modal-container">
        <button
          onClick={closeModal}
          className="btn btn-outline-secondary my-2 btn-close"
        ></button>
        <form className=" modal-sm" onSubmit={handleSubmit(sendForm)}>
          {/*Name */}
          <div className="form-floating mb-3">
            <input
              className="form-control"
              placeholder="name"
              aria-describedby="name"
              {...register('name')}
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
              {...register('companyType')}
            >
              <option value="1" defaultValue>
                One
              </option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
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
            <input type="submit" className="btn btn-primary" value="submit" />
            <button onClick={closeModal} className="btn btn-secondary">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormModal;
