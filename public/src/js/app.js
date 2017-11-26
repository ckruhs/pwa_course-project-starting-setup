var deferredPrompt;

if ('serviceWorker' in navigator) {     // Prüfen ob Service Worker unterstützt wird
    navigator.serviceWorker
        .register('/sw.js')             // SW registrieren. Die .register Methode liefert ein Promise zurück
        .then(function() {              // Callback Funktion für Promise registrieren, welche ausgeführt wird, 
                                        // sobald die asynchrone .register Methode abgearbeitet wurde.
            console.log('Service worker registered!');
        });
}

window.addEventListener ('beforeinstallprompt', function(event) {
    console.log ('beforeinstallprompt fired');
    event.preventDefault();             // Verhindern, dass das Chrome "Install" Banner angezeigt wird
    deferredPrompt = event;             // Merken, dass der Event ausgelöst wurde, so dass das Banner später per Code angezeigt werden kann.
    return false;
})