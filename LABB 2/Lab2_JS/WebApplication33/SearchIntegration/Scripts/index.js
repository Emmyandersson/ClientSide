$(document).ready(function() {
    $('#searchInput').keyup(function () {
        var searchField = $("#searchInput").val();
        var meExp = new RegExp(searchField, "i");

        $.getJSON('allProducts.json', function (data) {
            var outPut = "<ul class='searchResults'> ";

            $.each(data, function(key, value) {

                if ((value.name.search(meExp) !== -1) || (value.about.search(meExp) !== -1)) {
                    outPut += "<li>" +
                        "<p>" +
                        "<strong>" + value.name + "</strong> " + value.about +
                        "</p>" +
                        "<img src='../Images/" + value.url_image + "' alt=' " + value.name + "' >" +
                        "</li>";
                }
            });
            outPut += "</ul>";
            $('#update').html(outPut);
        });

    });

});