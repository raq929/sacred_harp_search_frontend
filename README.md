## Sacred Harp Search
The front end of an app that allows users to search the Sacred Harp database of minutes.

[Backend](https://github.com/raq929/sacred_harp_search_backend)
[Wireframes and user stories](https://github.com/raq929/sacred_harp_search_frontend/tree/master/images/planning)
[Deploted site](http://raq929.github.io/sacred_harp_search_frontend)
[Deployed backend](https://mighty-shelf-9974.herokuapp.com/)

##How to use the app
This app searches the database of Sacred Harp minutes and returns the calls for any given caller, singing, or song. To search, simply click on the tab of what you want to search by and enter your search criteria.
At this time, searches must be *exact matches*.

As an admin, you can also use this app to add singing minutes to the database. After signing in, you can enter the name, date, and location of the singing and enter the minutes in an approved format.
Minutes from the Denson book (1991 Sacred Harp) are expected in the [standard minutes format](http://fasola.org/minutes/OnlineMinutesPDFFiles/SacredHarpMinutesOnline2014.pdf) for that book.
Minutes from Shenandoah Harmony are expected in their [approved format](http://www.shenandoahharmony.com/?wpdmdl=2213) as CSV.
Minutes from singings with multiple books are not supported at this time.
Admins can also edit the basic singing data (name, date, location), through the singing search tab. Call editing is not yet supported.


#Planning
I had an original wireframe for this project, which I ditched when I discovered Bootstrap tabs, which I thought would make my site a lot cleaner and less cluttered while keeping it to one page as directed.
I wrote a lot of user storied for this project, and kept coming back to them when I felt lost or overwhelmed by the project. They helped keep me on track. Some of them had to be ditched due to the structure of the data I was using: for instance, people's names were not first and last names, they were one whole string, and rather than go through the process of deciding how to clean up the data and implementing that change, I chose to ditch user stories that required both names. This kept me from spending too much time on user stories that were not practical for the timeframe I had.

#Technology Used

###Styling
I used Bootstrap for the styling and UI of my page. The tabs keep searches separated and easily accessible. The bootstrap styling is simple but clean.  I used a [Bootstrap tutorial](http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/) to learn about the different features of bootstrap.
I used a hero banner of a singing at the top, with a title that I tried to make easy to read.
I added the [tablesorter](http://mottie.github.io/tablesorter/docs/index.html) plugin to make my tables sortable.

###Accessibility
I tried to make my website accessible by using table summaries and names for forms and buttons.

###Handlebars
I used handlebars to make templates for all my tables. I think if I had to do this project over, I would make sure the data coming back to me had the headers and info I want, and only the headers and info I want, so that I could generalize and use one template for most of the tables.

###jQuery
jQuery is the heart of the front-end of this project. My greatest difficulty with jQuery was figuring out how to set clickhandlers for the items on the Handlebars templates; I had to wait for the new HTML to load before setting the handlers.
jQuery was used mostly to get data from forms in this project.

###AJAX
I created a lot of custom GET requests in order to get the data from various searches.

###What I learned
I learned a lot about click handlers and all of the ways they can fail to work. I solidified my understanding of AJAX requests. I learned some basic handlebars for this project, and I'm interested in learning more.

###Things I'd like to add
- Add a 'refine search' sidebar that lists options for making search data more manageble, using regular expressions
- Add sorting by date functionality (This was difficult due to dirty data)
- Parse minutes from other books
- Parse minutes from singings with multiple books
- Click to edit for admins

