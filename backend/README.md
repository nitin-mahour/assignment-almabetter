## CRUD API in Flask

BASE_URL: https://almabetter-assignment.herokuapp.com \

<br/>
<br/>

**1. BASE_URL** endpoint serves the front-end of the application. \

<br/>

**2. BASE_URL/get (method GET)** endpoint returns all the records from database. \

response example:
```json
{
    "marks": [
        {
            "roll_no": 1001,
            "name": "John Doe",
            "maths": 90,
            "physics": 98,
            "chemistry": 89,
            "total": 277,
            "percentage": 92.3333
        }
    ]
}
```

<br/>

**3. BASE_URL/add (method POST)** endpoint adds a record in the database. \

request example (in javascript):
```js
fetch('http://localhost:5000/add', {
        method: 'POST',
        body: JSON.stringify({
            "roll_no": 1001,
            "name": "John Doe",
            "maths": 90,
            "physics": 98,
            "chemistry": 89,
            "total": 277,
            "percentage": 92.3333
        })
})
```

<br/>

**4. BASE_URL/update (method POST)** endpoint update a record in database. \

request example (in javascript):
```js
// this example updates name and percentage
fetch('http://localhost:5000/update', {
        method: 'POST',
        body: JSON.stringify({
            "roll_no": 1001,        // required
            "name": "John Doe",     // optional
            // "maths": 90,        // optional
            // "physics": 98,      // optional
            // "chemistry": 89,        // optional
            // "total": 277,       // optional
            "percentage": 92.3333       // optional
        })
})
```

<br/>

**5. BASE_URL/delete/{roll_no}** (method GET) deletes a record from the database. \

request example (in javascript):
```js
// this example deletes record with roll no 1234
fetch('http://localhost:5000/delete/1234')
```