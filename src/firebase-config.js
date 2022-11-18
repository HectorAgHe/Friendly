/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {
  apiKey: "AIzaSyAwBuzcJT7SkxEYuFfYHBA6Hm_X3xmJA4o",
  authDomain: "friendlychat-13514.firebaseapp.com",
  projectId: "friendlychat-13514",
  storageBucket: "friendlychat-13514.appspot.com",
  messagingSenderId: "949847858484",
  appId: "1:949847858484:web:b446b4919c50dfc5ab5961"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}