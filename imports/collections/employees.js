// Declare our collection
  // The MongoDB database is automatically created whenever we initialize and run our meteor app
import { Mongo } from 'meteor/mongo';
// Creating a new collection named 'employees' in our database
  // We don't want to use 'export default' in the case that we want to export multiple variables
export const Employees = new Mongo.Collection('employees');