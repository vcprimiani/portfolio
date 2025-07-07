import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qclcxamzeqidwuysgmze.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbGN4YW16ZXFpZHd1eXNnbXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NTE1NjAsImV4cCI6MjA2NzQyNzU2MH0.t3Mz4oiFtO00HzT08pxHDignYpRMBfFXan22yynFhwA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 