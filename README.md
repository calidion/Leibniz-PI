# Leibniz-PI

Javascript implementation for π.

## Install


```
npm install leibniz-pi --save
```

## Usage

```
import {Pie} from "leibniz-pi";

const Pie = require("leibniz-pi").Pie;

const pi = new Pie(8 /* precision */);
pi.generate();   //3.141592663589793

```


## Testing

This project usings [mocha](http://visionmedia.github.io/mocha/) for unit testing. Install mocha:

- `$ npm install -g mocha`

To compile and test run:

-  `$ npm test`

## Troubleshooting & Useful Tools

_Examples of common tasks_

> e.g.
> 
> - How to make curl requests while authenticated via oauth.
> - How to monitor background jobs.
> - How to run the app through a proxy.

## License

MIT