import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hnbgvpejvpcjxuduldim.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuYmd2cGVqdnBjanh1ZHVsZGltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MzExMDUsImV4cCI6MjA3OTMwNzEwNX0.NYtmksjSPXqM-17Oad4pBhFJDmaCywZC2kLFINVcmKo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
