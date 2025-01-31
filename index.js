// Función para guardar el estado de las casillas de verificación
function saveCheckboxState() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    localStorage.setItem(checkbox.id, checkbox.checked);
  });
}

// Función para cargar el estado de las casillas de verificación
function loadCheckboxState() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    const checked = localStorage.getItem(checkbox.id) === 'true';
    checkbox.checked = checked;
  });
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', loadCheckboxState);

// Guardar el estado cada vez que se cambie una casilla de verificación
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', saveCheckboxState);
});
