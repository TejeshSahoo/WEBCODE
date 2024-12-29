document.addEventListener("DOMContentLoaded",()=>{
const body=document.querySelector("#body");
const dark_mode=document.querySelector(".dark_mode");
dark_mode.addEventListener("click",function color_change()
      {
          body.style.backgroundColor="black";
          body.style.color="aliceblue";
          dark_mode.innerHTML="<button>Light Mode</button>";
          dark_mode.backgroundColor="black";
          dark_mode.color="white";

          dark_mode.addEventListener("click",()=>
            {
                body.style.backgroundColor="aliceblue";
                body.style.color="black";
                dark_mode.innerHTML="<button>Dark Mode</button>";
               
                
            });

      });
      
const book_name=document.querySelector("#book_name");
const get_queries=document.querySelector("#get_queries");
const author_name=document.querySelector("#author_name");
const publish_year=document.querySelector("#publish_year");
const page_number=document.querySelector("#page_number");
const endDisplay=document.querySelector("#endDisplay");
get_queries.addEventListener("click",()=>{
               
          const temp_book=book_name.value;
           const temp_author=author_name.value;
           const temp_year=publish_year.value;
           const temp_page=page_number.value;
           const book1=new store_values(temp_book,temp_author,temp_year,temp_page);
           book1.display();  
});
function store_values(book,author,year,pageNum){
       this.author=author;
       this.book=book;
       this.year=year;
       this.pageNum=pageNum;
       
       this.display=()=>{ endDisplay.innerHTML+="<hr>Author:"+this.author+"<br>Book:"+this.book+"<br>Publish Year:" +this.year+"<br>Number of Pages:"+this.pageNum;
                        };
    

   }


});