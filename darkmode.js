

const body = document.getElementById("maniBody");
const title = document.getElementsByTagName("h1");

if(localStorage.getItem("theme") === "dark"){
    body.classList.replace("bg-white","bg-gray-600");
     body.classList.replace("text-black","text-white");
    title[0].innerText = "Dark mode Enabled"
}

function toggleTheme(){
    if(body.classList.contains("bg-white")){
        body.classList.replace("bg-white","bg-gray-600");
          body.classList.replace("text-black","text-white");
          localStorage.setItem("theme","dark");
          title[0].innerText = "Dark mode Enabled"

    }
    else{
        body.classList.replace("bg-gray-600","bg-white");
          body.classList.replace("text-white","text-black");
          localStorage.setItem("theme","light");
          title[0].innerText = "Light mode Enabled"
    }

}
