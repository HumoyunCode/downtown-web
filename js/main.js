document.addEventListener('DOMContentLoaded', function () {

    const sidebar = document.querySelector(".sidebar-1");
    const sidebarRegistration = document.querySelector(".sidebar-2");
    const menuBtn = document.querySelector(".menu");
    const registrationSidebar = document.querySelector(".main-sidebar");

    function toggleSidebar() {
        sidebar.classList.toggle('close__toggle')
        sidebarRegistration.classList.toggle('close__toggle')
        registrationSidebar.classList.toggle('close__toggle')
    }

    menuBtn.addEventListener('click', toggleSidebar);

    // registration form side bar function


    // ielts sections javascript code

    // Function to update the progress bar
    function updateProgressBar(completedTests) {
      const progressBar = document.getElementById("progress-bar");
      const totalTests = 5; // Total number of tests

      // Calculate the width as a percentage of completed tests
      const width = (completedTests / totalTests) * 100;
      progressBar.style.width = width + "%";
    }

    // Example: Update the progress bar when a test is completed
    updateProgressBar(1); // Call this function with the number of completed tests



    const bigDiv = document.querySelector(".card");
    const moveButton = document.querySelector(".btn");
    const moveButton1 = document.querySelector(".btn-1");
    const testArea = document.querySelector(".test_area");
    const imageListeningSources = ['/image/listeningClick.jpg', '/image/listening.jpg'];
    const imageReadingSources = ['/image/listeningClick.jpg', '/image/listening.jpg'];
    const imageWritingSources = ['/image/listeningClick.jpg', '/image/listening.jpg'];
    const imageSpeakingSources = ['/image/listeningClick.jpg', '/image/listening.jpg'];
    const buttonImage = document.getElementById('buttonImage');


    // Variable to track if the div is already moved
    let isMoved = false;

    moveButton.addEventListener("click", () => {
      if (!isMoved) {
        // Move the big div to the left slowly
        moveButton.style.transition = "margin-left 5s easy";
        moveButton.style.marginLeft = "-20px";

        // Change the display property of the test area to 'flex'
        bigDiv.style.justifyContent = "space-between"
        testArea.style.display = "flex";
        moveButton.classList.add('btn_clicked');
        buttonImage.src = imageListeningSources[0];
      } else {
        // Reset the big div position and hide the test area
        moveButton.style.transition = "margin-left 5s";
        moveButton.style.marginLeft = "auto";
        testArea.style.display = "none";
        bigDiv.style.justifyContent = "center"
        moveButton.classList.remove('btn_clicked')
        buttonImage.src = imageListeningSources[1];
      }

      isMoved = !isMoved;
    });

});

