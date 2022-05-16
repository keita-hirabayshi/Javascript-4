// ここでいうイベントはweb上で発生するあらゆるアクションを指す　　　（click,hoverなど）
const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

const changeColor = function(){
    this.style.color = 'red';
    // eventlisnerに登録されているdomがthisには格納されているので、使用するメソッド内で処理内容をthisを使って記述できる
    h1.style.color = 'red';
    alert('hello');
}
function changeBgColor(){
    h1.style.backgroundColor = 'green';
}
// 第一引数にイベント内容、第二引数に実行したい処理を記載する。eventlisnerでは複数のメソッドを登録できる
btn.addEventListener('click',changeColor);
btn.addEventListener('click',changeBgColor);
// 第二引数の内容は変数として別で定義しとくと、使い回せて記述するコードも少なくて済む

// btn.removeEventListener('click',hello);
// eventを解除するにはremoveを使用する

// 下記のようにしてもアクションを登録できるが１つのノードに対して１つしかメソッドは登録できないので注意
// btn.onliclick = changeBgColor;