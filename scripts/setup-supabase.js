const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://qclcxamzeqidwuysgmze.supabase.co'
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key'

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function setupDatabase() {
  console.log('🚀 Setting up Supabase database...')

  try {
    // Create user_profiles table
    console.log('📋 Creating user_profiles table...')
    const { error: profilesError } = await supabase.rpc('exec_sql', {
      sql: `
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
      `
    })

    if (profilesError) {
      console.log('⚠️  user_profiles table might already exist or need manual creation')
    } else {
      console.log('✅ user_profiles table created')
    }

    // Create contact_messages table
    console.log('📋 Creating contact_messages table...')
    const { error: messagesError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS contact_messages (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `
    })

    if (messagesError) {
      console.log('⚠️  contact_messages table might already exist or need manual creation')
    } else {
      console.log('✅ contact_messages table created')
    }

    // Enable RLS
    console.log('🔒 Enabling Row Level Security...')
    await supabase.rpc('exec_sql', {
      sql: `
        ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
        ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
      `
    })

    // Create policies for user_profiles
    console.log('📝 Creating RLS policies for user_profiles...')
    const profilePolicies = [
      `CREATE POLICY "Users can view their own profile" ON user_profiles FOR SELECT USING (auth.uid() = id);`,
      `CREATE POLICY "Users can update their own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);`,
      `CREATE POLICY "Users can insert their own profile" ON user_profiles FOR INSERT WITH CHECK (auth.uid() = id);`
    ]

    for (const policy of profilePolicies) {
      try {
        await supabase.rpc('exec_sql', { sql: policy })
      } catch (error) {
        console.log('⚠️  Policy might already exist:', policy.split('"')[1])
      }
    }

    // Create policies for contact_messages
    console.log('📝 Creating RLS policies for contact_messages...')
    const messagePolicies = [
      `CREATE POLICY "Anyone can insert contact messages" ON contact_messages FOR INSERT WITH CHECK (true);`,
      `CREATE POLICY "Authenticated users can view contact messages" ON contact_messages FOR SELECT USING (auth.role() = 'authenticated');`
    ]

    for (const policy of messagePolicies) {
      try {
        await supabase.rpc('exec_sql', { sql: policy })
      } catch (error) {
        console.log('⚠️  Policy might already exist:', policy.split('"')[1])
      }
    }

    console.log('✅ Database setup complete!')
    console.log('\n📋 Manual steps required:')
    console.log('1. Go to your Supabase dashboard')
    console.log('2. Navigate to Storage > Buckets')
    console.log('3. Create a bucket named "avatars"')
    console.log('4. Set the bucket to public')
    console.log('5. Go to Authentication > Settings')
    console.log('6. Configure your site URL and redirect URLs')
    console.log('7. (Optional) Set up Google/GitHub OAuth providers')

  } catch (error) {
    console.error('❌ Error setting up database:', error.message)
    console.log('\n📋 Manual setup required:')
    console.log('Please run these SQL commands in your Supabase SQL editor:')
    console.log(`
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

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policies for user_profiles
CREATE POLICY "Users can view their own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Policies for contact_messages
CREATE POLICY "Anyone can insert contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact messages" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');
    `)
  }
}

setupDatabase() 