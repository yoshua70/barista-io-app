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
	<div class="flex flex-col gap-4 rounded-md border-2 bg-white px-8 py-12">
		<form on:submit={handleSignUp} class="flex flex-col gap-4 w-[400px] m-auto border-gray-900">
			<div class="flex flex-col gap-2">
				<label for="email">Email</label>
				<input
					name="email"
					id="email"
					type="email"
					class="px-4 py-4 rounded-md bg-gray-100"
					bind:value={email}
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label for="password">Password</label>
				<input
					name="password"
					id="password"
					type="password"
					class="px-4 py-4 rounded-md bg-gray-100"
					bind:value={password}
				/>
			</div>
			<button
				class="px-4 py-4 rounded-md bg-blue-300 text-black w-full m-auto font-poppins font-semibold hover:bg-blue-200 transition-all duration-150"
				>Sign up</button
			>
		</form>
		<button
			on:click={handleSignIn}
			class="px-4 py-4 rounded-md bg-gray-300 text-black w-full m-auto font-poppins font-semibold hover:bg-gray-200 transition-all duration-150"
			>Sign in</button
		>
		<button
			on:click={handleSignOut}
			class="px-4 py-4 rounded-md bg-red-300 text-black w-full m-auto font-poppins font-semibold hover:bg-red-200 transition-all duration-150"
			>Sign out</button
		>

		<p class="text-red-500">{authenticationErrorMessage}</p>
	</div>
</div>
