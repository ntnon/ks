<script lang="ts">
    /** @type {import('./$types').PageData} */
    import weatherTypes from '$lib/weatherTypes';
	export let data;
    const time = data.item.current.is_day === 1 ? "day" : "night";
    const norskTid = time === "day" ? "Dag" : "Natt";
    const weatherType = data.item.current.weather_code;
    const image = weatherTypes[1][time].image;
    const weatherDescription = weatherTypes[weatherType][time].description;
    console.log(weatherTypes[weatherType]);
</script>

<body>

<main>
	<div>{data.item.current.temperature_2m}{data.item.current_units.temperature_2m}</div>
    <div>{time}</div>
    <img src="{image}"/>
    <div>{norskTid}</div>
</main>

</body>
