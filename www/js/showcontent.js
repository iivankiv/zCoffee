function showContent(link) {

        $.ajax ({
            url: link,
            cache: false,
            success: function (html) {
                $("#tabs").html(html);
            }
        })

}

