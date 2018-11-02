

/*BARCHART DATA*/
var atx = document.getElementById("myChart");
var myChart = new Chart(atx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '',
            data: [160, 200, 175, 255, 185, 290, 100],
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



//Selecting Icons 

var menu      = document.getElementById('menu'),
members   = document.getElementById('member'),
dashboard = document.getElementById('dashboards'),
visits    = document.getElementById('visit'),
settings  = document.getElementById('setting'),
arrow     = document.getElementById('arrow'),
user            = document.getElementsByClassName('write')[0].value,
write           = document.getElementsByClassName('write')[1].value,
link            = document.getElementsByClassName('name'),
warningMessage  = document.createElement("p"),
nodeNoUser      = document.createTextNode("No User was selected"),
nodeYes         = document.createTextNode("Message Sent To " + user),
nodeNoMessage   = document.createTextNode("No Message was written"),
element         = document.getElementById("pop_up"),
button          = document.createElement("button"),
nodeButton      = document.createTextNode("Close"),
close           = document.getElementById('close'), 
overlay         = document.getElementById('overlay');

//Open Nav Menu

function openMenu(){
    arrow.className     = "flex highlight";
    menu.className      = "flex highlight";
    members.className   = "flex highlight";
    dashboard.className = "flex highlight";
    visits.className    = "flex highlight";
    settings.className  = "flex highlight";
}

//Closes Nav Menu

function closeMenu(){
    arrow.className     = "none";
    menu.className      = "none";
    members.className   = "none";
    dashboard.className = "none";
    visits.className    = "none";
    settings.className  = "none";
}

function myMessage() {
    if (user !== ""){
        if (write !== ""){
                warningMessage.appendChild(nodeYes);
                element.appendChild(warningMessage);
                button.appendChild(nodeButton);
                button.setAttribute("id", "close");
                button.setAttribute("onclick", "closed()");
                warningMessage.setAttribute("id", "message");
                element.appendChild(button);
                overlay.style.display= 'block';
                document.getElementById('warning').innerHTML="Success!";
                document.getElementById('warning').style.background='#85db80';
                } else {
                    warningMessage.appendChild(nodeNoMessage);
                    element.appendChild(warningMessage);
                    element.appendChild(button);
                    button.appendChild(nodeButton);
                    button.setAttribute("id", "close");
                    button.setAttribute("onclick", "closed()");
                    warningMessage.setAttribute("id", "message");
                    overlay.style.display= 'block';
                    
                               }
    }else{
        warningMessage.appendChild(nodeNoUser);
        element.appendChild(warningMessage);
        element.appendChild(button);
        button.appendChild(nodeButton);
        button.setAttribute("id", "close");
        button.setAttribute("onclick", "closed()");
        warningMessage.setAttribute("id", "message");
        overlay.style.display= 'block';
    }
    }       

  //Closes Modal 
function closed(){
    overlay.style.display = 'none';
    var take = document.getElementById("close");
    var element = document.getElementById("pop_up");
    var taken = document.getElementById("message");
    element.removeChild(take);
    element.removeChild(taken);
}





