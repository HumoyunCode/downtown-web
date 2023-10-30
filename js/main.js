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
    const moveButton = document.querySelector("#btn_listening");
    // const moveButton1 = document.querySelector("");
    const testArea = document.querySelector(".test_area");
    const imageListeningSources = ['/image/listeningClick.jpg', '/image/listening.jpg'];
    const imageReadingSources = ['/image/readingClick.jpg', '/image/reading.jpg'];
    const imageWritingSources = ['/image/writingClick.jpg', '/image/writinging.jpg'];
    const imageSpeakingSources = ['/image/speakingClick.jpg', '/image/speaking.jpg'];
    const buttonImage = document.getElementById('buttonImage');
    
    let currentPosition = 0;

    // Variable to track if the div is already moved
    let isMoved = false;

    moveButton.addEventListener("click", () => {
      if (!isMoved) {
        // Move the big div to the left slowly

        // Change the display property of the test area to 'flex'
        // bigDiv.style.justifyContent = "space-between"
        // testArea.style.display = "flex";
        testArea.style.opacity = "1";
        testArea.style.transition = "1s ease";
        // // bunga transform bilan birga qilinadi opasitiy bilan qilsa ham bo`ladi 
        moveButton.classList.add('btn_clicked');
         buttonImage.src = imageListeningSources[0];
      } else {
        // Reset the big div position and hide the test area
        // moveButton.style.transition = "margin-left 20s";
        // moveButton.style.marginLeft = "auto";
        // // testArea.style.display = "none";
        testArea.style.opacity = "0";
        // // bigDiv.style.justifyContent = "center"
        moveButton.classList.remove('btn_clicked')
        testArea.style.transition = ".5s";
        buttonImage.src = imageListeningSources[1];
      }

      isMoved = !isMoved;
    });

});

