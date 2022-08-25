<script>
    var icon = document.getElementById("icon");
    icon.onclick = function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            icon.src = "profile/img/crescent-moon.png "

        }
        else {
            icon.src = "profile/img/sunny.png "

        }
    }
</script>