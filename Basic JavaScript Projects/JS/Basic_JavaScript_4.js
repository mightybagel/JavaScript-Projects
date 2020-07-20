function furniture(){
    var item ={
        type: "chair",
        color: "black",
        material: "wood",
        manufacturer: "Ls",
        year: 2019,
    };
    delete item.year;
    document.getElementById("Dictionary").innerHTML=item.year;
}