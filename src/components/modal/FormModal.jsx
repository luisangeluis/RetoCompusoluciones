//Dependencies
import { useForm } from 'react-hook-form';
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

const FormModal = ({ action, cancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(companySchema),
  });

  const sendForm = (data) => {
    console.log(data);
    if (action === 'create') console.log('creating');
    if (action === 'update') console.log('editing');
    cancel();
  };
  return (
    <>
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
          <input type="submit" className="btn bg-color-three" value="Enviar" />
          <button onClick={cancel} className="btn btn-secondary">
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormModal;
