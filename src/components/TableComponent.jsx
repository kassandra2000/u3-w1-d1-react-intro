const TableComponent = (props) => {
  console.log(props);
  return (
    <table className="table mx-5 w-75">
      <thead>
        <tr className="table-primary">
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-warning">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr className="table-danger">
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr className="table-success">
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr className="table-info">
          <th scope="row">4</th>
          <td colspan="2">mary the Bird</td>
          <td>@facebook</td>
        </tr>
        <tr className="table-secondary">
          <th scope="row">5</th>
          <td colspan="2">Lana del Rey</td>
          <td>@instagram</td>
        </tr>
        <tr className="table-dark">
          <th scope="row">6</th>
          <td colspan="2">Gigi Scott</td>
          <td>@Twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
