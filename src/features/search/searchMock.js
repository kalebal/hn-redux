// A mock function to mimic making an async request for data
export function fetchData(str = 'search string') {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: str }), 500)
  );
}
