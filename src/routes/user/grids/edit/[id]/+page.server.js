import { error, fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
  const {data, error} = await locals.supabase.from('grid').select(`name, rows, columns, description, id`).filter("id", "eq", Number(params.id))

  if (!error) {
    return {
      grid: data
    };
  }
  
  throw fail(404, {message: 'Grid not found'})
}