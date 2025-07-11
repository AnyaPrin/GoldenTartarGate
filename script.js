document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault(); // フォーム送信を防ぐ

    // 回答を収集
    let score = 0;
    for (let i = 1; i <= 2; i++) { // 質問10個に拡張するなら<=10
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    }

    // タルタル度を計算（仮に2問で最大20点、10問なら100点）
    const percentage = Math.round((score / 20) * 100); // 10問なら / 100
    let message;
    if (percentage >= 80) {
        message = `あなたはタルタルですね(*´ω｀)(${percentage}%)`;
    } else if (percentage >= 50) {
        message = `なかなかタルタルですね("ω")${percentage}%)`;
    } else {
        message = `タルタルじゃないな（;´д｀）(${percentage}%)`;
    }

    // 結果を表示
    document.getElementById('score').innerText = message;
    document.getElementById('result').style.display = 'block';
    document.getElementById('quizForm').style.display = 'none';
});