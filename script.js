console.log("sanish");
document.querySelector('.line').style.display='none';
document.querySelector('.picture').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.cross').style.display='inline'
        document.querySelector('.line').style.display='none'
    }else{
        document.querySelector('.cross').style.display='none'
        document.querySelector('.line').style.display='inline'
    }

})
