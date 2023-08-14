/**
 * Define a load function which will be run in the browser
 * and on the server-side.
 * Create a supabase client.
 * Allow us to access the supabase client by using `$page.data.supabase`
 * inside of pages or `data.supabase` when using `export let data`.
 */

import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public"
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit"

export const load = async ({fetch, data, depends}) => {
    // Tells sveltekit the load function should be executed
    // whenever `invalidate` is called to keep the page store in sync.
    depends('supabase:auth')

    // Caches the client when running in a browser environment.
    const supabase = createSupabaseLoadClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event: { fetch },
        serverSession: data.session,
      })
    
      const {
        data: { session },
      } = await supabase.auth.getSession()
    
      return { supabase, session }
}