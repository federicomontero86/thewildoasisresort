import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ibecbsgcxpqkievpdwnt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliZWNic2djeHBxa2lldnBkd250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NzkyNDUsImV4cCI6MjAzOTE1NTI0NX0.Zqs0Er8hK79QLSZ7iQE029AYIGu10uMQE-TgqthwbQY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
