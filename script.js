// Initialiser les icônes Lucide au chargement
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

/**
 * Navigation entre les onglets
 * @param {Event} event - L'événement du clic
 * @param {string} pageId - L'ID de la page à afficher
 */
function navigate(event, pageId) {
    // Masquer tous les onglets
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Désactiver tous les boutons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Afficher l'onglet sélectionné
    const selectedTab = document.getElementById(pageId);
    if (selectedTab) {
        selectedTab.classList.add('active');
        event.currentTarget.classList.add('active');
        
        // Réinitialiser les icônes (nécessaire pour les contenus dynamiques)
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

/**
 * Basculer entre thème clair et sombre
 */
function toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', targetTheme);
    
    // Optionnel : sauvegarder la préférence dans localStorage
    localStorage.setItem('theme', targetTheme);
}

/**
 * Charger le thème sauvegardé depuis localStorage
 */
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
}

// Charger le thème au chargement de la page
loadSavedTheme();
