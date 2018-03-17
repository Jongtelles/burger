// Wait for DOM to load
$(document).ready(function () {
    $(".create-form").on("submit", (event) => {
        event.preventDefault();
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

    $(".devour").on("click", (event) => {
        let id = $(this).val();
        console.log(id);
        let newState = {
            devoured: true
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(
            () => {
                console.log("changed devoured to", newState);
                location.reload();
            }
        );
    });
});