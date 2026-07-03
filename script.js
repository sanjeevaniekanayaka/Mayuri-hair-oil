<script>
function openPopup(){
    document.getElementById("orderPopup").style.display="flex";
}

function closePopup(){
    document.getElementById("orderPopup").style.display="none";
}

window.onclick=function(e){
    const popup=document.getElementById("orderPopup");
    if(e.target===popup){
        popup.style.display="none";
    }
}
</script>