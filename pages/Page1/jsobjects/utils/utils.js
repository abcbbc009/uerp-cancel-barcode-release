export default {
  beautify: (obj) => {
    return Object.entries(obj)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
  }
}