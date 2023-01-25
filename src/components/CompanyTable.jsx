const CompanyTable = ({ companies }) => {
  return (
    <div className="table-responsive my-3 my-md-4">
      <table className="table company-table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo de empresa</th>
            <th scope="col">Fecha de constitución</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">Uno</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
