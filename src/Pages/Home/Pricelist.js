import React from "react"
import {useTable} from 'react-table'
import { columns, data } from './dataSource'

function Pricelist(){
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        } = useTable({
        columns,
        data,
         });
    
     return (
    
            //apply the table props
        <table {...getTableProps()}>
            <thead>
                {/* loop over the header rows */}
                {headerGroups.map(headerGroup => (
                    // apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {/* loop over the headers in each row */}
                    {headerGroup.headers.map(column => (
                        // apply the header cell props 
                    <th {...column.getHeaderProps()}>
                        {/* render the header */}
                        {column.render('Header')}</th>
                    ))}
                </tr>
                ))}
            </thead>
            {/* apply the table body props */}
            <tbody {...getTableBodyProps()}>
                {/* loop over the table rows */}
                {rows.map((row, i) => {
                    // prepare the row for display
                prepareRow(row)

                return (
                    // apply the row props
                    <tr {...row.getRowProps()}>
                        {/* loop over the row cells */}
                    {row.cells.map(cell => {
                        // apply the cell props
                        return <td {...cell.getCellProps()}>
                            {/* render the cell contents */}
                            {cell.render('Cell')}</td>
                    })}
                    </tr>
                )
                })}
            </tbody>
        </table>
        
  );
}



export default Pricelist