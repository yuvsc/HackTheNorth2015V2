var Deli = ["antipasti","ready-cooked meals","sushi","platters","cured meat","olives","salami"];

var Dairy = ["butter","cheese","milk","cream",
    "milk","sour cream","whipped cream","yogurt",'eggs'];
    
    var Seafood= ["fish","salmon","cod","bass","tuna","sole","mackerel","tilapia","trout","scallops","mussels","oysters","crab","lobster","octopus","shrimp"];
    
    var Meat = ['chicken','beef','pork','lunchmeats','bologna','bacon','sausages','turkey','ham'];
    
    var Produce = ['apples','oranges','peaches','watermelon','prunes','celery','cucumber','tomatoes','carrots','radishes','tangerines','clementines','apricots','avocado','blueberries','strawberries','raspberries','blackberries','cherries','figs','star fruit','banana','squash','grapefruit','nectarines','dragonfruit','coconuts','pears','lime','lemon','kiwi','grapes','pomelo','raisin'];

var Frozen= ['frozen vegetables','frozen meals','frozen drinks','pizza','frozen rolls'];

var Bulk= ['candy','snacks','bars','flour','rice','pasta','trail mix','nuts','seeds','dried fruits'];

var Bakery =  ['bread','baguettes','bagels','buns','rolls','cakes','cupcakes','tarts','doughnuts','sourdough']

var Snacks = ['chips','cookies','pop','soda','soft drinks','chocolate','cereal']

var limit = 30;
var counter = 1;
var inputlist = [];
var res = [];
var foodArray = []; 

function addInput(divName) {
    
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<label for='item' >Item</label> " + (counter + 1) + ": <input type='text' class='form-control' id='item' name='myInputs[]'>";
         document.getElementById(divName).appendChild(newdiv);
         //addInput.push(divName.lowercase); 
         counter += 1;
     }
}
var myFunction = function() {
    var x = document.getElementById("y");
    var i;
    for (i = 0; i < x.length ;i++) {
        inputlist.append(x.elements[i].value);
        console.log("huhuhu");
    }};

    
var getSections = function(vfoodRef,userinput){
    sections = [];
    console.log(myInputs.length);
    
    
    return sections;
};
$( "#btn btn-default hu" ).click(function() {
  
    console.log("hu2");
    res = myFunction;
});


console.log('hi');
console.log(res.length);

var readingFoodData = function(){
        var fin = [];
        for(var i =0;i<Deli.length;i++){
            fin.push(Deli[i],0);
        }
        for(var i =0;i<Dairy.length;i++){
            fin.push(Dairy[i],1);
        }
        for(var i =0;i<Meat.length;i++){
            fin.push(Meat[i],2);
        }
        for(var i =0;i<Bakery.length;i++){
            fin.push(Bakery[i],3);
        }
        for(var i =0;i<Produce.length;i++){
            fin.push(Produce[i],4);
        }
        for(var i =0;i<Frozen.length;i++){
            fin.push(Frozen[i],5);
        }
        for(var i =0;i<Snacks.length;i++){
            fin.push(Snacks[i],6);
        }
        for(var i =0;i<Seafood.length;i++){
            fin.push(Seafood[i],7);
        }
        for(var i =0;i<Bulk.length;i++){
            fin.push(Bulk[i],8);
        }
        return fin;
        };

var huhu = readingFoodData();

for(var t = 0; t<huhu.length;t++){
    console.log(huhu[t]);
}

var ImSoDone = function(formString, sectionLists){
    var nodes = [];
    for(var i =0;i<formString.length;i++){
        var found = false;
        for(var u = 0;u<sectionLists.length;u++){
            var w = 0;
            while (w < sectionLists[u].length && found != true){
                if(formString[i] == sectionLists[u][w]){
                   found = true;
                   nodes.push(sectionLists[u][w][1]);
                }
                else{
                   w+=1;
                }
            }
        }
    }
    return nodes;
}

