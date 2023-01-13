# Flask Starter Template
This is a starter template for a Flask Python backend that is ready for use in development and production environments with minimal to no configuration.
## Getting Started
You will need to set up a database for this web server template. Ideally, PostgreSQL or MySQL and not SQLite. You will need to have PostgreSQL/MySQL installed in order to install and run the matching Python libraries and instantiate a `db` connection.

1. Install a RDBMS
2. Create a database
3. Install [gunicorn](https://gunicorn.org/) (G-Unit Unicorn web server by 50 Cent)
4. Install dependencies
5. Start the server

**Install your dependencies**

Remember `npm install` from Zoom lecture? No? Well yeah, that was a thing!

`pip install -r requirements.txt`

## Commands
**Start the server**

You could run `flask run` but this will not leverage a WSGI web server.

`gunicorn app:app`
#### [Flask Migrate commands](https://flask-migrate.readthedocs.io/en/latest/)
These are the commands you'll be using the most often as you develop. I recommend you verify that your database is in the exact state you expect it to be after every step with SQL until you're reasonably certain about what's happening. Then you can move to every other step. Maybe.

```
flask db --help
flask db init
flask db current
flask db upgrade
flask db downgrade
```

## Database Workflow
1. Make a change to the Model (example: add a new column/attribute)
2. Run `flask db migrate` to create a migration for this change
3. Run `flask db upgrade` to apply the change to the database
4. Made a mistake? Run `flask db downgrade` to reverse it
## App structure
