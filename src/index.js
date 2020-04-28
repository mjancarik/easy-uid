export default function easyUId(a, b) {
  for (
    b = a = '';
    a++ < 36;
    b +=
      ~a % 5 | ((a * 3) & 4)
        ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16)
        : '-'
  );
  return (new Date()).getTime().toString(36) + '-' + b;
}
