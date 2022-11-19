/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {
  apiKey: "AIzaSyCgf1iefIUHWBOAd33bO1RZRxWV3VcY45Y",
  authDomain: "friendlychat-1f919.firebaseapp.com",
  projectId: "friendlychat-1f919",
  storageBucket: "friendlychat-1f919.appspot.com",
  messagingSenderId: "121443268441",
  appId: "1:121443268441:web:887420546d0832f0f73e48"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}