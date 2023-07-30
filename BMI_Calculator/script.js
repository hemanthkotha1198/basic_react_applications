ReactDOM.render(
<div id="main-container">
    <section id="container">
    <input type="number" placeholder="Enter Weight in Kgs" id="inkg"/><br/>
    <input type="number" placeholder="Enter Height in meters" id="incm"/>  <br/>
    <button id="b1"  >Calculate</button>
    {/* <input type="button" id="b2" value=" ↺ Refresh" onClick="refresh"/> */}

    <button id="b2" type="reset" > ↺ Refresh</button>  
    </section>
    <section id="result">
    <p id="cal_bmi">Your BMI IS :</p>
    <p id="review Statement"></p>
    </section>
</div> 
,document.getElementById("data"));
function handleClick() {
        const weight=document.getElementById('inkg').value;
        const height=document.getElementById('incm').value;
        const BMI=weight/(height*height);
        document.getElementById("cal_bmi").innerHTML = BMI;
    }


        const button = document.getElementById("b1");
        button.addEventListener("click", handleClick);
       const refreshButton = document.getElementById("b2");

        // Add a click event listener to the button
        refreshButton.addEventListener("click", () => {
            // Refresh the page when the button is clicked
            location.reload();
        });
