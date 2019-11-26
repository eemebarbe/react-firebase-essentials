## A fully-featured single-page app template, hosted and running in minutes. Based on Create-React-App and Firebase. Written with React-Hooks.

**Live demo at: (https://react-firebase-essentials.com)**

This is a full application template intended to provide the basic features that most online products or services need to get started, so that you can get straight into building out the important parts of your MVP without getting bogged down with the boring tasks that you've already done for a million apps before.

**Features:**

- Modern authentication UI flows have already been built out, it's as simple as plugging in your Firebase API keys. Email, Facebook and Google are all included methods.
- Mobile-ready responsive design.
- Utilizes Styled-Components, carefully using global variables that allow you to quickly and easily adjust to your tastes.
- It's built entirely with React Hooks and the new Context API. Built on top of Create-React-App.
- Requires very few dependencies. The least popular module it uses has 6.4k stars on Github.
- Basic security rules have already been written for the Firestore DB.
- Push Notifications set up out of the box, with a cloud function supplied for triggering messages.
- Dark Mode! You gotta have dark mode!

**Getting set up:** (in minutes)

1. Make sure you have the Firebase CLI installed. Create a new project in the Firebase console and **make sure** you go into project settings and choose a GCP resource location under the general tab.
2. Enable Facebook, Google, and Email/Password authentication in the Firebase console. When enabling "Email/Password", be sure to enable "Email link" as well. (OAuth with Facebook and Google will require some additional steps, outlined when you view each method in the Firebase authentication console)
3. Clone the project and `npm run setup`.
4. Select your Firebase project in the command line by using `firebase use [YOUR_PROJECT_ID]`.
5. Add your Firebase keys to `.env.development.local` and `.env.production.local`.
6. Go into `public/firebase-messaging-sw.js` and manually change the messagingSenderId, which will be the same as `REACT_APP_FIREBASE_MESSAGING_ID` in your `.env` files.
7. Run `npm run build` to create a production build of your project, and `firebase deploy`. Your application should now be hosted and ready to visit.
