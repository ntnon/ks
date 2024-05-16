/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=60.397076&longitude=5.324383&current=temperature_2m,is_day,weather_code&forecast_days=1`);

    const fres = await fetch(` https://gist.githubusercontent.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c/raw/76b0cb0ef0bfd8a2ec988aa54e30ecd1b483495d/descriptions.json`);


    const item = await res.json();
    const weather = await fres.json()

    return { item, weather };
}