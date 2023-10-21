async function homeLoader() {
  const data = await fetch('http://localhost:3000/posts/').then(res =>
    res.json()
  );
  const { posts } = data;
  return posts.reverse();
}

export default homeLoader;
