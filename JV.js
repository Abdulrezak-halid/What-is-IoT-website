 $(document).ready(function(){
  
     $('.humbarger').click(function(event){
     $('.menu-list').slideToggle(500);
    event.preventDefault();
    
     $('.menu-list li a').click(function(event) {
         if ($(window).width() < 768) {
           $('.menu-list').slideUp(500);
          event.preventDefault(); 
         }
       });
 });

});