let ok = true;
let maybeOK = true;
if (ok) {
  console.log('OK!');
} else if (maybeOK) {
  console.log('maybe OK...');
} else {
  console.log('NO!');
}
ok = 1 === 1;
ok = 'hello' === 'hello';
ok = 1 !== 2;
ok = 1 == 1;
ok = 1 == '1';
ok = 1 === '1';
ok = 1 != '2';
console.log(ok);

const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };
const coffee3 = coffee1;
ok = coffee1 === coffee3;
ok = coffee1.name === coffee2.name;
const fruits1 = ['apple', 'banana'];
const fruits2 = ['apple', 'banana'];
ok = fruits1 === fruits2;

ok = 1 >= 1;
ok = 'a' > 'b';
ok = 'a' > 'A';
ok = 'hello';
ok = '';
ok = 20;
ok = 0;
ok = -20;
ok = 'false';
if (ok) {
  // console.log('OK!');
} else {
  console.log('NO!');
}
ok = console.log(ok);
//  and演算子のため両方が一致した場合tureそれ以外はfalse
ok = true && true;
// 論理演算子は左がtureの場合、右の値を返す。左がfalseの場合、左の値を返す。
ok = true || true;
// or演算子
ok = '' || 'hi';
// 今回の演算子は、基本的にtrusyであれば左が返されるが、左に何もない状態であると右が返される。
const userInput = '';
const userName = userInput || 'User';
// デフォを設定するときによく使われる。
console.log(userName);
