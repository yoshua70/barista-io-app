<script>
	/** @type {import('./$types').PageData} */
	export let data;

	const { grid } = data;
	const currentGrid = grid[0];
</script>

<div class="flex flex-col justify-between min-h-full">
	<div class="flex gap-4 items-center">
		<h1 class="font-manrope text-2xl font-bold">Edit</h1>
		<div class="flex justify-between items-center bg-green-200 w-full rounded-md p-4">
			<h1 class="font-manrope text-2xl font-bold">
				{currentGrid.name}
			</h1>
			<a href={`/user/grids/order/${currentGrid.id}`} class="no-underline text-gray-500"
				>Take order</a
			>
		</div>
	</div>
	<form method="POST" action="/user/grids?/deleteGrid">
		<input hidden name="id" id="id" value={currentGrid.id} />
		<button class="font-bold text-red-500 text-left">Delete</button>
	</form>
</div>
