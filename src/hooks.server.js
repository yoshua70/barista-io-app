import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";

export const handle = async ({event, resolve}) => {
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event
    })

    /**
     * A little helper that is written for convenience so that instead
     * of calling `const {data: {session}} = await supabase.auth.getSession()`
     * you just call this `await getSession()`
     */
    event.locals.getSession = async () => {
        const {
            data: {session},
        } = await event.locals.supabase.auth.getSession()
        return session
    }

    /**
     * We are specifying `filterSerializedResponseHeaders` here
     * to tell SvelteKit that Supabase needs the `content-range` header.
     */
    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        }
    })
}