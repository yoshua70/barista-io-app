<script>
	import GridCard from './GridCard.svelte';

	/**
	 * @type []grid
	 */
	export let gridList;
</script>

<div class="flex flex-col gap-8 rounded-md bg-white drop-shadow-xl p-8">
	<div class="flex flex-col gap-4">
		<h2 class="text-xl font-manrope">Active grids</h2>
		<div class="flex gap-8 italic text-gray-500">
			<p>The list of the grids you have created.</p>
		</div>
		<div class="flex gap-4 flex-wrap">
			{#each gridList as grid}
				<GridCard
					name={grid.name}
					rows={grid.rows}
					columns={grid.columns}
					description={grid.description}
					id={grid.id}
				/>
			{/each}
		</div>
	</div>
</div>
