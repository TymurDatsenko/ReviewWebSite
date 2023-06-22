function filterBlocks() {
  const searchInput = document.querySelector('.input');
  const filter = searchInput.value.toLowerCase();
  const containers = document.querySelectorAll('.container');

  containers.forEach(container => {
    const filterValue = container.getAttribute('data-filter');
    if (filterValue.toLowerCase().includes(filter)) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
}