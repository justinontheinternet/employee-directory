#####
NOTES:
Anything in the client folder is sent to the browser.
Anything in the server folder will only be on the server.
  If you console.log in here, it will show up on the server console log
Anything in the imports folder is shared between the client and the server and exists on our database. Code in here is run before anything in client or server.

By default, Meteor sends all info from the database to the client. To stop this default activity, we do:
  > meteor remove autopublish

When accessing info:
  The server defines publications.
  The client defines subscriptions.
#####