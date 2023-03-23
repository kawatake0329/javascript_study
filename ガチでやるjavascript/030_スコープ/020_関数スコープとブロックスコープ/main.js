function a() {
    let b = 0;
    console.log(b);
}
a();

if(true) {
    var c = 1;

    var d =function() {
        console.log('d is called');
    }
}
// 関数宣言ではブロックスコープを貫通してしまう。constを使うことで作動させることが出来る。
d();
console.log(c);
// varを使うとブロックスコープを貫通するので予期せぬ動作をしてしまうため非推奨