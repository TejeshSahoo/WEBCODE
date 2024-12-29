document.addEventListener("DOMContentLoaded",()=>{
const displayText=document.querySelector(".displayText");
const word_button=document.querySelector("#word_button");
const word_input=document.querySelector(".word_input");

word_button.addEventListener("click",()=>{
    

    const word=word_input.value;
    
    
    
    
    async function fetchData()
    {
    try{
    const API_URL=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response=await fetch(API_URL);
    const wordData=await response.json();
    if(!response.ok)
        {
         console.log("Could not Fetch response.");
        }
    for(let i=0;i<wordData[0].meanings[0].definitions.length;i++)
    {
       displayText.innerHTML+=(i+1)+".  "+wordData[0].meanings[0].definitions[i].definition+"<br><br><br>";
       
    }
    } 
    catch(err)
    {
        console.log("Error");
    }   
   }
    fetchData();
});

});