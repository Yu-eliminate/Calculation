document.getElementById('point-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const a = Number(document.getElementById('a').value);      // 現在のポイント
  const b = Number(document.getElementById('b').value);      // Apple Watch価格
  const rate = Number(document.getElementById('rate').value) / 100; // %→小数
  const target = Number(document.getElementById('target').value);  // 目標ポイント

  let answer = null;

  for (let c = 0; c <= a; c++) {
    const payment = b - c;
    const bonus = Math.ceil(payment * rate);
    const final = a - c + bonus;

    if (final === target) {
      answer = c;
      break;
    }
  }

  const result = document.getElementById('result');
  if (answer !== null) {
    result.textContent = `使うべきポイントは ${answer} pt です。`;
  } else {
    result.textContent = `条件を満たすポイント使用量が見つかりませんでした。`;
  }
});
