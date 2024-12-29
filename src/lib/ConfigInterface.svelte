<script lang="ts">
	import {writable} from "svelte/store";
	import {onMount} from "svelte";
	import {storage} from "$lib/storage";

	const SLOT = {
		IP: "operatoratorium.ip1",
		COUNT: "operatoratorium.count1"
	}

	const ipAddress = writable(storage.getItem(SLOT.IP) || "");
	const ledCount = writable(storage.getItem(SLOT.COUNT) || 1);


	onMount(() => {
		const updateSession = () => {
			storage.setItem(SLOT.IP, $ipAddress);
			storage?.setItem(SLOT.COUNT, $ledCount.toString());
		};
		ipAddress.subscribe(updateSession);
		ledCount.subscribe(updateSession);
	});

	function handleSubmit(e: SubmitEvent) {
		console.log("wtf?", e);
	}

</script>

<form
	on:submit|preventDefault={handleSubmit}
	class="space-4 max-w-md mx-auto p-6"
>
	<div class="flex flex-row">
		<div class="flex flex-auto flex-col space-y-4 p-2">
			<input
				type="text"
				bind:value={$ipAddress}
				placeholder="WLED Controller Address"
				class="w-full p-3 rounded-lg border-2 border-black-500 focus:ring-2 focus:ring-blue-500"
			/>
			<input
				type="number"
				bind:value={$ledCount}
				min="1"
				placeholder="Number of LEDs"
				class="w-full p-3 rounded-lg border-2 border-black-500 focus:ring-2 focus:ring-blue-500"
			/>
		</div>
		<button
			type="submit"
			class="flex-1 bg-red-500 hover:bg-orange-600 text-white font-bold py-2 px-4 m-2 rounded-lg shadow-md transition duration-300 transform hover:-translate-x-0.5 hover:-translate-y-0.5 w-full"
		>
			Yes, Sir
		</button>
	</div>
</form>

