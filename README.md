# ccd-school

This repo is a collection of small tasks from https://ccd-school.de/coding-dojo/
There is no wrapper function to choose between the tasks, 
instead you have to un-comment the function in index.ts.

## run
```bash
yarn start
```
Go to index and uncomment the function you want to be running, e.g.:
```typescript
import {charCount} from "./ccd/charCount";

const index = () => {
    charCount();
    // csv();
    // fizzbuzz();
    // console.log(rot("Hello, World"));
    // russianMultiplication(47,42)
    // console.log('running')
}
index();
```
