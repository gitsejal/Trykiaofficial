function set(e)
{
    // console.log(e.target.innerHTML);
    var css = "border-radius: 10px 10px 0 0;background-color: white;box-shadow: none;"
    // var css = "border-radius: 10px 10px 0 0;background-color: white;box-shadow: none;border: 3px solid;border-color: black black white black"
    var dep = e.target.innerHTML;
    var target = document.querySelector(".vtext");
    var logo = document.querySelector(".dep-logo");
    target.innerHTML = dep;
    // console.log(logo.attributes[1]);
    logo.setAttribute("alt",dep)
    logo.setAttribute("src","img/"+dep+".png")
    // console.log(e.target.id)
    e.target.style = css;
    for(var i=1;i<=4;i++)
    {
        console.log(e.target.id.slice(4))
        if(i!=parseInt(e.target.id.slice(4)))
            document.querySelector("#dep-"+i).style="";
    }
    // logo.attributes[1] = dep;
}

window.onscroll = function() {changeNavbar()};

function changeNavbar() {
    if (document.documentElement.scrollTop > 10)
    {
        document.getElementsByClassName('navbar')[0].style.backgroundColor = `rgba(0,0,225,${document.documentElement.scrollTop/500})`;
        console.log(document.documentElement.scrollTop);
    }
    else
        document.getElementsByClassName('navbar')[0].style.backgroundColor = "";
}