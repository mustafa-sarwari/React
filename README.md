# Employee directory

Add, edit, delete, and search employee cards. React forms use unique accessible field IDs and wait for successful API writes. The Node API validates input and stores records in SQLite per browser session.

## Run the full-stack demo

Requires Node.js 24 or newer.

```bash
npm install
npm run build
npm run start:api
```

Open http://localhost:4000. For development, run `npm start` and `npm run start:api` in separate terminals. Run `npm run test:api` and `npm run build`.

## Implementation and scope

- `server/index.cjs` defines API routes and validation.
- `server/http.cjs` provides the HTTP server, bounded JSON parsing, static-file protection, session cookies, and parameterized SQLite storage.
- `.data/` contains the local database and is ignored by Git.

The server binds to loopback. Session cookies separate browser data; they are not user accounts or cross-device login. These are local portfolio demos. Static hosting cannot run the Node API. Production deployment would require account authentication, abuse controls, and deployment configuration. No payment processing or email delivery is implemented.

## Learning context

[Mustafa Sarwari](https://github.com/mustafa-sarwari) — junior full-stack developer building practical frontend and backend skills.
