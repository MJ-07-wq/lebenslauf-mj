/* ============================================================
   MJERROR404 — COMPLETE SCRIPT
   Navigation · i18n · reveal · spotlight · terminal tilt · form
   ============================================================ */

const translations = {
  en: {
  "title_home": "Jakob Maroufi | MJError404",
  "title_about": "About | Jakob Maroufi",
  "title_skills": "Skills | Jakob Maroufi",
  "title_projects": "Projects | Jakob Maroufi & MJError404",
  "title_education": "Education | Jakob Maroufi",
  "title_contact": "Contact | Jakob Maroufi",
  "title_download": "Download | Jakob Maroufi",
  "title_certificates": "Certificates | Jakob Maroufi",
  "title_404": "404 | MJError404",
  "nav_open": "Open navigation",
  "nav_label": "Main navigation",
  "language_switch": "Switch language",
  "nav_home": "Home",
  "nav_about": "About Me",
  "nav_skills": "Skills",
  "nav_projects": "Projects",
  "nav_education": "Education",
  "nav_certificates": "Certificates",
  "nav_download": "Download",
  "nav_contact": "Let's Connect →",
  "footer_role": "Developer · Filmmaker · Creator",
  "footer_projects": "Projects",
  "footer_contact": "Contact",
  "footer_copyright": "© 2026 Jakob Maroufi · MJDebugLife",
  "home_eyebrow": "DEVELOPER · FILMMAKER · CREATOR",
  "home_title": "I build digital<br>things that<br><span>make an impact.</span>",
  "home_intro": "I'm <strong>Jakob Maroufi</strong> — an HTL student from Austria combining web development, filmmaking and creative technology.",
  "home_work": "View My Work →",
  "home_about_button": "About Me",
  "home_stat_projects": "Projects",
  "home_stat_projects_sub": "Code · Media · Web",
  "home_stat_htl_sub": "IT · Krems",
  "home_stat_learning": "Always",
  "home_stat_learning_sub": "Learning",
  "home_feature_problem": "✓ Problem Solver",
  "home_feature_creative": "✓ Creative",
  "home_feature_debug": "✓ Still Debugging",
  "terminal_init": "&gt; <span class=\"terminal-accent\">initializing</span> portfolio.exe",
  "terminal_skills": "> loading skills...",
  "terminal_projects": "> fetching projects...",
  "terminal_build": "> building awesome experiences...",
  "terminal_ready": "> status: READY",
  "home_error_text": "boring portfolio<br>not found",
  "home_projects_label": "FEATURED PROJECTS",
  "home_projects_heading": "Things I've created.",
  "home_projects_all": "View All Projects →",
  "home_science_type": "Filmmaking",
  "home_science_text": "Vlogs, science, behind-the-scenes moments and storytelling.",
  "home_science_button": "Explore Project →",
  "home_krems_type": "Cinematic Videos",
  "home_krems_text": "Camera work, editing and cinematic storytelling all in one place.",
  "home_krems2_type": "Cinematic Videos",
  "home_krems2_text": "Vlogs, Science Academy, behind-the-scenes moments and storytelling.",
  "home_krems_button": "View Project →",
  "home_portfolio_type": "Web Development",
  "home_portfolio_title": "Portfolio Website",
  "home_portfolio_text": "This website — built with HTML, CSS and JavaScript.",
  "home_portfolio_button": "You're already here :)",
  "home_about_label": "ABOUT ME",
  "home_about_heading": "Get to know me.",
  "home_about_text_1": "I'm Jakob, an IT student from Austria with a passion for software development, filmmaking and digital media.",
  "home_about_text_2": "I enjoy turning ideas into actual projects — even when those ideas become slightly larger side quests than expected.",
  "home_about_more": "More About Me →",
  "pill_problem": "Problem Solver",
  "pill_team": "Team Player",
  "pill_creative": "Creative",
  "pill_learning": "Continuous Learner",
  "pill_sidequest": "Sidequest Collector",
  "home_skills_label": "CORE SKILLS",
  "home_skills_heading": "Technologies I work with.",
  "home_skills_more": "View All Skills →",
  "home_contact_heading": "Have something in mind?",
  "home_contact_text": "Let's build something interesting together.",
  "home_contact_button": "Let's Connect →",
  "about_label": "ABOUT ME",
  "about_title": "Tech on my mind.<br>Camera in my hand.",
  "about_lead": "I like projects where code, media and creativity work together instead of living in separate boxes.",
  "about_intro_label": "HEY, I'M JAKOB",
  "about_intro_title": "Builder, creator and very curious.",
  "about_intro_text_1": "I'm an HTL student focused on technology with a strong interest in web development, software, media design and creative tech projects. Game development is on my learning list — but it only becomes a skill once I've actually built something with it.",
  "about_intro_text_2": "I like working solution-first, experimenting a lot and learning by building. That's also how MJError404 became a place for videos, creative experiments and projects around technology and media.",
  "about_stat_media": "Media",
  "about_stat_projects": "Projects",
  "strengths_label": "STRENGTHS",
  "strengths_title": "What I bring to the table.",
  "strength_fighter_title": "Fighter mentality",
  "strength_fighter_text": "When something doesn't work, my first reaction is usually “again” rather than “whatever”.",
  "strength_problem_title": "Problem solving",
  "strength_problem_text": "Break complex tasks down, test ideas and move step by step toward a working solution.",
  "strength_initiative_title": "Initiative",
  "strength_initiative_text": "Ideas quickly become prototypes, experiments or full projects instead of staying in a notes app forever.",
  "strength_creative_title": "Creativity + technology",
  "strength_creative_text": "Technology should work — but it can also look good, feel good and tell a story.",
  "debug_title": "Nobody ships without bugs.",
  "debug_intro": "A few things version Jakob.exe is still working on.",
  "debug_perfection_title": "Perfectionism",
  "debug_perfection_text": "I can spend too long polishing details. I'm learning when “done and good” beats another hour of tweaking.",
  "debug_perfection_note": "Fix in progress...",
  "debug_overthink_title": "Overthinking",
  "debug_overthink_text": "Sometimes a small problem turns into a full side quest. First check: is there a simpler solution?",
  "debug_overthink_note": "Refactoring thoughts...",
  "debug_sidequests_title": "Too many side quests",
  "debug_sidequests_text": "New ideas can become new projects very quickly. Prioritising the main quest is still being improved.",
  "debug_sidequests_note": "Task manager required.",
  "debug_experience_title": "Experience",
  "debug_experience_text": "There are still many technologies I want to learn. The plan is simple: build, test, repeat.",
  "debug_experience_note": "Installing updates...",
  "skills_label": "SKILLS",
  "skills_title": "Tools are a means.<br>Projects are the goal.",
  "skills_lead": "No made-up 87% skill bars. I'd rather show honestly what I work with and where I'm still learning.",
  "skills_dev_label": "DEVELOPMENT",
  "skills_web_title": "Web Development",
  "skills_web_text": "Foundations and practical projects around modern websites.",
  "skill_responsive": "Responsive Design",
  "skills_code_label": "SOFTWARE",
  "skills_code_text": "Object-oriented programming, collections, persistence, databases and practical school projects.",
  "skills_creative_label": "CREATIVE",
  "skills_media_title": "Media & Video",
  "skills_media_text": "Planning, filming, editing and preparing content for different platforms.",
  "skill_editing": "Video Editing",
  "skill_filming": "Filming",
  "skill_shortform": "Short-form Content",
  "skill_media_design": "Media Design",
  "skills_workflow_label": "WORKFLOW",
  "skills_workflow_text": "I learn the most when theory becomes a real project.",
  "skill_research": "Research",
  "skill_iteration": "Iteration",
  "skill_teamwork": "Teamwork",
  "game_aria": "Game Development – Coming Soon",
  "game_tape_top": "ERROR 404 · LOCKED · COMING SOON · ERROR 404 · LOCKED · COMING SOON ·",
  "game_soon": "COMING SOON",
  "game_text": "Not an active skill yet. It belongs here only after I've actually worked with it and built something.",
  "game_status": "ERROR 404: SKILL NOT FOUND",
  "game_tape_bottom": "LEARNING QUEUE · DO NOT CLAIM YET · LEARNING QUEUE · DO NOT CLAIM YET ·",
  "projects_label": "PROJECTS",
  "projects_title": "Code, camera<br>& controlled chaos.",
  "projects_lead": "A selection of videos, clips and projects. Not everything is perfect — but everything is part of the process.",
  "proj_sunset_title": "Sunset",
  "proj_sunset_text": "An atmospheric edit combining different sunsets.",
  "proj_htl_title": "HTL in the Evening",
  "proj_htl_text": "Evening shots of HTL Krems turned into a short visual edit.",
  "proj_park_title": "Stadtpark Krems",
  "proj_park_text": "A small tour through Stadtpark Krems — filmed and edited as a mini-vlog.",
  "s1_heading": "Vlog Series · Season 1",
  "s1_lead": "Teasers, episodes and the development of a vlog series around science, technology and new experiences.",
  "s1_teaser_title": "Season 1 Teaser",
  "s1_teaser_text": "The first glimpse into the Science Academy journey.",
  "s1_e1_title": "Welcome",
  "s1_e1_text": "The beginning of a journey into science, technology and new possibilities.",
  "s1_e2_title": "Biotech & Futurelab",
  "s1_e2_text": "New surroundings, new people and insights into biotechnology and the Futurelab.",
  "s1_e3_title": "Return",
  "s1_e3_text": "Back on familiar ground — but with new corners, new moments and more energy.",
  "s1_e4_title": "AI & Us",
  "s1_e4_text": "A new part of the building, new perspectives and a day around AI and discovery.",
  "s1_e5_title": "Behind the Scenes",
  "s1_e5_text": "Conversations, impressions and a look behind the scenes of the Science Academy journey.",
  "s1_e6_title": "New Paths",
  "s1_e6_text": "More impressions from everyday life at the Science Academy.",
  "s1_e7_title": "Moving Forward",
  "s1_e7_text": "Another step with new moments, conversations and behind-the-scenes views.",
  "s2_heading": "Vlog Series · Season 2",
  "s2_lead": "The next stage — more material, more experience and more storytelling.",
  "s2_teaser_title": "Season 2 Teaser",
  "s2_teaser_text": "A first look at the next stage.",
  "s2_e1_title": "Season 2 · Episode 1",
  "s2_e1_text": "The new season starts with fresh impressions and first moments.",
  "s2_e2_title": "Season 2 · Episode 2",
  "s2_e2_text": "New places, new conversations and a deeper look at the journey.",
  "s2_e3_title": "Season 2 · Episode 3",
  "s2_e3_text": "More atmosphere, more action and more insights.",
  "s2_e4_title": "Season 2 · Episode 4",
  "s2_e4_text": "The journey gets more exciting and the impressions more personal.",
  "s2_e5_title": "Season 2 · Episode 5",
  "s2_e5_text": "An episode with lots of energy and many new moments.",
  "s2_e6_title": "Season 2 · Episode 6",
  "s2_e6_text": "A finale with many memories and material for the next chapter.",
  "education_label": "EDUCATION",
  "education_title": "The path so far.",
  "education_lead": "From the early builds to the current HTL version — the complete timeline.",
  "edu_htl_text": "Technical education focused on IT, software development and media.",
  "edu_htl_joke": "Current build — debugging in progress.",
  "edu_apprentice_title": "Mechatronics Apprenticeship",
  "edu_apprentice_text": "Technical hands-on experience and insight into mechatronic systems.",
  "edu_apprentice_joke": "Hardware branch unlocked.",
  "edu_poly_text": "Orientation and preparation for the next technical step.",
  "edu_poly_joke": "Technical path selected.",
  "edu_middle_title": "Neue Mittelschule Wagram am Wagram & Fels am Wagram",
  "edu_middle_text": "The school years where the foundation for the next technical steps was built.",
  "edu_middle_joke": "System upgrade in progress...",
  "edu_primary_text": "The basics: reading, writing, maths and a lot of curiosity.",
  "edu_primary_joke": "Core skills unlocked: Reading, Writing & Math.",
  "edu_kindergarten_text": "The very early build. Mostly learning how the world works.",
  "edu_kindergarten_joke": "Version 0.1 — Pre-Alpha Development Phase.",
  "contact_label": "CONTACT",
  "contact_title": "Say hello.",
  "contact_lead": "For projects, feedback, collaboration or simply a message. No need to publish private contact details for that.",
  "contact_get_in_touch": "GET IN TOUCH",
  "contact_form_title": "Send a message",
  "contact_form_text": "Use the form or one of the public profiles below.",
  "form_firstname": "First name",
  "form_lastname": "Last name",
  "form_email": "Email",
  "form_message": "Message",
  "form_placeholder": "What's on your mind?",
  "form_submit": "Send message",
  "form_sending": "Sending...",
  "form_success": "Message sent. Thank you!",
  "form_error": "Something went wrong. Please try again.",
  "download_label": "DOWNLOAD",
  "download_title": "CV & links.",
  "download_lead": "A compact place for documents and public profiles. This page is intentionally not part of the main navigation.",
  "download_cv_title": "Curriculum Vitae",
  "download_cv_text": "If the PDF exists in your downloads folder, you can open it here.",
  "download_cv_button": "Open CV →",
  "download_linkedin_text": "For the current public professional profile.",
  "download_linkedin_button": "Open LinkedIn →",
  "download_youtube_text": "To the official YouTube channel.",
  "download_youtube_button": "Open YouTube →",
  "download_tiktok_text": "To the official TikTok channel.",
  "download_tiktok_button": "Open TikTok →",
  "cert_label": "CERTIFICATES",
  "cert_title": "Proof beats progress bars.",
  "cert_lead": "Certificates and completed courses can live here once they are ready to be shown publicly.",
  "cert_coming_title": "Coming soon",
  "cert_coming_text": "This section is prepared for future certificates without inventing achievements that are not there yet.",
  "error_title": "Page not found.",
  "error_text": "Looks like this route did not compile.",
  "error_button": "Back Home →",
  "brand_subtitle": "DEVELOPER · CREATOR",
  "debug_label": "STILL_DEBUGGING",
  "status_open": "OPEN",
  "status_warning": "WARNING",
  "status_learning": "LEARNING",
  "skills_workflow_title": "Build → Test → Improve",
  "game_title": "Game Development"
},
  de: {
  "title_home": "Jakob Maroufi | MJError404",
  "title_about": "Über mich | Jakob Maroufi",
  "title_skills": "Fähigkeiten | Jakob Maroufi",
  "title_projects": "Projekte | Jakob Maroufi & MJError404",
  "title_education": "Ausbildung | Jakob Maroufi",
  "title_contact": "Kontakt | Jakob Maroufi",
  "title_download": "Download | Jakob Maroufi",
  "title_certificates": "Zertifikate | Jakob Maroufi",
  "title_404": "404 | MJError404",
  "nav_open": "Navigation öffnen",
  "nav_label": "Hauptnavigation",
  "language_switch": "Sprache wechseln",
  "nav_home": "Startseite",
  "nav_about": "Über mich",
  "nav_skills": "Fähigkeiten",
  "nav_projects": "Projekte",
  "nav_education": "Ausbildung",
  "nav_certificates": "Zertifikate",
  "nav_contact": "Kontakt →",
  "footer_role": "Entwickler · Filmemacher · Kreativer",
  "footer_projects": "Projekte",
  "footer_contact": "Kontakt",
  "footer_copyright": "© 2026 Jakob Maroufi · MJDebugLife",
  "home_eyebrow": "ENTWICKLER · FILMEMACHER · CREATOR",
  "home_title": "Ich entwickle digitale<br>Dinge, die<br><span>etwas bewirken.</span>",
  "home_intro": "Ich bin <strong>Jakob Maroufi</strong> — HTL-Schüler aus Österreich und verbinde Webentwicklung, Film und kreative Technologien.",
  "home_work": "Meine Projekte →",
  "home_about_button": "Über mich",
  "home_stat_projects": "Projekte",
  "home_stat_projects_sub": "Code · Medien · Web",
  "home_stat_htl_sub": "Informatik · Krems",
  "home_stat_learning": "Immer",
  "home_stat_learning_sub": "am Lernen",
  "home_feature_problem": "✓ Problemlöser",
  "home_feature_creative": "✓ Kreativ",
  "home_feature_debug": "✓ Noch am Debuggen",
  "terminal_init": "&gt; <span class=\"terminal-accent\">initialisiere</span> portfolio.exe",
  "terminal_skills": "> lade Fähigkeiten...",
  "terminal_projects": "> lade Projekte...",
  "terminal_build": "> erschaffe neue Dinge...",
  "terminal_ready": "> status: BEREIT",
  "home_error_text": "langweiliges Portfolio<br>nicht gefunden",
  "home_projects_label": "AUSGEWÄHLTE PROJEKTE",
  "home_projects_heading": "Dinge, die ich erschaffen habe.",
  "home_projects_all": "Alle Projekte ansehen →",
  "home_science_type": "Film & Video",
  "home_science_text": "Vlogs, Wissenschaft, Behind-the-Scenes-Momente und Storytelling.",
  "home_science_button": "Projekt ansehen →",
  "home_krems_type": "Filmische Clips",
  "home_krems_text": "Kameraarbeit, Schnitt und filmisches Storytelling alles in einem Platz.",
  "home_krems2_type": "Filmische Clips",
  "home_krems2_text": "Vlogs, Science-Academy, behind-the-scenes momente und Geschichtenerzählung.",
  "home_krems_button": "Projekt ansehen →",
  "home_portfolio_type": "Webentwicklung",
  "home_portfolio_title": "Portfolio-Website",
  "home_portfolio_text": "Genau diese Website — gebaut mit HTML, CSS und JavaScript.",
  "home_portfolio_button": "Du bist schon hier :)",
  "home_about_label": "ÜBER MICH",
  "home_about_heading": "Lern mich kennen.",
  "home_about_text_1": "Ich bin Jakob, IT-Schüler aus Österreich mit einer Leidenschaft für Softwareentwicklung, Film und digitale Medien.",
  "home_about_text_2": "Ich liebe es, Ideen in echte Projekte umzusetzen — auch wenn daraus gelegentlich größere Sidequests werden als geplant.",
  "home_about_more": "Mehr über mich →",
  "pill_problem": "Problemlöser",
  "pill_team": "Teamplayer",
  "pill_creative": "Kreativ",
  "pill_learning": "Lerne ständig dazu",
  "pill_sidequest": "Sidequest-Sammler",
  "home_skills_label": "KERNKOMPETENZEN",
  "home_skills_heading": "Technologien, mit denen ich arbeite.",
  "home_skills_more": "Alle Fähigkeiten ansehen →",
  "home_contact_heading": "Hast du etwas im Kopf?",
  "home_contact_text": "Lass uns gemeinsam etwas Interessantes erschaffen.",
  "home_contact_button": "Kontakt aufnehmen →",
  "about_label": "ÜBER MICH",
  "about_title": "Technik im Kopf.<br>Kamera in der Hand.",
  "about_lead": "Ich mag Projekte, bei denen Code, Medien und Kreativität zusammenarbeiten, statt in getrennten Boxen zu leben.",
  "about_intro_label": "HEY, ICH BIN JAKOB",
  "about_intro_title": "Macher, Tüftler und ziemlich neugierig.",
  "about_intro_text_1": "Ich bin ein technikfokussierter HTL-Schüler mit starkem Interesse an Webentwicklung, Software, Mediengestaltung und kreativen Technikprojekten. Game Development steht auf meiner Lernliste — aber erst dann bei den Skills, wenn ich wirklich etwas damit gebaut habe.",
  "about_intro_text_2": "Ich arbeite gern lösungsorientiert, experimentiere viel und lerne am liebsten durchs Machen. Genau daraus ist auch MJError404 entstanden: als Ort für Videos, kreative Experimente und Projekte rund um Technik und Medien.",
  "about_stat_media": "Medien",
  "about_stat_projects": "Projekte",
  "strengths_label": "STÄRKEN",
  "strengths_title": "Was ich in Projekte mitbringe.",
  "strength_fighter_title": "Kämpfermentalität",
  "strength_fighter_text": "Wenn etwas nicht funktioniert, ist meine erste Reaktion eher „nochmal“ als „egal“.",
  "strength_problem_title": "Problemlösung",
  "strength_problem_text": "Komplexe Aufgaben zerlegen, Ideen testen und Schritt für Schritt zu einer funktionierenden Lösung kommen.",
  "strength_initiative_title": "Eigeninitiative",
  "strength_initiative_text": "Ideen werden schnell zu Prototypen, Experimenten oder ganzen Projekten, statt für immer in einer Notiz-App zu bleiben.",
  "strength_creative_title": "Kreativität + Technik",
  "strength_creative_text": "Technik soll funktionieren — sie darf aber auch gut aussehen, Spaß machen und eine Geschichte erzählen.",
  "debug_title": "Niemand veröffentlicht ohne Bugs.",
  "debug_intro": "Ein paar Dinge, an denen Version Jakob.exe noch arbeitet.",
  "debug_perfection_title": "Perfektionismus",
  "debug_perfection_text": "Ich kann zu lange an Details feilen. Ich lerne, wann „gut und fertig“ besser ist als noch eine Stunde Feinschliff.",
  "debug_perfection_note": "Fix in Arbeit...",
  "debug_overthink_title": "Overthinking",
  "debug_overthink_text": "Manchmal wird aus einem kleinen Problem eine komplette Sidequest. Erster Check: Gibt es eine einfachere Lösung?",
  "debug_overthink_note": "Gedanken werden refactored...",
  "debug_sidequests_title": "Zu viele Sidequests",
  "debug_sidequests_text": "Neue Ideen werden sehr schnell zu neuen Projekten. Die Main Quest zu priorisieren, wird noch verbessert.",
  "debug_sidequests_note": "Task-Manager erforderlich.",
  "debug_experience_title": "Erfahrung",
  "debug_experience_text": "Es gibt noch viele Technologien, die ich lernen will. Der Plan ist simpel: bauen, testen, wiederholen.",
  "debug_experience_note": "Updates werden installiert...",
  "skills_label": "FÄHIGKEITEN",
  "skills_title": "Tools sind Mittel.<br>Projekte sind das Ziel.",
  "skills_lead": "Keine erfundenen 87%-Skillbars. Lieber ehrlich zeigen, womit ich arbeite und wo ich noch lerne.",
  "skills_dev_label": "ENTWICKLUNG",
  "skills_web_title": "Webentwicklung",
  "skills_web_text": "Grundlagen und praktische Projekte rund um moderne Websites.",
  "skill_responsive": "Responsives Design",
  "skills_code_label": "SOFTWARE",
  "skills_code_text": "Objektorientierte Programmierung, Collections, Persistenz, Datenbanken und praktische Schulprojekte.",
  "skills_creative_label": "KREATIV",
  "skills_media_title": "Medien & Video",
  "skills_media_text": "Videos planen, filmen, schneiden und für unterschiedliche Plattformen aufbereiten.",
  "skill_editing": "Videoschnitt",
  "skill_filming": "Filmen",
  "skill_shortform": "Kurzformat-Content",
  "skill_media_design": "Mediendesign",
  "skills_workflow_label": "WORKFLOW",
  "skills_workflow_text": "Ich lerne am meisten, wenn aus Theorie ein echtes Projekt wird.",
  "skill_research": "Recherche",
  "skill_iteration": "Iteration",
  "skill_teamwork": "Teamarbeit",
  "game_aria": "Game Development – Demnächst",
  "game_tape_top": "ERROR 404 · GESPERRT · DEMNÄCHST · ERROR 404 · GESPERRT · DEMNÄCHST ·",
  "game_soon": "DEMNNÄCHST",
  "game_text": "Noch kein aktiver Skill. Das gehört erst hierher, wenn ich wirklich damit gearbeitet und etwas gebaut habe.",
  "game_status": "ERROR 404: SKILL NICHT GEFUNDEN",
  "game_tape_bottom": "LERN-WARTESCHLANGE · NOCH NICHT BEHAUPTEN · LERN-WARTESCHLANGE · NOCH NICHT BEHAUPTEN ·",
  "projects_label": "PROJEKTE",
  "projects_title": "Code, Kamera<br>& kontrolliertes Chaos.",
  "projects_lead": "Eine Auswahl an Videos, Clips und Projekten. Nicht alles ist perfekt — aber alles gehört zur Entwicklung.",
  "proj_sunset_title": "Sonnenuntergang",
  "proj_sunset_text": "Ein atmosphärischer Zusammenschnitt verschiedener Sonnenuntergänge.",
  "proj_htl_title": "HTL am Abend",
  "proj_htl_text": "Abendliche Aufnahmen der HTL Krems als kurzer visueller Edit.",
  "proj_park_title": "Stadtpark Krems",
  "proj_park_text": "Eine kleine Tour durch den Stadtpark Krems — gefilmt und geschnitten als Mini-Vlog.",
  "s1_heading": "Vlog-Serie · Staffel 1",
  "s1_lead": "Teaser, Episoden und die Entwicklung einer Vlog-Serie rund um Wissenschaft, Technologie und neue Erfahrungen.",
  "s1_teaser_title": "Staffel-1-Teaser",
  "s1_teaser_text": "Der erste Blick auf die Science-Academy-Reise.",
  "s1_e1_title": "Willkommen",
  "s1_e1_text": "Der Beginn einer Reise in eine Welt aus Wissenschaft, Technologie und neuen Möglichkeiten.",
  "s1_e2_title": "Biotech & Futurelab",
  "s1_e2_text": "Neue Umgebung, neue Menschen und Einblicke in Biotechnologie und Futurelab.",
  "s1_e3_title": "Rückkehr",
  "s1_e3_text": "Zurück im bekannten Terrain — aber mit neuen Ecken, neuen Momenten und mehr Energie.",
  "s1_e4_title": "KI & Wir",
  "s1_e4_text": "Ein neuer Gebäudeteil, neue Perspektiven und ein Tag rund um KI und Entdeckung.",
  "s1_e5_title": "Behind the Scenes",
  "s1_e5_text": "Gespräche, Eindrücke und ein Blick hinter die Kulissen der Science-Academy-Reise.",
  "s1_e6_title": "Neue Wege",
  "s1_e6_text": "Weitere Eindrücke aus dem Alltag der Science Academy.",
  "s1_e7_title": "Weitergehen",
  "s1_e7_text": "Ein weiterer Schritt mit neuen Momenten, Gesprächen und Blicken hinter die Kulissen.",
  "s2_heading": "Vlog-Serie · Staffel 2",
  "s2_lead": "Die nächste Etappe — mehr Material, mehr Erfahrung und mehr Storytelling.",
  "s2_teaser_title": "Staffel-2-Teaser",
  "s2_teaser_text": "Ein erster Blick auf die nächste Etappe.",
  "s2_e1_title": "Staffel 2 · Folge 1",
  "s2_e1_text": "Der Start der neuen Staffel mit frischen Eindrücken und ersten Momenten.",
  "s2_e2_title": "Staffel 2 · Folge 2",
  "s2_e2_text": "Neue Orte, neue Gespräche und ein intensiverer Blick auf die Reise.",
  "s2_e3_title": "Staffel 2 · Folge 3",
  "s2_e3_text": "Mehr Atmosphäre, mehr Action und mehr Einblicke.",
  "s2_e4_title": "Staffel 2 · Folge 4",
  "s2_e4_text": "Der Weg wird spannender und die Eindrücke persönlicher.",
  "s2_e5_title": "Staffel 2 · Folge 5",
  "s2_e5_text": "Eine Episode mit viel Energie und vielen neuen Momenten.",
  "s2_e6_title": "Staffel 2 · Folge 6",
  "s2_e6_text": "Ein Abschluss mit vielen Erinnerungen und Material für das nächste Kapitel.",
  "education_label": "AUSBILDUNG",
  "education_title": "Der Weg bis hierher.",
  "education_lead": "Von den frühen Builds bis zur aktuellen HTL-Version — die komplette Timeline.",
  "edu_htl_text": "Technische Ausbildung mit Schwerpunkt Informatik, Softwareentwicklung und Medien.",
  "edu_htl_joke": "Aktueller Build — Debugging läuft.",
  "edu_apprentice_title": "Lehre Mechatronik",
  "edu_apprentice_text": "Technische Praxiserfahrung und Einblick in mechatronische Systeme.",
  "edu_apprentice_joke": "Hardware-Branch freigeschaltet.",
  "edu_poly_text": "Orientierung und Vorbereitung auf den weiteren technischen Ausbildungsweg.",
  "edu_poly_joke": "Technischer Pfad ausgewählt.",
  "edu_middle_title": "Neue Mittelschule Wagram am Wagram & Fels am Wagram",
  "edu_middle_text": "Die Schuljahre, in denen die Grundlage für die nächsten technischen Schritte gelegt wurde.",
  "edu_middle_joke": "System-Upgrade läuft...",
  "edu_primary_text": "Die Basics: Lesen, Schreiben, Mathematik und jede Menge Neugier.",
  "edu_primary_joke": "Core Skills freigeschaltet: Lesen, Schreiben & Mathe.",
  "edu_kindergarten_text": "Der sehr frühe Build. Hauptsächlich lernen, wie die Welt funktioniert.",
  "edu_kindergarten_joke": "Version 0.1 — Pre-Alpha-Entwicklungsphase.",
  "contact_label": "KONTAKT",
  "contact_title": "Sag Hallo.",
  "contact_lead": "Für Projekte, Feedback, Zusammenarbeit oder einfach eine Nachricht. Dafür müssen keine privaten Kontaktdaten offen im Internet stehen.",
  "contact_get_in_touch": "MELD DICH",
  "contact_form_title": "Nachricht senden",
  "contact_form_text": "Nutze das Formular oder eines der öffentlichen Profile darunter.",
  "form_firstname": "Vorname",
  "form_lastname": "Nachname",
  "form_email": "E-Mail",
  "form_message": "Nachricht",
  "form_placeholder": "Worum geht's?",
  "form_submit": "Nachricht senden",
  "form_sending": "Wird gesendet...",
  "form_success": "Nachricht gesendet. Danke!",
  "form_error": "Etwas ist schiefgelaufen. Bitte versuch es noch einmal.",
  "download_label": "DOWNLOAD",
  "download_title": "Lebenslauf & Links.",
  "download_lead": "Ein kompakter Ort für Dokumente und öffentliche Profile. Diese Seite ist absichtlich nicht in der Hauptnavigation.",
  "download_cv_title": "Lebenslauf",
  "download_cv_text": "Wenn die PDF in deinem downloads-Ordner liegt, kannst du sie hier öffnen.",
  "download_cv_button": "Lebenslauf öffnen →",
  "download_linkedin_text": "Zum aktuellen öffentlichen beruflichen Profil.",
  "download_linkedin_button": "LinkedIn öffnen →",
  "download_youtube_text": "Zum offiziellen YouTube-Kanal.",
  "download_youtube_button": "YouTube öffnen →",
  "download_tiktok_text": "Zum offiziellen TikTok-Kanal.",
  "download_tiktok_button": "TikTok öffnen →",
  "cert_label": "ZERTIFIKATE",
  "cert_title": "Nachweise statt Prozentbalken.",
  "cert_lead": "Zertifikate und abgeschlossene Kurse können hier landen, sobald sie öffentlich gezeigt werden sollen.",
  "cert_coming_title": "Demnächst",
  "cert_coming_text": "Dieser Bereich ist für zukünftige Zertifikate vorbereitet, ohne Leistungen zu erfinden, die noch nicht da sind.",
  "error_title": "Seite nicht gefunden.",
  "error_text": "Sieht so aus, als wäre diese Route nicht kompiliert.",
  "error_button": "Zur Startseite →",
  "brand_subtitle": "ENTWICKLER · KREATIVER",
  "debug_label": "NOCH_IN_ARBEIT",
  "status_open": "OFFEN",
  "status_warning": "WARNUNG",
  "status_learning": "LERNPHASE",
  "skills_workflow_title": "Bauen → Testen → Verbessern",
  "game_title": "Spieleentwicklung"
}
};

const DEFAULT_LANGUAGE =
  navigator.language && navigator.language.toLowerCase().startsWith("de")
    ? "de"
    : "en";

let currentLanguage = localStorage.getItem("mj-language") || DEFAULT_LANGUAGE;

function t(key) {
  return translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
}

function setLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;
  document.documentElement.lang = language;
  localStorage.setItem("mj-language", language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = translations[language][element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = translations[language][element.dataset.i18nPlaceholder];
    if (value !== undefined) element.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = translations[language][element.dataset.i18nAriaLabel];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll(".language-toggle").forEach((toggle) => {
    toggle.querySelectorAll("[data-lang-label]").forEach((option) => {
      option.classList.toggle("active", option.dataset.langLabel === language);
    });
  });
}

function initLanguageSwitch() {
  document.querySelectorAll(".language-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      setLanguage(currentLanguage === "de" ? "en" : "de");
    });
  });

  setLanguage(currentLanguage);
}

function initMobileNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initActiveNav() {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http")) return;
    link.classList.toggle("active", href === currentFile);
  });
}

function initReveal() {
  const elements = [...document.querySelectorAll(".reveal")];

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
  );

  elements.forEach((element) => observer.observe(element));
}

function initSpotlights() {
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    });
  });
}

function initTerminalTilt() {
  const card = document.querySelector(".hero-terminal");
  if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.setProperty("--tilt-y", `${x * 5}deg`);
    card.style.setProperty("--tilt-x", `${-y * 4}deg`);
    card.classList.add("is-tilting");
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--tilt-x", "0deg");
    card.classList.remove("is-tilting");
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (!form || !message) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submit = form.querySelector(".form-submit");
    const originalDisabled = submit?.disabled ?? false;

    message.className = "form-message";
    message.textContent = t("form_sending");
    if (submit) submit.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Formspree request failed");

      form.reset();
      message.className = "form-message form-success";
      message.textContent = t("form_success");
    } catch (error) {
      message.className = "form-message form-error";
      message.textContent = t("form_error");
    } finally {
      if (submit) submit.disabled = originalDisabled;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitch();
  initMobileNavigation();
  initActiveNav();
  initReveal();
  initSpotlights();
  initTerminalTilt();
  initContactForm();
});
