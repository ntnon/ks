/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=60.397076&longitude=5.324383&current=temperature_2m,is_day,weather_code&forecast_days=1`);
    const item = await res.json();

    return { item };
}