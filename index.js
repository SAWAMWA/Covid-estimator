
 const covid19ImpactEstimator= ()=> {
    const data = {
     "region":{
         //"name":document.getElementById('region').value,
         //"avgAge":document.getElementById('age').value,
         //"avgDailyIncomeInUSD":document.getElementById('averageIncome').value
         },
       "periodType":document.getElementById('periodType').value,
       "timeToElapse":document.getElementById('timeToElapse').value,
       "reportedCases":document.getElementById('reportedCases').value,
       "population":document.getElementById('population').value,
       "totalHospitalBeds":document.getElementById('hospitalbeds').value,
       "impact":{
           "currentlyInfected":(function(){return data.reportedCases*10;}),
           "infectionByRequestedTime":function(){return Math.floor(data.impact.currentlyInfected()*Math.pow(2 ,(data.timeToElapse/3)));},
           "severeCasesByRequestedTime":function() {return Math.floor(data.impact.infectionByRequestedTime()*15/100);},
           "hospitalBedsByRequestedTime": function() { return Math.floor((data.totalHospitalBeds*0.35)-(data.impact.severeCasesByRequestedTime()))},
           "casesOfICUByrequestedTime":function() {return Math.floor(data.impact.infectionByRequestedTime()*5/100);},
           "casesOfVentilatorsByRequestedTime":function() {return Math.floor(data.impact.infectionByRequestedTime()*2/100);},
           "dollarsInFlight":function() {return Math.floor((data.impact.infectionByRequestedTime()*0.65*data.region.avgDailyIncomeInUSD)/30)}
         },
       "severeImpact":{
           "currentlyInfected":function severe() {return data.reportedCases*50;},
           "infectionByRequestedTime":function() {return Math.floor(data.severeImpact.currentlyInfected()*Math.pow(2 ,(data.timeToElapse/3)))},
           "severeCasesByRequestedTime":function() {return Math.floor(data.severeImpact.infectionByRequestedTime()*15/100);},
           "hospitalBedsByRequestedTime":function() { return Math.floor((data.totalHospitalBeds*0.35)-(data.severeImpact.severeCasesByRequestedTime()))},
           "casesOfICUByrequestedTime":function() {return Math.floor(data.severeImpact.infectionByRequestedTime()*5/100);},
           "casesOfVentilatorsByRequestedTime":function() {return Math.floor(data.severeImpact.infectionByRequestedTime()*2/100);},
           "dollarsInFlight":function() {return  Math.floor((data.severeImpact.infectionByRequestedTime()*0.65*data.region.avgDailyIncomeInUSD)/30)},
         }
       }
   
       document.getElementById('period').innerHTML = data.periodType;
       document.getElementById('reportecases').innerHTML = data.reportedCases;
       document.getElementById('popu').innerHTML = data.population;
       document.getElementById('beds').innerHTML = data.totalHospitalBeds;
       document.getElementById('infection').innerHTML = data.impact.currentlyInfected();
       document.getElementById('inrqt').innerHTML =  data.impact.infectionByRequestedTime();
       document.getElementById('hosp').innerHTML =   data.impact.severeCasesByRequestedTime();
       document.getElementById('avlbeds').innerHTML =  data.impact.hospitalBedsByRequestedTime();
       document.getElementById('icu').innerHTML =data.impact.casesOfICUByrequestedTime();
       document.getElementById('vent').innerHTML =data.impact.casesOfVentilatorsByRequestedTime();
   
   
      document.getElementById('severeperiod').innerHTML= data.periodType;
      document.getElementById('severecases').innerHTML= data.reportedCases;
      document.getElementById('severepopulation').innerHTML= data.population;
      document.getElementById('severebeds').innerHTML= data.totalHospitalBeds;
      document.getElementById('severeioci').innerHTML=data.severeImpact.currentlyInfected();
      document.getElementById('severerequestedtime').innerHTML= data.severeImpact.infectionByRequestedTime();
      document.getElementById('severehospitalisation').innerHTML=data.severeImpact.severeCasesByRequestedTime();
      document.getElementById('severebedsRT').innerHTML= data.severeImpact.hospitalBedsByRequestedTime();
      document.getElementById('severeicu').innerHTML= data.severeImpact.casesOfICUByrequestedTime();
      document.getElementById('severevent').innerHTML= data.severeImpact.casesOfVentilatorsByRequestedTime();
     }
   