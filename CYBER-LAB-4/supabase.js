const SUPABASE_URL = "https://supabase.com/dashboard/project/yaqcmzxiaiypybwzvkbn/settings/api-keys";
const SUPABASE_KEY = "sb_publishable_1U8DuoCXwQhVdpvylbrbow_XPVoL7mB";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
