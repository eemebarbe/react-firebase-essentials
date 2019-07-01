## A React Hooks based app template, built on Firebase, that did all of the boring stuff for you!

**Live demo at: (https://react-firebase-essentials.com)**

This is a full application template indended to provide the basic features that most online products or services need to get started, so that you can go straight into building out the important parts of your MVP without getting bogged down with the boring tasks that you've already done for a million apps before.

**Features:**

- Modern authentication UI flows have already been built out, it's as simple as plugging in your Firebase API keys. Email, Facebook and Google are all included methods.
- Basic security rules have already been written for the database.
- It's built entirely with React Hooks and the new Context API. Built on top of Create-React-App.
- Mobile-ready responsive design.
- Push Notifications set up out of the box, with a cloud function supplied for triggering messages.
- Utilizes Styled-Components, carefully using global variables that allow you to quickly and easily adjust to your tastes.
- Requires very few dependencies.
- Dark Mode! You gotta have dark mode!

**Getting set up:** (because we're using both the Create-React-App CLI and the Firebase CLI, the order you do these really matters!)

1. Make sure you have both Create-React-App and the Firebase CLI installed. Create a new project in the Firebase console and **make sure** you go into project settings and choose a GCP resource location under the general tab.
2. Clone the project and `npm i`.
3. Set up Firebase with `firebase init`. **IMPORTANT:** When prompted, never overwrite any of the files. When asked, "What do you want to use as your public directory?", enter `build`.
4. Copy the contents from `.env_template.txt` and create an `.env.production.local` and put your Firebase keys there. Be sure to create an `.env.development.local` for working locally as well.
5. Go into `public/firebase-messaging-sw.js` and manually change the messagingSenderId, which will be the same as `REACT_APP_FIREBASE_MESSAGING_ID` in your `.env` files.
6. Enable Facebook, Google, and Email/Password authentication in the Firebase console. When enabling "Email/Password", be sure to enable "Email link" as well. (OAuth with Facebook and Google will require some additional steps, outlined when you view each method in the Firebase authentication console)
7. Run `npm run build` to create a production build of your project, and `firebase deploy`. Your application should now be hosted and ready to visit.
