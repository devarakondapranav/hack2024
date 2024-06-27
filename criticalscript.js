document.addEventListener('DOMContentLoaded', () => {
    showSection('platform'); // Show platform section by default
});

function showSection(section) {
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}

function addComment() {
    const commentsContainer = document.getElementById('comments');
    const newCommentText = document.getElementById('newComment').value;
    if (newCommentText) {
        const newComment = document.createElement('div');
        newComment.className = 'comment mb-2 p-2 border';
        
        const name = getRandomName();
        const time = new Date().toLocaleTimeString();

        newComment.innerHTML = `
            <p><strong>${name}</strong> <small class="text-muted">${time}</small></p>
            <p>${newCommentText}</p>
        `;

        commentsContainer.appendChild(newComment);
        document.getElementById('newComment').value = ''; // Clear the input field
    }
}

function getRandomName() {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    return names[Math.floor(Math.random() * names.length)];
}
