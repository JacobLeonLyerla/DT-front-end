const importAll = (r) => {
    const images = {};
    const keys = r.keys();
    const values = r.keys().map(r);
    for (let i = 0; i < keys.length; i++) {
      images[keys[i].match(/\.\/([a-zA-Z]+)/i)[1]] = values[i];
    }
    return images;
  }
  const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
  export default images;