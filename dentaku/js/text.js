var myTotal = 0;//今の計算結果
var myInput = "";//今画面に表示している値
var myClc = "+";
var myFlg = 1;//数字の入力したら0,演算子なら1

// 数字が押された時
function myValue(myDate) {
    myFlg = 0;
    myInput += myDate; // myInputは画面表示用
    document.myForm.myLine.value = myInput; //画面に押したやつを表示する
}

function myCalculate(myDate) {


    if (myFlg == 0) { //1個前の入力が0なら数字
        myFlg = 1;
        myWork = myTotal + myClc + myInput;
        console.log(myWork);
        myTotal = eval(myWork);
        myInput = "";
        document.myForm.myLine.value = myTotal;
    }

    if (myDate == "=") {
        myTotal = 0;
        myClc = "+";
    } else {
        myClc = myDate;
    }
    
}

function myC() {
    myTotal = 0;
    myClc = "+";
    myInput = "";
    document.myForm.myLine.value = myTotal;
}