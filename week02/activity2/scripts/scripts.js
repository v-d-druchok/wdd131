button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        input.focus();
        const input = document.querySelector("#favchap");
        const button = document.querySelector("button");
        const list = document.querySelector("______");

        const li = document.createElement("li");

        const deleteBut = document.createElement("button");

        li.textContent = input.value;

        button.textContent = "❌";

        li.appendChild(deleteBut);

        list.appendChild(li);  
    }
});

deleteBut.addEventListener('click', function(){
    list.removeChild(li);
    input.focus();
});

input.focus();
input.value = '';