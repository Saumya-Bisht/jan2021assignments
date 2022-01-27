let display = document.getElementById("display");
let indec = document.getElementsByClassName('indec');
let count = 0;
for (let operation of indec) {
    operation.addEventListener('click', function () {
        var val = this.getAttribute('data-val');
        if (val == '+') {
            count++;
            display.textContent = count+"";
        }
        else if (val == '-') {
            if (count == 0)
                return;
            count--;
            display.textContent = count+""; 
        }
        else {
            count=0;
            display.textContent = count+""; 
        }
    })
}