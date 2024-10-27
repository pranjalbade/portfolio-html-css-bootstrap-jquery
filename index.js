var mode= "dark";
var url = ""
$(".toggle-mode").on("click", ()=>{
    if(mode==="dark"){
        $("html").attr("data-bs-theme", mode);
        $(".mode-img").attr("src", "./Images/moon.png");
        $(".top-header").css("background-color", "#2B3035");        
        $(".header-item").css("color", "#FFFFFF");        
        $("#hero-section").css("background-image", 'url("./Images/bg2.png")');        
        $(".contact-outer-block").css("background-color", '#FFFFFF');        
        $(".contact-para").css("color", '#212529');              
        mode = "light";
    }else{
        $("html").attr("data-bs-theme", mode);
        $(".mode-img").attr("src", "./Images/sun.png");
        $(".top-header").css("background-color", "#FFFFFF");
        $(".header-item").css("color", "#374151");
        $("#hero-section").css("background-image", 'url("./Images/bg1.jpg")'); 
        $(".contact-outer-block").css("background-color", '#212529'); 
        $(".contact-para").css("color", '#FFFFFF');     
        mode = "dark";
    }
});

