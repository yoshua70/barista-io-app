<script>
	/**
	 * @type string
	 */
	export let id;
	/**
	 * @type string
	 */
	export let name;

	/**
	 * @type string
	 */
	export let rows;

	/**
	 * @type string
	 */
	export let columns;

	/**
	 * @type string | undefined
	 */
	export let description;
</script>

<div class="p-4 bg-white drop-shadow-md rounded-md flex flex-col gap-4 w-[300px]">
	<h3 class="text-xl font-bold">{name}</h3>
	<div>
		<p>Columns: {columns}</p>
		<p>Rows: {rows}</p>
	</div>
	<p>Description: {description ? description : 'nothing here...'}</p>
	<a
		href={`/user/grids/order/${id}`}
		class="px-8 py-4 rounded-md bg-green-300 text-black w-full text-center font-poppins font-semibold hover:bg-green-200 transition-all duration-150 no-underline"
		>Take order</a
	>
	<a
		href={`/user/grids/edit/${id}`}
		class="px-8 py-4 rounded-md bg-gray-300 text-black w-full text-center font-poppins font-semibold hover:bg-gray-200 transition-all duration-150 no-underline"
		>Edit</a
	>
</div>
