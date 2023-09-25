async function homeLoader() {
  const res = await fetch('http://localhost:3000/');
  const data = await res.json();
  return data;
}

export default homeLoader;
