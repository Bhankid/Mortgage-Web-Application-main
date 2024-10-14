// Open and close modal
const openRoleModal = document.getElementById('create-account');
const closeRoleModal = document.getElementById('done-btn');
const userRoleModal = document.getElementById('user-roleModal');

openRoleModal.addEventListener('click', () => {
    userRoleModal.style.display = 'flex';
});

closeRoleModal.addEventListener('click', () => {
    userRoleModal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === userRoleModal) {
        userRoleModal.style.display = 'none';
    }
});

