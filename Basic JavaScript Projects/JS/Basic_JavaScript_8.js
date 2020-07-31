function myFunction(){
    var str_1="L";
    var str_2="I";
    var str_3="S";
    var str_4="T";
    var str_5="E";
    var str_6="N";
    var word_1=str_1.concat(str_2, str_3, str_4, str_5, str_6);
    var word_2= str_3.concat(str_2, str_1, str_5, str_6, str_4);
    var fruit=["Lychee","Orange", "Apple", "Banana"]
    var tropical = fruit.slice(0,1);
    var search_I = tropical[0].search("y");
    var num = 15.12;
    var str_num = num.toString();
    var precision = num.toPrecision(3);
    var fix = num.toFixed(5);
    var value= num.valueOf();

    document.getElementById("demo").innerHTML=word_1 +" "+word_2+" "+tropical[0].toUpperCase()+" "+search_I+" "+str_num+" "+precision+" "+fix+" "+value;
}
 