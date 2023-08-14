import { fail } from '@sveltejs/kit';

/**
 * @type {import('./$types').Actions}
 */
export const actions = {
    createGrid: async (event) => {

        const data = await event.request.formData();

        const supabase = event.locals.supabase

        const {error} = await supabase
            .from('grid')
            .insert({
                name: data.get('name'),
                rows: data.get('rows'),
                columns: data.get('columns'),
                description: data.get('description')
            })

        if (!error) {
            return {success: true}
        }

        console.log(error)
        return fail(400, {message: error.message, incorrect: true})
    }
}