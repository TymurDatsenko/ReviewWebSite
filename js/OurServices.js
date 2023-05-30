document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.left-menu a');

    function highlightMenuItem() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach(function(section, index) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          menuItems.forEach(function(item) {
            item.classList.remove('active');
          });
          menuItems[index].classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', highlightMenuItem);
  });