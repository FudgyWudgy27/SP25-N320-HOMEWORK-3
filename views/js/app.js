const pictures = ["https://pasa.org/wp-content/uploads/2021/06/Vervet-Monkey-Foundation-credit-Kyle-.jpg", 
                "https://media.cnn.com/api/v1/images/stellar/prod/160107100400-monkey-selfie.jpg?q=w_2912,h_1638,x_0,y_0,c_fill",
                "https://cdn.thegreatprojects.com/thegreatprojects/images/c/c/c/d/9/cccd9ab3a8832417497e233c1cb92b9e.jpg?width=364&height=364&format=jpg",
                "https://transforms.stlzoo.org/production/animals/allen-swamp-monkey-01-01.jpg?w=1200&h=1200&auto=compress%2Cformat&fit=crop&dm=1658934688&s=9e6e9237bf5037a8d0d632060a7a1a59",
                "https://www.pbs.org/wnet/nature/files/2014/10/Monkey-Main-1280x720.jpg"];

    current = 0;

function changePicture(){
    r = Math.floor(Math.random() * 5);

    if(r == current){
        changePicture();
    } else {
        document.getElementById("monkey").src = pictures[r];
        current = r;
    }
}