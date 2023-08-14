/**
 * Define a `Code Exchange` route.
 * It is required for the server-side auth flow implemented by
 * the SvelteKit Auth Helpers.
 * It exchanges an auth `code` for the user's `session`, which
 * is set as a cookie for future requests made to Supabase.
 */
import { redirect } from "@sveltejs/kit";

export const GET = async ({url, locals: {supabase}}) => {
    const code = url.searchParams.get('code')

    if (code) {
        await supabase.auth.exchangeCodeForSession(code)
    }

    throw redirect(303, '/')
}