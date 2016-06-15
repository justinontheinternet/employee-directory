import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // to prevent adding more records every time the app starts, we want to add a condition that prevents it if there are any existing records
    // we query the collection to find out how many records exist
      // the .find() method takes some configuration to determine exactly what it's looking for
      // in this case, we are telling it to filter nothing. return everything.
      // .find() will not return an array (which is why we don't use .length())
      // it does not return the records
      // it returns a cursor (kind of like a bookmark that knows where to find them if we tell it to)
  const numberRecords = Employees.find({}).count();
  
  if (!numberRecords) {
    // Utilizing lodash .times() to avoid using for loop and keep code cleaner
    _.times(5000, () => {
      // destructuring pulls each type of info from helpers.createCard()
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name,
        email,
        phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('employees', function(per_page){
    // narrowing down the results to only the first 20 records with extra parameters (per_page)
    return Employees.find({}, { limit: per_page });
  });
});