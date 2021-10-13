var checkbox = document.getElementsByClassName("checkbox")
document.onclick = function(event){
    if(event.target.classList == "navigation" || event.target.classList == "nav-mini"){
        checkbox[0].click()
    }
    else{
        if(checkbox[0].checked){
            checkbox[0].click()
        }
    }
}
setInterval(() => {
    document.onmouseover = function(e){
            
                if(e.target.id == "scroll-btn"){
                    document.getElementById('scroll-btn').style.opacity="1"
                }
                else{
                    setTimeout(() => {
                            document.getElementById('scroll-btn').style.opacity="0"
                    }, 5000);
                }
            }
    prev_pos = window.pageYOffset
    document.onscroll = function(){
        cur_pos = window.pageYOffset
        if(prev_pos < cur_pos){
            document.getElementById('scroll-btn').style.opacity="0"
            
            }
        else{
            document.getElementById('scroll-btn').style.opacity="1"
            setTimeout(()=>{
                var none = 0
            },5000)
        }
    }
    }, 100);