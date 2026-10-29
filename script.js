// Multi-Page Switcher Function
function switchPage(pageId, clickedBtn) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => section.classList.remove('active-page'));

    document.getElementById('page-' + pageId).classList.add('active-page');

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
}

// Button 1: Pop-up greeting
function showAlert() {
    alert("Hello! Welcome to Mekaal's Portfolio Website!");
    showMsg("You clicked 'Greet Me'! Thanks for visiting.");
}

// Button 2: Toggle proper dark/light theme instantly
let isDarkMode = false;
function changeTheme() {
    const container = document.getElementById('main-container');
    const subtitle = document.getElementById('subtitle-text');
    const about = document.getElementById('about-text');
    const col1 = document.getElementById('col-1');
    const col2 = document.getElementById('col-2');
    const cards = document.querySelectorAll('.project-card');
    const cardTitles = document.querySelectorAll('.project-card h4');
    const cardParagraphs = document.querySelectorAll('.project-card p');
    const subheadings = document.querySelectorAll('h2');

    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        // Dark Theme styles
        document.body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)';
        container.style.background = 'rgba(15, 23, 42, 0.95)';
        container.style.color = '#f8fafc';
        container.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.6)';
        subtitle.style.color = '#94a3b8';
        if(about) about.style.color = '#e2e8f0';
        
        subheadings.forEach(h => h.style.color = '#a78bfa');
        if(col1) {
            col1.style.background = '#1e293b';
            col1.style.borderColor = '#334155';
        }
        if(col2) {
            col2.style.background = '#1e293b';
            col2.style.borderColor = '#334155';
        }

        cards.forEach(card => {
            card.style.backgroundColor = '#1e293b';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
        });
        cardTitles.forEach(t => t.style.color = '#f8fafc');
        cardParagraphs.forEach(p => p.style.color = '#cbd5e1');

        showMsg("Switched to Sleek Dark Theme!");
    } else {
        // Light Theme styles
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        container.style.background = 'rgba(255, 255, 255, 0.95)';
        container.style.color = '#333333';
        container.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
        subtitle.style.color = '#555';
        if(about) about.style.color = '#333333';

        subheadings.forEach(h => h.style.color = '#764ba2');
        if(col1) {
            col1.style.background = '#f8fafc';
            col1.style.borderColor = '#e2e8f0';
        }
        if(col2) {
            col2.style.background = '#f8fafc';
            col2.style.borderColor = '#e2e8f0';
        }

        cards.forEach(card => {
            card.style.backgroundColor = '#ffffff';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        });
        cardTitles.forEach(t => t.style.color = '#1e293b');
        cardParagraphs.forEach(p => p.style.color = '#333333');

        showMsg("Switched back to Bright Light Theme!");
    }
}

// Button 3: Display a fun inventor fact
function displaySecretFact() {
    const facts = [
        "Fun Fact: Thomas Edison had over 1,000 patents!",
        "Fun Fact: The first computer bug was an actual real moth found inside a relay.",
        "Fun Fact: JavaScript was created in just 10 days in 1995!",
        "Fun Fact: Mekaal's future inventions will change the world!"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    showMsg(randomFact);
}

// Button 4: Count total featured projects dynamically
function countProjects() {
    const projects = document.querySelectorAll('.project-card');
    showMsg(`Total Featured Projects displayed right now: ${projects.length}`);
}

// Helper function to update the message box cleanly without animations
function showMsg(text) {
    const display = document.getElementById('message-display');
    display.innerText = text;
    
    // Match styles depending on the current theme mode
    if (isDarkMode) {
        display.style.background = '#1e293b';
        display.style.color = '#f8fafc';
        display.style.borderColor = '#a78bfa';
    } else {
        display.style.background = '#f1f5f9';
        display.style.color = '#1e293b';
        display.style.borderColor = '#0072ff';
    }
    
    display.style.display = 'block';
}