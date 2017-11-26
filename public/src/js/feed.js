var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  
  if (defferedPromt) {                        // Kann das Install Banner angezeigt werden? (Variable aus app.js)
    deferredPrompt.promt();                   // Banner anzeigen

    deferredPrompt.userChoice.then (function(choiceResult) {  // Action des Anwenders auswerten
      console.log(choiceResult.outcome);

      if (choiceResult.outcome === 'dismissed') {             // Installation abgebrochen?
        console.log('User cancelled installation');
      } else {
        console.log('User added to shome screen');
      }
    });

    deferredPrompt = null;                    // Variable löschen, da man nur einen Versuch für das Banner hat
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
