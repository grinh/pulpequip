window.pulpEquip = {
    storageKey: 'pulpequip-autosave-v1',

    saveAutosave: function (json) {
        try {
            localStorage.setItem(this.storageKey, json);
        } catch (e) {
            console.warn('Nie udało się zapisać stanu w localStorage:', e);
        }
    },

    loadAutosave: function () {
        try {
            return localStorage.getItem(this.storageKey);
        } catch (e) {
            console.warn('Nie udało się odczytać stanu z localStorage:', e);
            return null;
        }
    },

    clearAutosave: function () {
        try {
            localStorage.removeItem(this.storageKey);
        } catch (e) {
            console.warn('Nie udało się wyczyścić localStorage:', e);
        }
    },

    downloadFile: function (fileName, base64Content) {
        const link = document.createElement('a');
        link.download = fileName;
        link.href = 'data:application/json;base64,' + base64Content;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },
    readFileAsText: function (inputId) {
        return new Promise((resolve, reject) => {
            const input = document.getElementById(inputId);
            if (!input || !input.files || input.files.length === 0) {
                reject('Nie wybrano pliku.');
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = () => reject('Błąd odczytu pliku.');
            reader.readAsText(input.files[0]);
        });
    }
};
