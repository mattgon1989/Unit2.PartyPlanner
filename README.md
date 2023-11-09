--------------requirement ---------------------------------
Requirements
Build your website according to this user story:

A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.
Next to each party in the list is a delete button. The user clicks the delete button for one of the parties. That party is then removed from the list.
There is also a form that allows the user to enter information about a new party that they want to schedule. After filling out the form and submitting it, the user observes their party added to the list of parties.



-----------------------------------------------------------
If you are stuck, try answering the following questions:

Which components can be created directly in the HTML? Which components need to be created in JavaScript?

Can you render mock data to the page?

Can you render real data to the page?

Are you able to fetch an array of all the parties from the API?

Is state correctly updated to match the data from the API?

Are you passing the correct arguments to fetch?

Does the API return an error? If so, what is the error message?

Is there an event listener on the form? Does it correctly add a new party to the list of parties?

Is there an event listener attached to each delete button? Does it correctly remove a party from the list of parties?
Extensions

If you are done early, explore the rsvps and guests endpoints of the API.

----------------- Rubric ---------------------

-	This criterion is linked to a Learning Outcome Fetch
Fetch is used correctly to GET party data from the API.

-   Fetch is used correctly to POST a new party to the API

-	This criterion is linked to a Learning Outcome Fetch
Fetch is used correctly to DELETE a party from the API.

-	This criterion is linked to a Learning Outcome Functionality
The app contains a list of the names, dates, times, locations, and descriptions of all parties.


- Functionality
Each party in the list has a delete button which removes the party when clicked.


-	This criterion is linked to a Learning Outcome Functionality
The app contains a form that allows a user to enter information about a party and add it to the list.

- 	Code Architecture
The DOM is dynamically rendered according to data stored in state.

- 	This criterion is linked to a Learning Outcome Code Architecture
The data stored in state is updated to stay in sync with the API

API link https://fsa-crud-2aa9294fe819.herokuapp.com/api/