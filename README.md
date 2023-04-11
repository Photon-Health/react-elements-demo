# React Photon Elements Demo

This demonstrates a situation in which the photo client is not located at the root of the application. The redirect-uri contains a query parameter that instructs the home route to return to the application after the login process is complete.

## Run the Application

To test out the different redirect scenarios, check out these branches:

- `main` demonstrates having the `<photon-client>` not at the root domain, in this case at the route `/visits` and uses a query string strategy to redirect
- `root` demonstrates having the client at `/` and uses the property `redirect-path` to redirect to the `/visits` route

First, update the `.env` and set your `VITE_CLIENT_ID` and `VITE_ORG_ID` for your Neutron environment.

Then, install:

```
npm i
```

Run the application

```
npm run start
```
