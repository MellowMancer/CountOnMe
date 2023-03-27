
window.onload = function () {
    document.documentElement.classList.add('go');
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    if(mm<10)
    {
        mm = "0" + mm; 
    }
    let yyyy = today.getFullYear();
    document.getElementById('datem').value = `${yyyy}-${mm}-${dd}`;
};

var i=0;

// function togglemode(){
//     document.getElementsByClassName('.mainpage');
//     const display = document.getElementById('display');
//     const inputnum = document.getElementsByClassName('.inputnum');
//     if(i == 0)
//     {
//         i++;
//         mainpage.style.backgroundColor = '#eeeeee';
//         mainpage.style.color = 'rgb(51,51,51)';
//         display.style.backgroundColor = 'rgb(174, 50, 199)';
//         display.style.color = '#ffffff';
//         inputnum.style.color = '#ffffff';

//     }
//     else
//     {
//         i--;
//         mainpage.style.backgroundColor = 'rgb(51,51,51)';
//         mainpage.style.color = '#ffffff';
//         display.style.backgroundColor = '#ffffff';
//         display.style.color = 'rgb(174, 50, 199)';
//     }
// }

var k=0;
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

            document.getElementById()
            setTimeout(() => {   }, 50);
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
            document.getElementById('practical3').value = 3;
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
    var tattendance = Number(document.getElementById('theory').value);
    var pattendance = Number(document.getElementById('practical').value);
    var dates = new Date(document.getElementById('dates').value);
    var datem = new Date(document.getElementById('datem').value);
    var datee = new Date(document.getElementById('datee').value);

    const t = [
        Number(document.getElementById('theory1').value),
        Number(document.getElementById('theory2').value),
        Number(document.getElementById('theory3').value),
        Number(document.getElementById('theory4').value),
        Number(document.getElementById('theory5').value)
    ]

    var weekt = 0;
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

    var weekp = 0;
    for(let j = 0; j < 5; j++)
    {
        weekp += p[j];  
    }

    var nweeksdone = CalculateWeeks(dates, datem);
    var nweeks = CalculateWeeks(dates, datee);

    var tlecsdone = Calculatetplecs(t, dates, datem);
    var plecsdone = Calculatetplecs(p, dates, datem);

    var tlecs = Calculatetplecs(t, dates, datee);
    var plecs = Calculatetplecs(p, dates, datee);

    var tclassattended = Math.floor(((nweeksdone*weekt + tlecsdone)*tattendance)/100);
    var pclassattended = Math.floor(((nweeksdone*weekp + plecsdone)*pattendance)/100);

    var bonus = Math.floor(Number(document.getElementById('bonus').value)/2);

    var totaltclass = Math.ceil((75-bonus)*(nweeks*weekt + tlecs)/100);
    var totalpclass = Math.ceil((75-bonus)*(nweeks*weekp + plecs)/100);

    var ttoattend = Math.ceil((totaltclass - tclassattended)/CalculateWeeksMore(datem,datee));
    var ptoattend = Math.ceil((totalpclass - pclassattended)/CalculateWeeksMore(datem,datee));
    var equivalent = Math.round(totaltclass/totalpclass*100)/100;

    document.getElementById('equivalent').innerHTML = `(1 Practical is equivalent to ${equivalent} Theory lectures)`;

    const tobj = document.getElementById("twdiv");
    const pobj = document.getElementById("pwdiv");
    
    animateValue(tobj, 1, ttoattend , 300);
    setTimeout(() => {  animateValue(pobj, 1, ptoattend , 320); }, 50);

    document.getElementById('lect').innerHTML = `Theory in a week: ${weekt}<br>Practical in a week: ${weekp}`;
}    

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function Calculatetplecs(t,startDate, endDate)
{
    var day1 = startDate.getDay();
    var day2 = endDate.getDay();
    if(day1 == 6 && day2 == 0)
    {
        return 0;
    }

    if (day2 == 0 || day2 == 6)
        day2 = 5;

    var n = 0;
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

    var ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
	var date1ms = startDate.getTime();
	var date2ms = endDate.getTime();
	// Calculate the difference in milliseconds
	var difference_ms = Math.abs(date1ms - date2ms);
	// Convert back to weeks and return hole weeks
	return Math.floor(difference_ms / ONE_WEEK);
}

function CalculateWeeksMore(startDate, endDate)
{
    if (endDate < startDate)
    return 0;

    var ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
	var date1ms = startDate.getTime();
	var date2ms = endDate.getTime();
	// Calculate the difference in milliseconds
	var difference_ms = Math.abs(date1ms - date2ms);
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