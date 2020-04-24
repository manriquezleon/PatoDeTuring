function mario() {
    var num=0;
    do{
        var num = prompt('Heigth: ');
    } while (num<=0 & num>8);

    var count = num;
    var temp = 0;
    for(var i=0;i<num;i++){
        count--;
        temp++;
        var str = "";
        for (var j = 0; j < count; j++)
        {
            str=str+" ";
        }
        for(var j = 0; j < temp; j++){
            str=str+"*";
        }
        console.log(str);
    }
}
