async function pageLoader() {
  const response = await fetch('/api/v1/articles/?limit=*');
  const json = await response.json();

  return json.result.items.length;
}

export { pageLoader };
