/**
 * Define a load function to get data for the layout
 * on the server-side.
 * Make the session available accross the UI by sending
 * the session to the client.
 */

export const load = async ({locals: {getSession}}) => {
    return {
        session: await getSession()
    }
}