<script>
	import { redirect } from '@sveltejs/kit';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

<div class="grid grid-cols-6 min-h-screen">
	<div class="col-span-1 bg-gray-200 flex flex-col gap-4 p-4 font-poppins justify-between">
		<div class="flex flex-col gap-4">
			<p><a href="/user" class="no-underline text-gray-900 font-bold">Account</a></p>
			<p><a href="/user/grids" class="no-underline text-gray-900 font-bold">Grids</a></p>
		</div>
		<button class="font-bold text-red-500 text-left" on:click={handleSignOut}>Sign out</button>
	</div>
	<div class="col-span-5 p-4">
		<slot />
	</div>
</div>
