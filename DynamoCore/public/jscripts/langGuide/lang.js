function addl() {
        var url = window.location.href;
        var file = url.substring(lastIndexOf("/")+1);
        alert(file);
        var links = document.getElementsByClassName("sideLeft").getElementsByTagName("li").getElementsByTagName("a").href;
        var i;
        for(i = 0; i < links.length ; i++)  {
            if(file==links.substring(lastIndexOf("/")+1)){
                var navlist = document.getElementById("sideLeft").getElementsByTagName("li")[i];
                navlist.classList.add("vline");

            }
     }   

}