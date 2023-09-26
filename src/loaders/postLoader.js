async function postLoader(req) {
  console.log(req.params.id);
  const res = await fetch(`http://localhost:3000/posts/${req.params.id}`);
  const data = await res.json();

  console.log(data);
  return data;
}

export default postLoader;
