products = [

    {
    id : 'card-1',
    pimg : '/img/iPhone13.jpg',
    pname : "iPhone 12",
    pdesc : "The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532 * 1170 pixels",
    pprice : 52990,
    pquantity : 15
    },
    
    {
    id : 'card-2',
    pimg : '/img/iPhone13.jpg',
    pname : "iPhone 13",
    pdesc : "An all-glass front and a colorful all-glass back that's housed in a color-matched aluminum frame",
    pprice : 69900,
    pquantity : 10
    },
    
    {
    id : 'card-3',
    pimg : '/img/iPhone 14.jpg',
    pname : "iPhone 14",
    pdesc : "An updated 12-megapixel front-facing camera with an ƒ/1.9 aperture. An all-glass front and a colorful all-glass back that's housed in a color-matched aluminum frame",
    pprice : 79900,
    pquantity : 6
    },
    
    {
    id : 'card-4',
    pimg : '/img/smart-watch.jpg',
    pname : "Smart Watch",
    pdesc : "Apple Watch is the ultimate device for a healthy life. Available in three models: Apple Watch Ultra, Apple Watch Series 8 and Apple Watch SE",
    pprice : 49900,
    pquantity : 12
    },
    
    {
    id : 'card-5',
    pimg : '/img/airpods.jpg',
    pname : "Airpods Pro",
    pdesc : "AirPods Pro have been completely re-engineered for richer audio experiences. Touch control. Sweat & water resistance.",
    pprice : 22200 ,
    pquantity : "8"
    },
    
    {
    id : 'card-6',
    pimg : '/img/m2 macbook air.jpg',
    pname : "Macbook Air M2",
    pdesc : "MacBook Air — supercharged by the M2 chip — features all-day battery life and an all-new design with 13.6” Liquid Retina display and 1080p HD camera",
    pprice : 134000,
    pquantity : 9
    }

];
// let arr1 = new Array();
localStorage.setItem('products', JSON.stringify(products));

var obj = JSON.parse(localStorage.getItem(('products')));
obj.forEach(function(obj){
    document.getElementById(`${obj.id}`).addEventListener('click', 
    function(){
        
        let arr1 = new Array();
        var selectedObj;

        selectedObj = {
            pimg : `${obj.pimg}`,
            pname : `${obj.pname}`,
            pdesc : `${obj.pdesc}`,
            pprice : `${obj.pprice}`,
            pquantity : `${obj.pquantity}`
        };
        arr1.push(selectedObj)
        localStorage.setItem('selectedProduct', JSON.stringify(arr1));

    })
});
