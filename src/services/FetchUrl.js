import { API_URL } from '../config/api';

export const fetchWebViewUrl = async () => {
  const payload = {
    system: '28900D517398D32D5967C29B7FB65D63F933E2FCABED38567F94E3951C3C2076',
    ip: '127.0.0.1',
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const json = await response.json();
    if (json.statusCode === 200 && json.data) {
      return json.data;
    } else {
    //   console.error('Invalid API response:', json);
      return null;
    }
  } catch (error) {
    // console.error('Fetch error:', error);
    return null;
  }
};
