(function () {

    const autorizada =
        sessionStorage.getItem("oficinaAutorizada");

    if (autorizada !== "true") {

        window.location.replace(
            "login-oficina.html"
        );

    }

})();