
:root {
  --bg: #0c1020;
  --card: #171d31;
  --text: #f5f5ff;
  --muted: #aab0c4;
  --accent: #a78bfa;
  --border: #30374c;
}

body.light {
  --bg: #f7f8ff;
  --card: #ffffff;
  --text: #1c2335;
  --muted: #606b80;
  --accent: #7550d8;
  --border: #dde0ec;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Poppins', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
}

a { text-decoration: none; color: inherit; }
button { cursor: pointer; }

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 18px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo { font-size: 25px; font-weight: 800; }
.logo span, h1 span, .section-title h2 span { color: var(--accent); }

nav { display: flex; align-items: center; gap: 25px; }
nav a { color: var(--muted); font-size: 14px; }
nav a:hover { color: var(--accent); }

#menu-btn { display: none; }

#menu-btn, #theme-btn {
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  padding: 10px 13px;
  border-radius: 9px;
}

.hero {
  min-height: 100vh;
  padding: 130px 9% 90px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 60px;
}

.small-heading {
  color: var(--accent);
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 600;
}

.hero h1 {
  font-size: clamp(36px, 5vw, 62px);
  line-height: 1.2;
  margin: 15px 0;
}

.hero h2 { font-size: 25px; margin-bottom: 20px; }
#typing { color: var(--accent); }

.hero-text > p:not(.small-heading) {
  color: var(--muted);
  max-width: 580px;
}

.buttons { display: flex; flex-wrap: wrap; gap: 15px; margin: 30px 0; }

.btn {
  display: inline-block;
  padding: 12px 23px;
  border-radius: 10px;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  transition: .3s;
}

.btn:hover { transform: translateY(-4px); }
.btn.outline { background: transparent; border: 1px solid var(--accent); color: var(--text); }

.socials { display: flex; gap: 20px; margin-top: 25px; }
.socials a { font-size: 24px; transition: .3s; }
.socials a:hover { color: var(--accent); transform: translateY(-4px); }

.hero-photo { text-align: center; }
.photo-border {
  max-width: 330px;
  aspect-ratio: 4/5;
  margin: auto;
  padding: 8px;
  border-radius: 170px 170px 35px 35px;
  background: linear-gradient(135deg, var(--accent), #67e8f9);
  box-shadow: 0 0 60px #a78bfa30;
}
.photo-border img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 165px 165px 29px 29px;
}
.photo-caption { margin-top: 20px; color: var(--muted); font-size: 14px; }

.section { padding: 100px 9%; scroll-margin-top: 70px; }
.alternate { background: var(--card); }

.section-title { text-align: center; margin-bottom: 55px; }
.section-title p { color: var(--accent); font-size: 13px; letter-spacing: 2px; }
.section-title h2 { font-size: clamp(30px, 4vw, 43px); margin-top: 8px; }

.about-content {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  align-items: center;
  gap: 65px;
}

.about-image img {
  width: 100%;
  max-width: 350px;
  height: 400px;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--border);
}

.about-content h3 { font-size: 25px; margin-bottom: 20px; }
.about-content p { color: var(--muted); margin-bottom: 15px; }

.about-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 25px 0;
  font-size: 13px;
}
.about-info strong { color: var(--accent); }

.education-card {
  max-width: 750px;
  margin: auto;
  padding: 35px;
  border-radius: 18px;
  background: var(--bg);
  border: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  gap: 25px;
}
.education-card > i { color: var(--accent); font-size: 36px; }
.education-card h4 { color: var(--accent); margin: 7px 0; }
.education-card p { color: var(--muted); }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.skill-card, .project-card {
  padding: 30px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--card);
  transition: .3s;
}
.alternate .project-card { background: var(--bg); }

.skill-card:hover, .project-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent);
}

.skill-card > i { font-size: 36px; color: var(--accent); margin-bottom: 15px; }
.skill-card h3, .project-card h3 { margin-bottom: 12px; }
.skill-card p, .project-card p { color: var(--muted); font-size: 14px; }

.project-icon { color: var(--accent); font-size: 32px; margin-bottom: 18px; }
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 22px 0; }
.tags span {
  padding: 5px 10px;
  border-radius: 6px;
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 12px;
}
.project-card a { color: var(--accent); font-weight: 600; font-size: 14px; }

.contact-box {
  text-align: center;
  max-width: 800px;
  margin: auto;
  padding: 55px 25px;
  border-radius: 22px;
  background: var(--card);
  border: 1px solid var(--border);
}
.contact-box h3 { font-size: 25px; }
.contact-box p { color: var(--muted); margin: 20px 0 30px; }
.contact-box .socials { justify-content: center; }

footer {
  text-align: center;
  padding: 25px;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 13px;
}

@media (max-width: 850px) {
  header { padding: 15px 6%; }
  #menu-btn { display: block; }
  nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 25px 6%;
    background: var(--bg);
    flex-direction: column;
    align-items: stretch;
    border-bottom: 1px solid var(--border);
  }
  nav.open { display: flex; }
  .hero { grid-template-columns: 1fr; text-align: center; gap: 40px; }
  .hero-text > p:not(.small-heading) { margin: auto; }
  .buttons, .socials { justify-content: center; }
  .about-content { grid-template-columns: 1fr; gap: 30px; }
  .about-image { text-align: center; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .section { padding: 75px 6%; }
  .hero { padding: 125px 6% 75px; }
  .hero h2 { font-size: 20px; }
  .grid { grid-template-columns: 1fr; }
  .about-info { grid-template-columns: 1fr; }
  .education-card { flex-direction: column; }
  .buttons { flex-direction: column; }
}
