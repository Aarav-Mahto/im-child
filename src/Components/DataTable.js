import React from "react";
import "./DataTable.css";

const DataTable = ({tableData}) => {

    console.log("Table Data:", tableData);
    const headerData = tableData[0] ? Object.keys(tableData[0]) : [];
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            {headerData.map((header, index) => (
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
              {header}
            </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
              <td key={index} style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                {value}
              </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;