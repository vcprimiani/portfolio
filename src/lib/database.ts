import { supabase } from './supabase'

export interface UserProfile {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  bio?: string
  website?: string
  github?: string
  linkedin?: string
  created_at: string
  updated_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

// User Profile functions
export const createUserProfile = async (profile: Partial<UserProfile>) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .insert([profile])
    .select()
    .single()

  return { data, error }
}

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()

  return { data, error }
}

export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  return { data, error }
}

// Contact Message functions
export const createContactMessage = async (message: Omit<ContactMessage, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([message])
    .select()
    .single()

  return { data, error }
}

export const getContactMessages = async () => {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })

  return { data, error }
}

export const getBootcampContacts = async () => {
  const { data, error } = await supabase
    .from('bootcamp_contacts')
    .select('*')
    .order('created_at', { ascending: false })
  return { data, error }
}

export const getLandingPages = async () => {
  const { data, error } = await supabase
    .from('landing_pages')
    .select('*')
    .order('created_at', { ascending: true })
  return { data, error }
}

export const getActiveLandingPage = async () => {
  const { data, error } = await supabase
    .from('landing_pages')
    .select('*')
    .eq('is_active', true)
    .single()
  return { data, error }
}

export const setActiveLandingPage = async (slug: string) => {
  // Set all to false, then set the selected one to true
  const { error: error1 } = await supabase
    .from('landing_pages')
    .update({ is_active: false })
    .neq('slug', slug)
  const { error: error2 } = await supabase
    .from('landing_pages')
    .update({ is_active: true })
    .eq('slug', slug)
  return { error: error1 || error2 }
}

export const getUsers = async () => {
  // Get all users from the auth.users table (requires service role key in production)
  // For demo, fetch from user_profiles if available
  const { data, error } = await supabase
    .from('user_profiles')
    .select('id, email, full_name, created_at')
    .order('created_at', { ascending: false })
  return { data, error }
}

export const markContactAsContacted = async (id: string) => {
  const { error } = await supabase
    .from('bootcamp_contacts')
    .update({ contacted: true })
    .eq('id', id)
  return { error }
}

// Initialize database tables (run this once)
export const initializeDatabase = async () => {
  // This would typically be done through Supabase dashboard
  // or using migrations, but here's a reference for the table structures:

  console.log('Database tables should be created in Supabase dashboard:')
  console.log(`
    -- user_profiles table
    CREATE TABLE user_profiles (
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

    -- contact_messages table
    CREATE TABLE contact_messages (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );

    -- Enable RLS (Row Level Security)
    ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
    ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

    -- Policies for user_profiles
    CREATE POLICY "Users can view their own profile" ON user_profiles
      FOR SELECT USING (auth.uid() = id);

    CREATE POLICY "Users can update their own profile" ON user_profiles
      FOR UPDATE USING (auth.uid() = id);

    CREATE POLICY "Users can insert their own profile" ON user_profiles
      FOR INSERT WITH CHECK (auth.uid() = id);

    -- Policies for contact_messages (public insert, authenticated select)
    CREATE POLICY "Anyone can insert contact messages" ON contact_messages
      FOR INSERT WITH CHECK (true);

    CREATE POLICY "Authenticated users can view contact messages" ON contact_messages
      FOR SELECT USING (auth.role() = 'authenticated');
  `)
} 