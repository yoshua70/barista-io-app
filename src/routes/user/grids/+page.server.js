import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import { fail } from '@sveltejs/kit';

/**
 * @type {import('./$types').Actions}
 */
export const actions = {
    createGrid: async (event) => {

        const data = await event.request.formData();

        const supabase = event.locals.supabase

        const session = await event.locals.getSession()

        if (!session) {
            throw fail(403, {message: 'Unauthorized'})
        }

        const {error} = await supabase
            .from('grid')
            .insert({
                name: data.get('name'),
                rows: data.get('rows'),
                columns: data.get('columns'),
                description: data.get('description'),
                user_id: session.user.id
            })

        if (!error) {
            return {success: true}
        }

        console.log(error)
        return fail(400, {message: error.message, incorrect: true})

    }
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {

    const {data, error} = await locals.supabase.from('grid').select(`name, rows, columns, description`)

    return {
      gridList: data
    };
  }