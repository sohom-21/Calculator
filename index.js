let input = document.getElementById("display").innerHTML;
console.log(String(input))
let buttons = document.querySelectorAll(".butn");
let string = ' ';
Array.from(buttons).forEach((button) => {
         button.addEventListener("click", (e) => {
                  if (e.target.innerHTML == "=") {
                           try {
                                    string = eval(string);
                           } catch (error) {
                                    string = "error";
                           }
                           
                           document.querySelector('input').value = string;
                  }
                  else if(e.target.innerHTML == "AC") {
                           string = "";
                           document.querySelector('input').value = string;
                  }
                  else if(e.target.innerHTML == "^") {
                           string = string + "**";
                           document.querySelector('input').value = string;
                  }
                  else if(e.target.innerHTML == "X") {
                           string += '*';
                           document.querySelector('input').value = string;
                  }
                  else{
                           console.log(e.target)
                           string += e.target.innerHTML;
                           console.log((string));
                           document.querySelector('input').value = string;
                  }
         })
})
