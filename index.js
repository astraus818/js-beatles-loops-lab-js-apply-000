// add solution here

function theBeatlesPlay(musicians, instruments){
  var emptyArray;
  for(i=0;i<musicians.length;i++)
  {
    emptyArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return emptyArray;
}