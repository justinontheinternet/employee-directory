import React from 'react';
// ES6 assigns employee prop to 'employee' to make code cleaner (won't have to write 'props.employee.whatever')
const EmployeeDetail = ({ employee }) => {
  // further destructure so we don't have to write employee.whatever
  const { name, email, phone, avatar } = employee;

  return (
    <div className="thumbnail">
      <img src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetail;