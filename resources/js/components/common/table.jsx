import React from "react";

const Table = ({ table_head, data }) => {
    return (
        <table className="rs-table">
            <thead>
                <tr>
                    {table_head
                        ? table_head.map((item, index) => {
                              return (
                                  <th key={index}>
                                      <span className="">{item.name}</span>
                                  </th>
                              );
                          })
                        : null}
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    );
};

export default Table;
