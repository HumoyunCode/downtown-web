document.addEventListener('DOMContentLoaded', function () {

    const sidebar = document.querySelector(".sidebar-1");
    const sidebarRegistration = document.querySelector(".sidebar-2");
    const menuBtn = document.querySelector(".menu");

    function toggleSidebar() {
        sidebar.classList.toggle('close_toggle')
        sidebarRegistration.classList.toggle('close_toggle')
    }

    menuBtn.addEventListener('click', toggleSidebar);
});

