function toggleFields() {
    const select = document.getElementById('status');
    const message = document.getElementById('message');
    const number = document.getElementById('number');
    if (select.value === 'on') {
      message.style.display = 'block';
      number.style.display = 'none';
    } else if (select.value === 'off') {
      message.style.display = 'none';
      number.style.display = 'block';
    } else {
      message.style.display = 'none';
      number.style.display = 'none';
    }
  }