# Demo:

```
git clone https://github.com/sh-trilogy/render-data-with-JSON-endpoint
cd render-data-with-JSON-endpoint
npm i
npm start
```

This [express server](./index.js) has two endpoints:

- [`http://localhost:3000/`](http://localhost:3000/)
- [`http://localhost:3000/api/data`](http://localhost:3000/api/data)

The index renders data with Jquery based on what is served at the endpoint
[`/api/data`](http://localhost:3000/api/data).
