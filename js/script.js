$(document).ready(function(){
	 $.ajax({
           	type: "GET",
           	url: "http://59de07a84c181d0012a8ce83.mockapi.io/details",
           	dataType: "json",
           	success: function(result){
           		var txt = "";
           		
           		for(i = 0; i < result.length; i++){
           			var sno = 0;
           			sno = 1+i;
           			txt += "<tr><td>" + sno + "</td><td>" + result[i].Name + "</td><td>" + result[i].Email + "</td><td>" + result[i].Subject + "</td><td>" + result[i].Message + "</td><td><button><img src='images/delete.png' id='btnDelete'></button></td></tr>";

           		}
                // $(".btnDelete").bind("click",Delete);
           		$("#tablevalue").html(txt);
                console.log(txt)
           	}
        
    })
	   // var index, table = document.getElementById('table');
    //      for(var i = 0; i < table.rows.length; i++){
    //  	$(table.rows[i].cells[5]).click(function(){
    //  		index = this.parentElement.rowIndex;
    //  		table.deleteRow(index);
    //  		console.log(index);
    //  	});
     	
    //  } 	
    $.ajax({
        type: "DELETE",
        url: "http://59de07a84c181d0012a8ce83.mockapi.io/details",
        dataType:"json",
        success:function(result){
        	for(i = 0; i < result.length; i++){
        		$("#btnDelete").click(function{
        			
        			
        		});
        	}
        }
    })
});