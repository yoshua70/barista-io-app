<script>
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	/**
	 * @type string
	 */
	let email;
	/**
	 * @type string
	 */
	let password;

	/**
	 * @type string | undefined
	 */
	let authenticationErrorMessage = '';

	const handleSignUp = async () => {
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});

		authenticationErrorMessage = error ? error.message : '';
	};

	const handleSignIn = async () => {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		authenticationErrorMessage = error ? error.message : '';
	};

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

<svelte:head>
	<title>Barista.io</title>
</svelte:head>

<div class="flex flex-col min-h-screen items-center justify-center w-full">
	<h1 class="text-7xl font-bold mb-4">Barista.io</h1>
	<p class="text-xl mb-8">Create a restaurant layout, and start taking orders !</p>
	<div class="flex flex-col gap-4 border-2 bg-white px-4 py-8">
		<form on:submit={handleSignUp} class="flex flex-col gap-4 w-[400px] m-auto border-gray-900">
			<div class="flex flex-col gap-2">
				<label for="email">Email</label>
				<input
					name="email"
					id="email"
					type="email"
					class="bg-gray-300 px-4 py-2"
					bind:value={email}
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label for="password">Password</label>
				<input
					name="password"
					id="password"
					type="password"
					class="bg-gray-300 px-4 py-2"
					bind:value={password}
				/>
			</div>
			<button class="px-4 py-2 bg-gray-900 text-white w-full m-auto">Sign up</button>
		</form>
		<button
			on:click={handleSignIn}
			class="px-4 py-2 bg-white text-gray-900 w-full m-auto border-2 border-gray-900"
			>Sign in</button
		>
		<button on:click={handleSignOut} class="px-4 py-2 bg-red-500 text-white w-full m-auto"
			>Sign out</button
		>

		<p>Already register ? Please log in <a href="/" class="underline text-blue-500">here.</a></p>
		<p class="text-red-500">{authenticationErrorMessage}</p>
	</div>
</div>
