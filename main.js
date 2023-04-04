
window.onload = function () {
    document.documentElement.classList.add('go');
    let today = new Date();
    let dd = today.getDate();
    if(dd<10)
    {
        dd = "0" + dd;
    }
    let mm = today.getMonth() + 1;
    if(mm<10)
    {
        mm = "0" + mm; 
    }
    let yyyy = today.getFullYear();
    document.getElementById('datem').value = `${yyyy}-${mm}-${dd}`;
    let home = document.getElementById('homepage');
    let main = document.getElementById('mainpage');
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.home.style.height('--vh', `${vh}px`);
};

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit


let k=0;
function togglemode(){
    if(k==0)
    {
        k++;
        document.getElementById("toggle").innerHTML = "COMP B";

            document.getElementById('theory1').value = 4;
            document.getElementById('theory2').value = 2;
            document.getElementById('theory3').value = 4;
            document.getElementById('theory4').value = 4;
            document.getElementById('theory5').value = 2;

            document.getElementById('practical1').value = 1;
            document.getElementById('practical2').value = 2;
            document.getElementById('practical3').value = 1;
            document.getElementById('practical4').value = 1;
            document.getElementById('practical5').value = 2;
    }
    else if(k==1)
    {
        k++;
        document.getElementById("toggle").innerHTML = "AIDS C";

            document.getElementById('theory1').value = 4;
            document.getElementById('theory2').value = 4;
            document.getElementById('theory3').value = 4;
            document.getElementById('theory4').value = 4;
            document.getElementById('theory5').value = 4;

            document.getElementById('practical1').value = 2;
            document.getElementById('practical2').value = 2;
            document.getElementById('practical3').value = 1;
            document.getElementById('practical4').value = 1;
            document.getElementById('practical5').value = 1;
    }
    else if(k==2)
    {
        k++;
        document.getElementById("toggle").innerHTML = "IT D";

            document.getElementById('theory1').value = 4;
            document.getElementById('theory2').value = 4;
            document.getElementById('theory3').value = 2;
            document.getElementById('theory4').value = 3;
            document.getElementById('theory5').value = 3;

            document.getElementById('practical1').value = 1;
            document.getElementById('practical2').value = 2;
            document.getElementById('practical3').value = 1;
            document.getElementById('practical4').value = 2;
            document.getElementById('practical5').value = 2;
    }
    else if(k==3)
    {
        k++;
        document.getElementById("toggle").innerHTML = "EXTC E";

            document.getElementById('theory1').value = 4;
            document.getElementById('theory2').value = 4;
            document.getElementById('theory3').value = 2;
            document.getElementById('theory4').value = 3;
            document.getElementById('theory5').value = 4;

            document.getElementById('practical1').value = 2;
            document.getElementById('practical2').value = 2;
            document.getElementById('practical3').value = 2;
            document.getElementById('practical4').value = 1;
            document.getElementById('practical5').value = 0;
    }

    else if(k==4)
    {
        k=0;
        document.getElementById("toggle").innerHTML = "COMP A";

            document.getElementById('theory1').value = 2;
            document.getElementById('theory2').value = 4;
            document.getElementById('theory3').value = 3;
            document.getElementById('theory4').value = 4;
            document.getElementById('theory5').value = 3;

            document.getElementById('practical1').value = 3;
            document.getElementById('practical2').value = 2;
            document.getElementById('practical3').value = 1;
            document.getElementById('practical4').value = 2;
            document.getElementById('practical5').value = 0;
    }
}

function test(){
    // document.getElementById('result').style.opacity = 1;
    // document.getElementById('result').style.transition = '0.2s ease-out';
    let tattendance = Number(document.getElementById('theory').value);
    let pattendance = Number(document.getElementById('practical').value);
    let dates = new Date(document.getElementById('dates').value);
    let datem = new Date(document.getElementById('datem').value);
    let datee = new Date(document.getElementById('datee').value);

    const t = [
        Number(document.getElementById('theory1').value),
        Number(document.getElementById('theory2').value),
        Number(document.getElementById('theory3').value),
        Number(document.getElementById('theory4').value),
        Number(document.getElementById('theory5').value)
    ]

    let weekt = 0;
    for(let j = 0; j < 5; j++)
    {
        weekt += t[j];
    }

    const p = [
        Number(document.getElementById('practical1').value),
        Number(document.getElementById('practical2').value),
        Number(document.getElementById('practical3').value),
        Number(document.getElementById('practical4').value),
        Number(document.getElementById('practical5').value)
    ]

    let weekp = 0;
    for(let j = 0; j < 5; j++)
    {
        weekp += p[j];  
    }

    let nweeksdone = CalculateWeeks(dates, datem);
    let nweeks = CalculateWeeks(dates, datee);

    let tlecsdone = Calculatetplecs(t, dates, datem);
    let plecsdone = Calculatetplecs(p, dates, datem);

    let tlecs = Calculatetplecs(t, dates, datee);
    let plecs = Calculatetplecs(p, dates, datee);

    let tclassattended = Math.floor(((nweeksdone*weekt + tlecsdone)*tattendance)/100);
    let pclassattended = Math.floor(((nweeksdone*weekp + plecsdone)*pattendance)/100);

    let bonus = Math.floor(Number(document.getElementById('bonus').value)/2);

    // let goal = Number(document.getElementById('goal').value);
    goal = 75;
    let totaltclass = Math.ceil((goal-bonus)*(nweeks*weekt + tlecs)/100);
    let totalpclass = Math.ceil((goal-bonus)*(nweeks*weekp + plecs)/100);

    let ttoattend = Math.ceil((totaltclass - tclassattended)/CalculateWeeksMore(datem,datee));
    let ptoattend = Math.ceil((totalpclass - pclassattended)/CalculateWeeksMore(datem,datee));
    let equivalent = Math.round(totaltclass/totalpclass*100)/100;

    document.getElementById('equivalent').innerHTML = `(1 Practical is equivalent to ${equivalent} Theory lectures)`;

    const tobj = document.getElementById("twdiv");
    const pobj = document.getElementById("pwdiv");
    
    animateValue(tobj, 1, ttoattend , 300);
    setTimeout(() => {  animateValue(pobj, 1, ptoattend , 320); }, 50);

    document.getElementById('lect').innerHTML = `Theory in a week: ${weekt}<br>Practical in a week: ${weekp}`;
    document.getElementById('resultgoal').innerHTML = `(To achieve ${goal}% attendance)`;
}    

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function Calculatetplecs(t,startDate, endDate)
{
    let day1 = startDate.getDay();
    let day2 = endDate.getDay();
    if(day1 == 6 && day2 == 0)
    {
        return 0;
    }

    if (day2 == 0 || day2 == 6)
        day2 = 5;

    let n = 0;
    do
    {
        if(day1 == 0 || day1 == 6)
            day1 = 1;

        n += t[day1 - 1];
        day1 += 1;
    }while(day1 != day2 + 1);

    return n;
}

function CalculateWeeks(startDate, endDate)
{
    if (endDate < startDate)
    return 0;

    let ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
	let date1ms = startDate.getTime();
	let date2ms = endDate.getTime();
	// Calculate the difference in milliseconds
	let difference_ms = Math.abs(date1ms - date2ms);
	// Convert back to weeks and return hole weeks
	return Math.floor(difference_ms / ONE_WEEK);
}

function CalculateWeeksMore(startDate, endDate)
{
    if (endDate < startDate)
    return 0;

    let ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
	let date1ms = startDate.getTime();
	let date2ms = endDate.getTime();
	// Calculate the difference in milliseconds
	let difference_ms = Math.abs(date1ms - date2ms);
	// Convert back to weeks and return hole weeks
	return (difference_ms / ONE_WEEK);
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }