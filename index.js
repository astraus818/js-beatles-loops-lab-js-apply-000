// add solution here

function theBeatlesPlay(musicians, instruments){
  var emptyArray = new Array();
  for(var i=0;i<musicians.length;i++)
  {
    emptyArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return emptyArray;
}