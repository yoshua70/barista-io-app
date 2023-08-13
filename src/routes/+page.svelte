<script>
	import { supabase } from '$lib/supabase';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form
	method="POST"
	class="flex flex-col gap-4 max-w-md m-auto px-4 py-8 bg-white border-gray-900 border-2"
>
	<div class="flex flex-col gap-2">
		<label for="email">Email</label>
		<input name="email" id="email" type="email" class="bg-gray-300 px-4 py-2" />
	</div>
	<div class="flex flex-col gap-2">
		<label for="password">Password</label>
		<input name="password" id="password" type="password" class="bg-gray-300 px-4 py-2" />
	</div>
	<button class="px-4 py-2 bg-gray-900 text-white w-fit m-auto">Sign up</button>
</form>

<p>Already register ? Please log in <a href="#" class="underline text-blue-500">here.</a></p>
