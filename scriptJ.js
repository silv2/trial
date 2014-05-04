i=0;
$(document).ready(function(){
  
 // $("input").keypress(function(e) {
 // if (e.which == '13') {
        //$("input").css("background-color","yellow");
 // }
//});


  $('#tags input').on('focusout',function(){    
    var txt= this.value.replace(/[^a-zA-Z0-9\+\-\.\#]/g,''); 
    if(txt) {
      $(this).before('<span class="tag">'+ txt.toLowerCase() +'</span>');
    }
    this.value="";
  }).keypress(function(e) {
  
    if (e.which == '13') {
       $(this).focusout();
   }
   
  });
  
      $('#tags').on('click','.tag',function(){
     if(confirm("Really delete this tag?")) $(this).remove(); 
  });
  
      $('#tags').on('keydown', function(e){
    if(e.keyCode === 8){
    //if(e.keyCode == 8){alert('Delete Key Pressed');
    if(confirm("Really delete this tag?")) {
     elements = document.getElementsByClassName("tag");
     var dlzka=  (elements.length-1);
  
        elements[0].parentNode.removeChild(elements[dlzka]);
    
   //$('tag[1]').remove();  
    } }
    
  });
    
});