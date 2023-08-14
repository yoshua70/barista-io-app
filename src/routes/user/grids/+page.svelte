<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import GridCreator from './components/GridCreator.svelte';
	import GridList from './components/GridList.svelte';
</script>

<svelte:head>
	<title>Barista.io - Grids</title>
</svelte:head>

<div class="flex flex-col gap-8">
	<h1 class="font-manrope text-2xl font-bold">Grids</h1>
	<GridCreator />
	<GridList gridList={data.gridList} />
</div>
