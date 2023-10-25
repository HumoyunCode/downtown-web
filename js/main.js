document.addEventListener('DOMContentLoaded', function () {

    const sidebar = document.querySelector(".sidebar-1");
    const sidebarRegistration = document.querySelector(".sidebar-2");
    const menuBtn = document.querySelector(".menu");
    const registrationSidebar = document.querySelector(".main-sidebar");

    function toggleSidebar() {
        sidebar.classList.toggle('close_toggle')
        sidebarRegistration.classList.toggle('close_toggle')
        registrationSidebar.classList.toggle('close_toggle')
    }

    menuBtn.addEventListener('click', toggleSidebar);

    // registration form side bar function
});

