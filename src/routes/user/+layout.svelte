<script>
</script>

<div class="grid grid-cols-6 min-h-screen">
	<div class="col-span-1 bg-gray-200 flex flex-col gap-4 p-4">
		<p><a href="/user" class="no-underline text-gray-900 uppercase font-bold">Account</a></p>
		<p><a href="/user/grids" class="no-underline text-gray-900 uppercase font-bold">Grids</a></p>
	</div>
	<div class="col-span-5 p-4">
		<slot />
	</div>
</div>
