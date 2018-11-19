


var number=Math.floor(Math.random()*3);

while(true)
{
    var ans=parseInt(window.prompt('数当てゲームです。0～2の整数を入力してください。'))
    var message;
    if(ans===number)
    {
        message="当たり！";
        document.getElementById('choice').textContent=message;
        break;
    }
    else if(ans<number)
    {
        message='もっと大きいです！';
    }
    else if(number<ans)
    {
        message='もっと小さいです！';
    }
    else
    {
        message="0~3の！数字を！！入力！！！してください！！！！！"
    }   

    document.getElementById('choice').textContent=message;
}
