document.querySelectorAll('.i-bhai').forEach((img, index) => {
    img.addEventListener('mousemove', function() {
      document.querySelector(`.c1`).classList.remove('dn');
    });

    img.addEventListener('mouseleave', function() {
      document.querySelector(`.c1`).classList.add('dn');
    });
  });

  document.querySelectorAll('.i-bhai2').forEach((img, index) => {
    img.addEventListener('mousemove', function() {
      document.querySelector(`.c2`).classList.remove('dn');
    });

    img.addEventListener('mouseleave', function() {
      document.querySelector(`.c2`).classList.add('dn');
    });
  });