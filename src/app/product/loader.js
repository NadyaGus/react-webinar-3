async function pageLoader({ request }) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  return await getProduct({ id });
}

async function getProduct({ id }) {
  const response = await fetch(`/api/v1/articles/${id}`);
  const json = await response.json();

  return json.result;
}

export { pageLoader };
