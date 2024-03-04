import estado_ucursales from "./estado_sucursales";

function Table() {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(estado_ucursales[0]).map((x) => {
            return <th>{x}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {estado_ucursales.map((x) => {
          return (
            <tr>
              {Object.values(x).map((y) => {
                return <td>{y}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
