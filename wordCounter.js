
let charactersId = document.getElementById('characters');
let wordsId = document.getElementById('words');
let sentenceId = document.getElementById('sentence');
let paragraphId = document.getElementById('paragraph');


function countWords(){
  let text = document.getElementById('text').value;
 
  // Characters count

  let characterText = text.replace(/\n/g,"")
  let charArr = characterText.split("");
  let charCount = charArr.length;
  let characters = 0;

  for(let i=0; i < charCount;i++){
      characters +=1;
  }
  charactersId.innerHTML = `Characters : ${characters}`;


  // Words Count
  let wordText = text.replace(/\n/g," ");
  let wordArr = wordText.split(" ");
  let wordCount = wordArr.length;
  let words = 0;
  let newWordArr = [];
  newWordArr = wordArr.filter((item) => item != "");
  words = newWordArr.length;
  wordsId.innerHTML = `Words = ${words}`

  // Sentences Count
  let sentenceText = text.replace(/\n/g," ")
  let sentenceArr = sentenceText.replace(/\n/g,".")
  sentenceArr = sentenceArr.split("")
  let sentenceCount = sentenceArr.length;
  let sentence = 0;

  for(let i=0; i < sentenceCount;i++){
      if(sentenceArr[i] == "." && (sentenceArr[i+1] == undefined || sentenceArr[i+1] == " " || sentenceArr[i+1] == null ) ){
        sentence +=1
      } 
  }
  sentenceId.innerHTML = `Sentence : ${sentence}`;
  
    //Paragraphs Count
    let paragraph = text.match(/\n/g);
    if(text != ""){
          if(paragraph){
            paragraphId.innerHTML = `Paragraphs : ${paragraph.length + 1}`
            } else{
            paragraphId.innerHTML = `Paragraphs : 1`
            }
          }
    else{
        paragraphId.innerHTML = `Paragraphs : 0`
      }
      
}

function resetText(){
  console.log("button clicksed")
  document.getElementById('text').value = null;
  charactersId.innerHTML = `Characters : 0`;
  wordsId.innerHTML = `Words : 0`;
  sentenceId.innerHTML = `Sentence : 0`;
  paragraphId.innerHTML = `Paragraph : 0`
}