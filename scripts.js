$(window).on("load", start);

function start(){
    $("ul.nav a:first").click();
}

$(document).on("click", "ul.nav a", nav);

function nav(e){
    e.preventDefault();
    var url = $(this).attr("href");
    $("#content").load(url);
    $("ul.nav a").removeClass("active");
    $(this).addClass("active");
}

function search(e) {
    if (e.key == "Enter") {
      var search = $("#search").val();
      console.log(search);
      if (search.length < 3) {
        alert("Keyword too short!")
      } else {
        var url = "https://api.openverse.engineering/v1/images/?q=" + search;
        console.log(url);
        $.ajax({
          url: url,
          success: populate
        })
      }
    }
  }
  function populate(data) {
      $("#result").empty();
    $.each(data.results, place);
  }
  
  function place(index, obj) {
    
    var html = "<img src='"+obj.thumbnail+"' class='mb-3 w-100'>";
    $("#result").append(html);
  }
  $(document).on("keyup", "#search", search);
  