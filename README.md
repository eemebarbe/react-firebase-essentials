## A React-Hooks based app template, built on Firebase, that did all of the boring stuff for you!

**Live demo at: (https://react-firebase-essentials.com)**

This is a full application template indended to provide the basic features that most online products or services need to get started, so that you can go straight into building out the important parts of your MVP without getting bogged down with the boring tasks that you've already done for a million apps before.

Features:

- Modern authentication UI flows have already been built out, it's as simple as plugging in your Firebase API keys. Email, Facebook and Google are all included methods.
- Basic security rules have already been written for the database.
- It's built entirely with React Hooks and the new Context API. Built on top of Create-React-App.
- Mobile-ready responsive design.
- Push Notifications set up out of the box, with a cloud function supplied for triggering messages.
- Utilizes Styled-Components, carefully using global variables that allow you to quickly and easily adjust to your tastes.
- Requires very few dependencies.
- Dark Mode! You gotta have dark mode!

Getting set up (this is probaby incomplete...still wrapping a few things up!):

- Make sure you have both Create-React-App and the Firebase CLI installed.
- Copy the contents from `.env.empty` and create an `.env.production.local` and put your Firebase credentials there. Be sure to create an `.env.development.local` for working locally as well.
- Change the name in .firebaserc to your project's name.
- Enable Facebook and Google in the authentication section of the Firebase console, and include whatever credentials are necessary. Enable Email/Password authentication as well, and make sure that "Email link" is turned on as well.
- In your project settings, click on the cloud messaging tab and copy your sender ID into your .env files as well.
- Make sure you `npm run build` before deploying any changes to Firebase hosting.
