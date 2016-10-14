# callback-promisify
```
npm install --save callback-promisify
```

## USAGE
```
import { promisify, errorOnlyPromisify, errorRejectPromisify } from 'callback-promisify';
```

`promisify`
```
let fn = promisify(fs.readFile, fs);
fn(file).then(response => console.log(response));
```


`errorOnlyPromisify`
```
let fn = promisify(fs.readFile, fs);
fn(file).then(err => console.log(err));
```


`errorRejectPromisify`
```
let fn = promisify(fs.readFile, fs);
fn(file).then(response => console.log(response)).catch(err => console.log(err));
```

