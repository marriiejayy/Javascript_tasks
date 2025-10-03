
// function saveNote() {
//     const noteText = document.getElementById('noteText').value;
//     if (noteText.trim() === '') {
//         alert('Please write something before saving!');
//         console.error('Please write something before saving!'); 
//         return;
//     }
//     const noteData = {
//         content: noteText,
//         savedAt: new Date().toISOString()
//     };
//     localStorage.setItem('userNote', JSON.stringify(noteData));
//     updateTimestamp(noteData.savedAt);
//     showMessage('Note saved successfully! ✓', 'success');
// }
// function loadNote(silent = false) {
//     const savedData = localStorage.getItem('userNote');
//     if (savedData) {
//         const noteData = JSON.parse(savedData);
//         document.getElementById('noteText').value = noteData.content;
//         updateTimestamp(noteData.savedAt);
//         if (!silent) {
//             showMessage('Note loaded successfully! ✓', 'success');
//         }
//     } else {
//         if (!silent) {
//             showMessage('No saved note found.', 'info');
//         }
//     }
// }
function saveNote() {
    const noteText = document.getElementById('noteText').value;

    if (noteText.trim() === '') {
        showMessage('Please write something before saving!', 'error');
        alert('Please write something before saving!');
        console.error('Please write something before saving!');
        return;
    }

    localStorage.setItem('userNote', noteText);
    showMessage('Note saved successfully! ', 'success');
}

function loadNote(silent = false) {
    const savedNote = localStorage.getItem('userNote');

    if (savedNote) {
        document.getElementById('noteText').value = savedNote;

        if (!silent) {
            showMessage('Note loaded successfully!', 'success');
        }
    } else {
        if (!silent) {
            showMessage('No saved note found.', 'info');
        }
    }
}


function clearNote() {
    document.getElementById('noteText').value = '';
    showMessage('Note cleared (not deleted from storage)', 'info');
}


function showMessage(text, type) {
    const messages = document.getElementById('message');
    messages.textContent = text;
    messages.className = `message ${type}`;
}

function saveNote() {
    // Hide previous message first
    document.getElementById('message').className = 'message';
    
    const noteText = document.getElementById('noteText').value;
    if (noteText.trim() === '') {
        showMessage('Please write something!', 'error');
        return;
    }
    localStorage.setItem('userNote', noteText);
    showMessage('Note saved!', 'success');
}