<script lang="ts">
	/** @type {import('./$types').PageData} */

	import weatherTypes from '$lib/weatherTypes';
	export let data;

	const time = data.item.current.is_day === 1 ? 'day' : 'night';
	const weatherType = data.item.current.weather_code;
	const image = weatherTypes[1][time].image;
</script>

<div class="bg-gradient-to-b from-ks-light to-ks h-[100dvh] flex items-center">
	<div class="max-w-max mx-auto my-auto">
		<div class="weather-card bg-slate-50 rounded-xl p-12 space-y-3">
			<h1 class="w-min mx-auto text-3xl">
				{data.item.current.temperature_2m}{data.item.current_units.temperature_2m}
			</h1>
			<img class="w-[10rem]" src={image} />
			<h2 class="w-min mx-auto text-3xl">{time === 'day' ? 'Dag' : 'Natt'}</h2>
		</div>
	</div>
</div>
