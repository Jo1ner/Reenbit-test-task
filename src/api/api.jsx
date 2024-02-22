import axios from 'axios';

const API_KEY = 'BE2Z8MU4AGASX74TSH3SA6UT6';

export async function getWeatherForecast(city, startDate, endDate) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
