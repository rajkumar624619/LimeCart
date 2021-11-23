$(document).ready(function(){
    $(".searchbtn").click(function(){
        var searchText=$("#pName").val();
      $.ajax({
        url: "http://test.localdixsoft.online/product/get?prod_name="+searchText,
        type: 'GET',
        dataType: 'json',
        success: function(res) {
          if(res.success=="1"){
            $('#message').html("");
            console.log(res+""+res.data.length);
            $.each(res.data, function(i, data){
              $('#message').append("Product Name : "+data.prod_name+" Unit Cost : "+data.unit_cost+"</br>");
            })
        }else{
          $('#message').html(res.message);
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
  