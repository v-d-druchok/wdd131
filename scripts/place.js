const year = document.getElementById('cyear');
year.innerHTML = new Date().getFullYear();



document.getElementById('lastModified').innerHTML = `Last Modification: ${new Date(document.lastModified).toLocaleDateString(
    'en-GB', { 
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
}).replace(',', '')}`;


const temp = 7;
const windSpeed = 11;

const calculateWindChill = (t, ws) => t <= 10 &&  ws > 4.8 ? {windChill: 13.12 + 0.6215 * t - 11.37 + (0.3965 * t) * ws ** 0.16} : "N/A";

const windChill = document.getElementById('chill');

windChill.innerHTML = Math.round(calculateWindChill(temp, windSpeed).windChill * 10) / 10;