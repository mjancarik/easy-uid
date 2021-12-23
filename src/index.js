export default function () {
  return (
    Date.now().toString(32).substring(5) +
    Math.random().toString(32).substring(2)
  );
}
