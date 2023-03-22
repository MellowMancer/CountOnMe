
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

function togglemode(){
    document.getElementsByClassName('.mainpage');
    const display = document.getElementById('display');
    const inputnum = document.getElementsByClassName('.inputnum');
    if(i == 0)
    {
        i++;
        mainpage.style.backgroundColor = '#eeeeee';
        mainpage.style.color = 'rgb(51,51,51)';
        display.style.backgroundColor = 'rgb(174, 50, 199)';
        display.style.color = '#ffffff';
        inputnum.style.color = '#ffffff';

    }
    else
    {
        i--;
        mainpage.style.backgroundColor = 'rgb(51,51,51)';
        mainpage.style.color = '#ffffff';
        display.style.backgroundColor = '#ffffff';
        display.style.color = 'rgb(174, 50, 199)';
    }
}

var k=0;
function test(){
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
    var nweeksrem = CalculateWeeks(datem,datee);

    var tlecsdone = Calculatetlecs(t, dates, datem);
    var plecsdone = Calculateplecs(p, dates, datem);

    var tlecsrem = Calculatetlecs(t, datem, datee);
    var plecsrem = Calculateplecs(p, datem, datee);

    var tlecs = Calculatetlecs(t, dates, datee);
    var plecs = Calculateplecs(p, dates, datee);

    var tclassattended = Math.floor(((nweeksdone*weekt + tlecsdone)*tattendance)/100);
    var pclassattended = Math.floor(((nweeksdone*weekp + plecsdone)*pattendance)/100);

    var tclassrem = nweeksrem*weekt + tlecsrem;
    var pclassrem = nweeksrem*weekp + plecsrem;

    var totaltclass = Math.ceil(3*(nweeks*weekt + tlecs)/4);
    var totalpclass = Math.ceil(3*(nweeks*weekp + plecs)/4);

    var mintmiss = (tclassrem - totaltclass + tclassattended);
    var minpmiss = (pclassrem - totalpclass + pclassattended);

    var ttoattend = Math.ceil((totaltclass - tclassattended)/CalculateWeeksMore(datem,datee));
    var ptoattend = Math.ceil((totalpclass - pclassattended)/CalculateWeeksMore(datem,datee));
    var equivalent = Math.round(totaltclass/totalpclass*100)/100;

    document.getElementById('equivalent').innerHTML = `(1 Practical is equivalent to ${equivalent} Theory lectures)`;
    document.getElementById('tdiv').innerHTML = mintmiss;
    document.getElementById('pdiv').innerHTML = minpmiss;

    document.getElementById('twdiv').innerHTML = ttoattend;
    document.getElementById('pwdiv').innerHTML = ptoattend;
}    

function Calculatetlecs(t,startDate, endDate)
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

function Calculateplecs(p,startDate, endDate)
{
    var day1 = startDate.getDay();
    var day2 = endDate.getDay();
    if(day1 == 6 && day2 == 0)
    {
        return 0;
    }

    if (day2 == 0 || day2 == 6)
        day2 = 5;

    var m = 0;
    do
    {
        if(day1 == 0 || day1 == 6)
            day1 = 1;

        m += p[day1 - 1];
        day1 += 1;
    }while(day1 != day2 + 1);

    return m;
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