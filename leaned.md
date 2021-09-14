# big difference with other bark-end languages

- can share code between front and back end

# import export

- 1

```javascript: people.js
const people = ['kaz', 'DHH', 'Casey', 'mr.int'];
console.log(people);
module.exports = people;
```

```javascript: modules.js
// ./ means loos for the same dir.
const importedPeople = require('./people');

console.log(importedPeople);

//output
[ 'kaz', 'DHH', 'Casey', 'mr.int' ]
[ 'kaz', 'DHH', 'Casey', 'mr.int' ]
```

- 2(export multiple things)

```javascript: people.js
const people = ['kaz', 'DHH', 'Casey', 'mr.int'];
const ages = [20, 21, 22 ];

console.log(people);
console.log(ages);

module.exports ={
    people,ages
};
```

```javascript: modules.js
const importedPeople = require('./people');
console.log(importedPeople);

//output
[ 'kaz', 'DHH', 'Casey', 'mr.int' ]
[ 20, 21, 22 ]
{ people: [ 'kaz', 'DHH', 'Casey', 'mr.int' ], ages: [ 20, 21, 22 ] }
```
