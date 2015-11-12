## Sacred Harp Search
The front end of an app that allows users to search the Sacred Harp database of minutes.

[Backend](https://github.com/raq929/sacred_harp_search_backend)

#Technology Used

###Styling
I used Bootstrap for the styling and UI of my page. The tabs keep searches separated and easily accessible. The bootstrap styling is simple but clean.
I used a hero banner of a singing at the top, with a title that I tried to make easy to read.
I added the [tablesorter](http://mottie.github.io/tablesorter/docs/index.html) plugin to make my tables sortable.

###Accessibility
I tried to make my website accessible by using table summaries and names for forms and buttons.

###Handlebars
I used handlebars to make templates for all my tables. I think if I had to do this project over, I would make sure the data coming back to me had the headers and info I want, and only the headers and info I want, so that I could generalize and use one template for most of the tables.
I used

###jQuery
jQuery is the heart of the front-end of this project. My greatest difficulty with jQuery was figuring out how to set clickhandlers for the items on the Handlebars templates; I had to wait for the new HTML to load before setting the handlers.
jQuery was used mostly to get data from forms in this project.

###AJAX
I created a lot of custom GET requests in order to get the data from various searches.

###Things I'd like to add
  -Use real expressions for more nuanced search functionality
  -Add a 'refine search' sidebar that lists options for making search data more manageble
  -Add sorting by date functionality (This was difficult due to dirty data)
  -Click to edit for admins



