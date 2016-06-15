import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;
let total_cards = PER_PAGE;
// props.employees => an array of employee objects
const EmployeeList = (props) => {
  return(
    <div>
      <div className="employee-list">
        {props.employees.map(employee =>
          <EmployeeDetail employee={employee} key={employee._id} />
        )}
      </div>
      <button className="btn btn-primary" onClick={() => Meteor.subscribe('employees', total_cards += PER_PAGE)}>
        Load More...
      </button>
    </div>
  )
};
// In a React app, we get access to subscriptions by setting up a container
  // A container watches a subscription, and whenever it changes, it passes the info to a component, causing it to re-render
export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('employees', PER_PAGE);
  // return an object. Whatever we return will be sent to EmployeeList as props
    // .fetch() is what actually executes the query
    // This is only executing the search on the client side.
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);