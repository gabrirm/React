import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://psoybfzotmmpbgfcbtae.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzb3liZnpvdG1tcGJnZmNidGFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczODI3MjMsImV4cCI6MjAxMjk1ODcyM30.E7ttsTp2KpD7v-NXxDSZaBGS39paoYonsB4CDGBPdIo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
