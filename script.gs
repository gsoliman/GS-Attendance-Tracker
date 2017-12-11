function myFunction() {
 var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1= SpreadsheetApp.setActiveSheet(ss.getSheets()[0]);
  var sheet2= SpreadsheetApp.setActiveSheet(ss.getSheets()[1]);

  var meetingNum= 1; //change each time
  
  var rangeId= sheet1.getDataRange();
  var rangeLook= sheet2.getRange(1, 1, sheet2.getDataRange().getNumRows());
  
for(var i=1; i<=rangeLook.getNumRows(); i++)
{
var look= parseInt(rangeLook.getCell(i,1).getValue());
  
  if(look<=25320){ //ID at Cell 30
 
  for (var j=30; j>0; j--){
  var curr= parseInt(rangeId.getCell(j,1).getValue());
    
    if(look==curr)
    {
    rangeId.getCell(j, 2).setValue(parseInt(rangeId.getCell(j, 2).getValue())+1);
    rangeId.getCell(j, meetingNum+2).setBackground("green");  
    break;}
  
  }}
  
  
   else if(look<=90368){ //ID at 70
 
  for (var j=70; j>0; j--){
  var curr= parseInt(rangeId.getCell(j,1).getValue());
    
    if(look==curr)
    {
    rangeId.getCell(j, 2).setValue(parseInt(rangeId.getCell(j, 2).getValue())+1);
    rangeId.getCell(j, meetingNum+2).setBackground("green");  
    break;}

  
  }}
  
  
  else if(look<=24951){ //ID at 110
 
  for (var j=110; j>0; j--){
  var curr= parseInt(rangeId.getCell(j,1).getValue());
    
    if(look==curr)
    {
    rangeId.getCell(j, 2).setValue(parseInt(rangeId.getCell(j, 2).getValue())+1);
    rangeId.getCell(j, meetingNum+2).setBackground("green");  
    break;}

  
  }}
  
  
  else if(look<=24951){ //ID at 110
 
  for (var j=110; j>0; j--){
  var curr= parseInt(rangeId.getCell(j,1).getValue());
    
    if(look==curr)
    {
    rangeId.getCell(j, 2).setValue(parseInt(rangeId.getCell(j, 2).getValue())+1);
    rangeId.getCell(j, meetingNum+2).setBackground("green");  
    break;}
    
  }} 
    else {
  for (var j=rangeId.getNumRows(); j>0; j--){
  var curr= parseInt(rangeId.getCell(j,1).getValue());
    
    if(look==curr)
    {
    rangeId.getCell(j, 2).setValue(parseInt(rangeId.getCell(j, 2).getValue())+1);
    rangeId.getCell(j, meetingNum+2).setBackground("green");  
    break;}

  
  }
  }

  
  }}
  

 



