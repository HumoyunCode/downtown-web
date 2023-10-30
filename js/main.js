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
    updateProgressBar(3); // Call this function with the number of completed tests

    // listening button javascript code
    const moveButton = document.querySelector("#btn_listening");
    const testAreaListening = document.querySelector(".listening");
    const imageListeningSources = ['/image/listeningClick.jpg', '/image/listening.jpg'];
    const imageReadingSources = ['/image/readingClick.jpg', '/image/reading.png'];
    const imageWritingSources = ['/image/writingClick.jpg', '/image/writing.png'];
    const buttonImage = document.getElementById('buttonImage');

    // Variable to track if the div is already moved
    let isMoved = false;

    moveButton.addEventListener("click", () => {
      if (!isMoved) {
        testAreaListening.style.opacity = "1";
        testAreaListening.style.transition = "1s ease";
        // // bunga transform bilan birga qilinadi opasitiy bilan qilsa ham bo`ladi 
        moveButton.classList.add('btn_clicked');
         buttonImage.src = imageListeningSources[0];
      } else {
        testAreaListening.style.opacity = "0";
        moveButton.classList.remove('btn_clicked')
        testAreaListening.style.transition = ".5s";
        buttonImage.src = imageListeningSources[1];
      }

      isMoved = !isMoved;
    });

    // reading button javascript code

    const moveButtonReading = document.querySelector("#btn_reading");
    const testAreaReading = document.querySelector(".reading");
    const buttonImageReading = document.getElementById('buttonImageReading');
    let movedReading = false;
    moveButtonReading.addEventListener("click", () => {
      if (!movedReading) {
        testAreaReading.style.opacity = "1";
        testAreaReading.style.transition = "1s ease";
        // // bunga transform bilan birga qilinadi opasitiy bilan qilsa ham bo`ladi 
        moveButtonReading.classList.add('btn_clicked');
         buttonImageReading.src = imageReadingSources[0];
      } else {
        testAreaReading.style.opacity = "0";
        moveButtonReading.classList.remove('btn_clicked')
        testAreaReading.style.transition = ".5s";
        buttonImageReading.src = imageReadingSources[1];
      }

      movedReading = !movedReading;
    });

    // writing button javascript code
    const moveButtonWriting = document.querySelector("#btn_writing");
    const testAreaWriting = document.querySelector(".writing");
    const buttonImageWriting = document.getElementById('buttonImageWriting');
    let movedWriting = false;
    moveButtonWriting.addEventListener("click", () => {
      if (!movedWriting) {
        testAreaWriting.style.opacity = "1";
        testAreaWriting.style.transition = "1s ease";
        // // bunga transform bilan birga qilinadi opasitiy bilan qilsa ham bo`ladi 
        moveButtonWriting.classList.add('btn_clicked');
        buttonImageWriting.src = imageWritingSources[0];
      } else {
        testAreaWriting.style.opacity = "0";
        moveButtonWriting.classList.remove('btn_clicked')
        testAreaWriting.style.transition = ".5s";
        buttonImageWriting.src = imageWritingSources[1];
      }

      movedWriting = !movedWriting;
    });

    // speaking button javascript code
    const moveButtonSpeaking = document.querySelector("#btn_speaking");
    const testAreaSpeaking = document.querySelector(".speaking");
    const buttonImageSpeaking = document.getElementById('buttonImageSpeaking');
    const imageSpeakingSources = ['/image/speakingClick.jpg', '/image/speaking.png'];
    let movedSpeaking = false;
    moveButtonSpeaking.addEventListener("click", () => {
      if (!movedSpeaking) {
        testAreaSpeaking.style.opacity = "1";
        testAreaSpeaking.style.transition = "1s ease";
        // // bunga transform bilan birga qilinadi opasitiy bilan qilsa ham bo`ladi 
        moveButtonSpeaking.classList.add('btn_clicked');
        buttonImageSpeaking.src = imageSpeakingSources[0];
      } else {
        testAreaSpeaking.style.opacity = "0";
        moveButtonSpeaking.classList.remove('btn_clicked')
        testAreaSpeaking.style.transition = ".5s";
        buttonImageSpeaking.src = imageSpeakingSources[1];
      }

      movedSpeaking = !movedSpeaking;
    });
});

