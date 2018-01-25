   /*BARCHART DATA*/
var atx = document.getElementById("myChart");
var myChart = new Chart(atx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '',
            data: [150, 200, 175, 225, 125, 260, 100],
            backgroundColor: [
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc'
            ],
            borderColor: [
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        legend: {
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
 



/*DOUGHNUT GRAPH*/
    var btx = document.getElementById("chart-area");
    var myDoughnutChart = new Chart(btx, {
    type: 'doughnut',
    data:{
                datasets: [{
                    data: [
                        5,
                        10,
                        15,
                    ],
                    backgroundColor: [
                        '#7070cc',
                        '#009BA2',
                        '#a0d6b4',
                    ],
                    label: 'Dataset 1'
                }],
                labels: [
                    'Phones',
                    'Tablets',
                    'Desktops'                   
                ]
            },
    options: {
         responsive: true,
        legend: {
            position:'right'
        },
        animation: {
                    animateScale: true,
                    animateRotate: true
                }
        
    }
});

/*LINE GRAPH */
    var ctx =document.getElementById("lineChart");
  let lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'First dataset',
            data: [750, 1300, 1000, 700, 1700, 1400, 1300 , 1800, 1600, 1900],
            backgroundColor: [
                'rgb(199,199,239)'
                
            ],
            pointBackgroundColor: ['rgb(255,255,255)'],
        }],
        labels: ['16-22', '23-29', '6-12', '13-19', '20-26','27-3','4-10','11-17','18-24', '25-31']
    },
    options: {
         responsive: true,
         legend: {
            display:false,
        },
        scales: {
            yAxes: [{
               
            }]
        }
        
    }
});

var menu = document.getElementById('menu');

menu.addEventListener("click", function(){
var menu = document.getElementById('menu');
var members = document.getElementById('member');
var dashboard = document.getElementById('dashboards');
var visits = document.getElementById('visit');
var settings = document.getElementById('setting');
var arrow = document.getElementById('arrow');
    arrow.className = "highlight";
    menu.className = "highlight";
    members.className = "highlight";
    dashboard.className = "highlight";
    visits.className = "highlight";
    settings.className = "highlight";
var menu = document.getElementById('menu');
var members = document.getElementById('members');
var dashboard = document.getElementById('dashboard');
var visits = document.getElementById('visits');
var settings = document.getElementById('settings');
var arrows = document.getElementById('arrows');
    members.style.display= 'flex';
    dashboard.style.display= 'flex';
    visits.style.display= 'flex';
    settings.style.display= 'flex';
    menu.style.display= 'flex';
    arrows.style.display= 'flex';
});


var arrow = document.getElementById('arrow');
arrow.addEventListener("click", function myFunction(){
var menu = document.getElementById('menu');
var members = document.getElementById('member');
var dashboard = document.getElementById('dashboards');
var visits = document.getElementById('visit');
var settings = document.getElementById('setting');
var arrow = document.getElementById('arrow');
    arrow.className = "";
    menu.className = "";
    members.className = "";
    dashboard.className = "";
    visits.className = "";
    settings.className = "";
var menu = document.getElementById('menu');
var members = document.getElementById('members');
var dashboard = document.getElementById('dashboard');
var visits = document.getElementById('visits');
var settings = document.getElementById('settings');
var arrows = document.getElementById('arrows');
    members.style.display= 'none';
    dashboard.style.display= 'none';
    visits.style.display= 'none';
    settings.style.display= 'none';
    menu.style.display= '';
    arrows.style.display= 'none';
});
var close = document.getElementById('close'); 
var overlay = document.getElementById('overlay');
push.addEventListener("click", function myMessage() {
    var user = document.getElementsByClassName('write')[0].value;
    var write = document.getElementsByClassName('write')[1].value;
    var link = document.getElementsByClassName('name');
    var warningMessage = document.createElement("p");
    var nodeNoUser = document.createTextNode("No User was selected");
    var nodeYes = document.createTextNode("Message Sent To " + user);
    var nodeNoMessage = document.createTextNode("No Message was written")
    var element = document.getElementById("pop_up");
    var button = document.createElement("button");
    var nodeButton = document.createTextNode("Close")
    if (user === link[0].innerText || user === link[2].innerText || user === link[4].innerText || user === link[6].innerText ){
       console.log('you got the user right');
       if (write === ""){
        console.log('you got no message');
        warningMessage.appendChild(nodeNoMessage);
        element.appendChild(warningMessage);
        button.appendChild(nodeButton);
        button.setAttribute("id", "close");
        button.setAttribute("onclick", "closed()");
        warningMessage.setAttribute("id", "message");
        element.appendChild(button);
        overlay.style.display= 'block';
                        } else {
                             console.log('you got the message right again');
                             warningMessage.appendChild(nodeYes);
                             element.appendChild(warningMessage);
                             button.appendChild(nodeButton);
                             element.appendChild(button);
                             button.setAttribute("id", "close");
                             button.setAttribute("onclick", "closed()");
                             warningMessage.setAttribute("id", "message");
                             overlay.style.display= 'block';
                             document.getElementById('warning').innerHTML="Success!";
                             document.getElementById('warning').style.background='#85db80';
                               }
    } else{
        console.log('you got it the user wrong');
        warningMessage.appendChild(nodeNoUser);
        element.appendChild(warningMessage);
        button.appendChild(nodeButton);
        button.setAttribute("id", "close");
        button.setAttribute("onclick", "closed()");
        warningMessage.setAttribute("id", "message");
        element.appendChild(button);
        overlay.style.display= 'block';
    }          
});
  
function closed(){
    overlay.style.display = 'none';
    var take = document.getElementById("close");
    var element = document.getElementById("pop_up");
    var taken = document.getElementById("message");
    element.removeChild(take);
    element.removeChild(taken);
}


