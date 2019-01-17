Test Junior React
=================

Running the Project
-------------------

**Installation:**

First of all:

    npm install


**Client:**

To start the client:

    npm run start

The App will be accessible at http://localhost:8080


**Server:**

To start the server:

    npm run server

The server will be listening at http://localhost:3000 and serve the companies' data from http://localhost:3000/companies

A company item looks like this:

    {
        "id": 0,
        "company": "Ecolight",
        "url": "http://cognicode.com",
        "city": "Layhill",
        "picture": "http://placehold.it/2560x1080",
        "description": "Amet qui non ullamco dolor. Officia consequat esse magna occaecat deserunt anim. Do magna Lorem et excepteur.",
        "phone": "+1 (829) 538-2469"
    }

You can check all them out in `db.json`.


Requirements
------------

### Page Header

The page header should allow the users to sort by `id`, `company`, `city` or `phone`.

The initial sort value should be `id`.

Both `id` and `company` are always present in the response.

However, `city` and `phone` are optional. We can assume they are either present or missing in all of the companies. Therefore, the page header should only display them if present in the first company.

Lastly, it should be possible to download the sorted data by clicking the `DOWNLOAD` button.


### Companies List

The companies list should be able to display all `1000` companies at once without issues.

If you struggle with this, you can use the commented out code in `companies.service.js` and just explain here in the `README` some ideas you might have about possible solutions to deal with large datasets.

Each item in the companies list should display the company name (1 line max.), description (2 lines max.), picture, id (padded with `0` to fill 4 characters. E.g.: ID `1` should be displayed as `0001`), telephone and location (taking into account what we mentioned in the section above).

You might need to change and add some stuff to `vlist.styles.scss`.


### Implementation Notes

You should not change the `propTypes` of any components. That should give you some clues of what you should implement.

You should not need to write a lot of CSS as most of it it's already given to you, make sure to take a look at the existing styles before writing your own.

You should not have any ESLint errors in your code.

Feel free to restructure the code if you think some parts could be improved.

Lastly, please write down a brief description below explaining your solution and any other thing you might improve if you had more time.
