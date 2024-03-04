import React from "react";
import MaterialTable from 'material-table';


function ActividadLogList() {
    const columns= [
        { "title": "Id Sucursal", "field": "id_Sucursal", "editable": "never" },
        { "title": "01/01/2023", "field": "01/01/2023" },
        { "title": "02/01/2023", "field": "02/01/2023"},
        { "title": "03/01/2023", "field": "03/01/2023" }
    ];
  //nested data is ok, see accessorKeys in ColumnDef below
  const data = [
    {
        "id_Sucursal": 4,
        "01/01/2023": null,
        "02/01/2023": "Ingresado",
        "03/01/2023": "Ingresado"
    },
    {
        "id_Sucursal": 103,
        "01/01/2023": null,
        "02/01/2023": "Ingresado",
        "03/01/2023": "Ingresado"
    },
    {
        "id_Sucursal": 5202,
        "01/01/2023": null,
        "02/01/2023": null,
        "03/01/2023": null
    }
];

  return (<MaterialTable columns={columns} data={data} />);
}

export default ActividadLogList;
