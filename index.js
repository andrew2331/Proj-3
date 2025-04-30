function toggleChat() {
  var chatBox = document.getElementById('chatBox');
  if (chatBox.style.display === 'none' || chatBox.style.display === '') {
    chatBox.style.display = 'flex';
  } else {
    chatBox.style.display = 'none';
  }
}

function toggleMenu() {
  const menu = document.getElementById('navbarMenu');
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
}
