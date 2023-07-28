# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Methos       |      Path      | Purpose      |
| :----------- | :------------: | ------------: |
| GET          |        /       |Home page      |
| GET          |  /places       | Places index page |
| POST         |  /places       | Create New Place     |
| GET          |  /places/new   | Form page fror creating a new place |
| GET          |  /places/:id   | Details about a particular place  |
| PUT          |  /places/:id   | Update a particular place|
| GET          |  /places/:id/edit  | form page for editing an existing place  |
| DELETE       |  /places/:id       | Delete a particular place |
| POST         |  /places/:id/rant  | Create a rant (comment) about a particular place  |
| DELETE       | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET          |   *             | 404 page (matches any route not defined above)|


/// This is for the place(restaurents).

Your places should have a name (string), city (string), state (string), cuisines (string) and a pic (string)