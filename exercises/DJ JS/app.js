document.getElementById("box").addEventListener('mouseover',function(){ 
    this.style.backgroundColor = ("blue")

})
document.getElementById("box").addEventListener('mousedown',function(){
    this.style.backgroundColor = ("red")
})
document.getElementById("box").addEventListener('mouseup',function(){
    this.style.backgroundColor = ("yellow")
})
document.getElementById("box").addEventListener('dblclick',function(){
    this.style.backgroundColor = ("green")

})
window.addEventListener('scroll', function(){
    console.log('scrolling');
    document.getElementById("box").style.backgroundColor = ("orange")

})
