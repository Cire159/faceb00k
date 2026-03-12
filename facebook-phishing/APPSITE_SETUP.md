# AppWrite Setup Guide

## How to Set Up AppWrite Online Database for Your Project

### Step 1: Create AppWrite Account
1. Go to [AppWrite Console](https://appwrite.io/console)
2. Sign up for a free account
3. Create a new project (e.g., "Cybersecurity Demo")

### Step 2: Configure Your Project
1. In AppWrite Console, select your project
2. Go to "Databases" from the left menu
3. Click "Create Database"
4. Name your database (e.g., "cybersecurity_demo")
5. Click "Create"

### Step 3: Create Collection
1. In your database, click "Create Collection"
2. Name your collection (e.g., "phishing_data")
3. Set permissions (keep default for educational use)
4. Click "Create"

### Step 4: Add Attributes
Add these attributes to your collection:
- `email` (String, Required)
- `password` (String, Required) 
- `timestamp` (String, Required)
- `ip` (String, Optional)
- `userAgent` (String, Optional)
- `location` (String, Optional)
- `sessionActive` (Boolean, Optional)
- `type` (String, Optional) - for attempts
- `createdAt` (String, Required)

### Step 5: Get Project Credentials
1. Go to "Settings" in your project
2. Copy your Project ID
3. Note your Database ID and Collection ID

### Step 6: Update Configuration
1. Open `src/appwriteDatabase.js`
2. Replace the placeholder values:
   ```javascript
   this.projectId = 'your-project-id-here';
   this.databaseId = 'your-database-id-here';
   this.collectionId = 'your-collection-id-here';
   ```

### Step 7: Add AppWrite SDK
Add this script to your `public/index.html` in the `<head>` section:
```html
<script src="https://cdn.jsdelivr.net/npm/appwrite@13.0.0"></script>
```

### Step 8: Enable CORS (if needed)
1. In AppWrite Console, go to "Settings" > "API Keys"
2. Add your domain to CORS origins (for local development: `http://localhost:3000`)

## Alternative: Use Fallback Database
If you don't want to set up AppWrite, the project includes a fallback localStorage database that works offline and demonstrates the same concepts.

## Testing Your Setup
1. Run your project: `npm start`
2. Enter test credentials
3. Check AppWrite Console > Database to see stored data
4. View statistics in your project's database info section