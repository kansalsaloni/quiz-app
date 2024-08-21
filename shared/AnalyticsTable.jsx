import React from 'react';
import { useTable } from 'react-table';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { FaShare, FaTrash, FaEdit } from 'react-icons/fa';
import '../style/AnalyticsTableStyle.css'; // Import the CSS file

const AnalyticsTable = () => {
  const data = React.useMemo(
    () => [
      { quizName: 'Quiz 1', createdOn: '2024-08-01', impressions: 120 },
      { quizName: 'Quiz 2', createdOn: '2024-08-05', impressions: 150 },
      { quizName: 'Quiz 3', createdOn: '2024-08-10', impressions: 200 },    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'S.No',
        id: 'serialNo', 
        Cell: ({ row }) => row.index + 1, // Serial number starts from 1
      },
      {
        Header: 'Quiz Name',
        accessor: 'quizName',
      },
      {
        Header: 'Created On',
        accessor: 'createdOn',
      },
      {
        Header: 'Impressions',
        accessor: 'impressions',
      },
      {
        Header: '', // Empty header for icons
        id: 'actions', 
        Cell: () => (
          <div className="icons-container">
            <FaEdit className="edit-icon" />
            <FaTrash className="delete-icon" />
            <FaShare className="share-icon" />

          </div>
        ),
      },
      {
        Header: '', 
        id: 'analysis',
        Cell: () => <a href="#" className="analysis-link">Question-wise Analysis</a>,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="analytic-quiz-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AnalyticsTable;

