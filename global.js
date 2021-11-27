$(document).ready(function(){
  var table = $('#example').DataTable( {
    searching: false
});
    $(".searchbtn").click(function(){
        var searchText=$("#pName").val();
      $.ajax({
        url: "http://test.localdixsoft.online/product/get?prod_name="+searchText,
        type: 'GET',
        dataType: 'json',
        success: function(res) {
          if(res.success=="1"){
            $('#message').html("");
            $('#example').DataTable({
              destroy: true,
              searching: false,
              "data": res.data,
                    "columns": [
                    { "data": "prod_id" },
                    { "data": "prod_name" },
                    { "data": "unit_cost" }

                   ]
            });
        }else{
          table.clear().draw();
        }
        }
    });
    });
  });

  $(document).ready(function(){
    $(".registerbtn").click(function(){
        var prodName=$("#pName").val();
        var unitCost=$("#pCost").val();
        $('.message').html("");
        $.post("http://test.localdixsoft.online/product/save",
        {
          prod_name: prodName,
          unit_cost: unitCost
        },
        function(data, status){
          $('.message').html(data.message);
        }).fail(function(response) {
          $('.message').html("Failed to save data");
      });
    });
  });
  