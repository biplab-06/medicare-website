  document.getElementById('makeAppointmentBtn').addEventListener('click', function() {
      alert('Thank you for your interest in making an appointment! Our team will contact you shortly.');
    });
    document.getElementById('viewDepartmentBtn').addEventListener('click', function() {
      alert('Redirecting to the Department page...');
      window.location.href = '#department';
    });

    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach(item => {
      item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          alert('You selected: ' + this.textContent);
          e.preventDefault();
        }
      });
    });

    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
      item.addEventListener('click', () => {
        alert('You clicked on ' + item.textContent.trim());
      });
      item.addEventListener('keydown', e => {
        if(e.key === 'Enter' || e.key === ' ') {
          alert('You selected ' + item.textContent.trim());
          e.preventDefault();
        }
      });
    });