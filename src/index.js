var uid =
  typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID
    : function (a, b) {
        for (
          b = a = '';
          a++ < 36;
          b +=
            ~a % 5 | ((a * 3) & 4)
              ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(
                  16
                )
              : '-'
        );

        return b;
      };

export default function easyUId() {
  return Date.now().toString(36) + '-' + uid();
}
