# Supabase Setup Guide

## 🚀 Quick Setup

Your Supabase project is already configured with the following credentials:
- **Project URL**: `https://qclcxamzeqidwuysgmze.supabase.co`
- **API Key**: Already configured in `src/lib/supabase.ts`

## 📋 Manual Database Setup

### 1. Create Database Tables

Go to your Supabase dashboard → SQL Editor and run these commands:

```sql
-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  website TEXT,
  github TEXT,
  linkedin TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies for user_profiles
CREATE POLICY "Users can view their own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create RLS Policies for contact_messages
CREATE POLICY "Anyone can insert contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact messages" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');
```

### 2. Create Storage Bucket

1. Go to **Storage** → **Buckets** in your Supabase dashboard
2. Click **Create a new bucket**
3. Name it `avatars`
4. Set it to **Public**
5. Click **Create bucket**

### 3. Configure Authentication

1. Go to **Authentication** → **Settings**
2. Set your **Site URL** to your domain (or `http://localhost:5173` for development)
3. Add redirect URLs:
   - `http://localhost:5173/auth/callback`
   - `http://localhost:5173/`
   - Your production domain URLs

### 4. (Optional) Set up OAuth Providers

#### Google OAuth:
1. Go to **Authentication** → **Providers**
2. Enable **Google**
3. Add your Google OAuth credentials

#### GitHub OAuth:
1. Go to **Authentication** → **Providers**
2. Enable **GitHub**
3. Add your GitHub OAuth credentials

## 🧪 Test Your Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test authentication:
   - Click "Sign In" in the navbar
   - Try creating an account
   - Test social logins (if configured)

3. Test contact form:
   - Fill out the contact form
   - Check your Supabase dashboard → Table Editor → contact_messages

4. Test file uploads:
   - Sign in and go to your profile
   - Try uploading an avatar image

## 🔧 Troubleshooting

### Common Issues:

1. **"Table doesn't exist" errors**
   - Make sure you ran the SQL commands above
   - Check the Table Editor in your Supabase dashboard

2. **"Bucket doesn't exist" errors**
   - Create the `avatars` bucket in Storage
   - Make sure it's set to public

3. **Authentication redirect errors**
   - Check your redirect URLs in Authentication settings
   - Make sure your site URL is correct

4. **RLS policy errors**
   - Make sure Row Level Security is enabled
   - Check that all policies are created correctly

## 📱 Features Available

✅ **Authentication**
- Email/password signup and signin
- Google OAuth (if configured)
- GitHub OAuth (if configured)
- User session management

✅ **Storage**
- File uploads with drag & drop
- Avatar uploads
- Public URL generation

✅ **Database**
- Contact form message storage
- User profile management
- Secure data access with RLS

## 🚀 Next Steps

1. **Deploy your site** and update the redirect URLs
2. **Set up email templates** in Supabase dashboard
3. **Configure OAuth providers** for social login
4. **Add more storage buckets** for other file types
5. **Create additional database tables** as needed

Your Supabase integration is now ready to use! 🎉 