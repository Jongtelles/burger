// Wait for DOM to load
$(document).ready(() => {

    $(".create-form").on("submit", (event) => {
        event.preventDefault();
        if ($('#bg').val() == '') {
            return alert('Please enter a burger name!')
        }
        let newBurg = {
            burger_name: $("#bg").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            () => {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $('.devour').on("click", function (event) {
        event.preventDefault();
        let id = $(this).attr("data-id");
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            () => {
                location.reload();
            }
        );
    });
});