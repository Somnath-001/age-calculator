let user_Input = document.getElementById("dob");
user_Input.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
function calculate_Age(user_input)
{
    let birthdate = new Date (user_Input.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3 = y2 - y1;
    let m3;
    if(m2>=m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    let d3;
    if(d2>=d1){
        d3 = d2-d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> and <span>${d3}</span> days old.... `;

function getDaysInMonth(year,month){
    return new Date(year, month, 0).getDate();
}

}