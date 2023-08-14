<script lang="ts">
	let name = '';
	let rows = 2;
	let columns = 2;
	let description = '';
</script>

<div class="flex flex-col gap-8 rounded-md bg-white drop-shadow-xl p-8">
	<div>
		<h2 class="text-xl font-manrope">Create a new grid (layout)</h2>
		<div class="flex gap-8 italic text-gray-500">
			<p>Maximum rows and columns: 10</p>
			<p>Minimum rows and columns: 1</p>
		</div>
	</div>
	<form class="flex flex-col gap-4" method="POST" action="?/createGrid">
		<div class="flex gap-8 items-center">
			<div>
				<label for="name">Name</label>
				<input
					name="name"
					id="name"
					type="text"
					bind:value={name}
					class="px-4 py-4 rounded-md bg-gray-100"
				/>
			</div>
			<div>
				<label for="rows">Rows</label>
				<input
					name="rows"
					id="rows"
					type="number"
					bind:value={rows}
					min={1}
					max={10}
					class="px-4 py-4 rounded-md bg-gray-100"
				/>
			</div>
			<div>
				<label for="columns">Columns</label>
				<input
					name="columns"
					id="columns"
					type="number"
					bind:value={columns}
					min={1}
					max={10}
					class="px-4 py-4 rounded-md bg-gray-100"
				/>
			</div>
		</div>
		<div>
			<label for="description">Description</label>
			<input
				name="description"
				id="description"
				type="text"
				bind:value={description}
				class="px-4 py-4 rounded-md bg-gray-100"
			/>
		</div>
		<button
			class="px-8 py-4 rounded-md bg-green-300 text-black w-fit font-poppins font-semibold hover:bg-green-200 transition-all duration-150"
			>Create</button
		>
	</form>
</div>
