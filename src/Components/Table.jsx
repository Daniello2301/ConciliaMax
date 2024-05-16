function Table({ data }) {
  if (data.length === 0) return null;
  const rows = Object.keys(data[0]);

  const dataTable = data.map((e) => {
    if (e.valor) {
      e.valor = e.valor.split("$")[1];
    }
    return Object.values(e);
  });

  return (
    <>
      <table
        className="m-auto px-4 text-xs        
        text-left rtl:text-right text-gray-500 "
      >
        <thead className="text-xs text-gray_light uppercase bg-blue_dark">
          <tr>
            <th scope="col" className="p-4"></th>
            {rows.map((e, i) => {
              return (
                <th scope="col" className="p-4" key={i}>
                  {e}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((e, i) => {
            return (
              <>
                <tr key={i} className="bg-gray-100 border-b" >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-green_primary bg-gray-100 border-gray-300 rounded focus:ring-green_primary  focus:ring-2 "
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>

                  {e.map((el, i) => {
                    return (
                      <td className="px-6 py-4" key={i}>
                        {el}
                      </td>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
