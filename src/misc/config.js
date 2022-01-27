const API_BASE_URL = "https://api.tvmaze.com";

export async function apiGet(quaryString) {
  const response = await fetch(`${API_BASE_URL}${quaryString}`).then((res) =>
    res.json()
  );
  return response;
}
