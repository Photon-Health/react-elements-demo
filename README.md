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

Copy the `.template.env` file into `.env` and set your app's clientId and orgId.

Run the application

```
npm run start
```

## Batch and Iterative Flows

When running the app, you will see tabs for "Batch" and "Iterative" style flows for adding prescriptions into the `<photon-prescribe-workflow>` Element.

For this to work, update the templateIDs in `src/data/templateOverridesData.ts` with templates setup in your Neutron (i.e. staging environment) Organization.

You will also need to set the `VITE_PATIENT_ID` with a Patient ID for the Neutron environment.