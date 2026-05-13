// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light' && themeIcon) {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// --- Multi-language Support ---
const translations = {
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            greeting: "Hello, I'm <span>Mohammed Oumare Mohammed</span>",
            typing_text: " B.Sc. Computer Science  ",
            view_work: "View My Work",
            contact_me: "Contact Me"
        },
        about: {
            title: 'About Me',
            description: `My name is Mohammed Oumare Mohammed, a Bachelor of Science in Computer Science student at Dilla University (GPA: 3.01/4.0). 
                          I have built a rigorous foundation in computational theory and software engineering, specializing in designing efficient algorithms 
                          and building scalable system architectures. As a Dean's List student and active Tech Club member, I also bring a creative edge 
                          to my work, developing websites, editing videos, designing logos, and editing photos.`
        },
        skills: {
            title: 'Technical Skills',
            programming: 'Programming Languages',
            web: 'Web Technologies',
            tools: 'Tools & Platforms',
            concepts: 'Concepts',
            design: 'Design & Multimedia',
            graphic_design: 'Graphic Design',
            logo_design: 'Logo Design',
            video_editing: 'Video Editing',
            multimedia: 'Multimedia'
        },
        education: {
            title: 'Education',
            degree: 'Bachelor of Science in Computer Science',
            uni: 'Dilla University, Ethiopia',
            desc: 'Acquiring a rigorous foundation in computational theory and software engineering. Specialized in designing efficient algorithms, managing complex databases, and building scalable system architectures while participating in competitive programming.',
            gpa: 'GPA: 3.01/4.0',
            deans: "Dean's List",
            member: 'Tech Club Member'
        },
        certifications: {
            title: 'Certifications',
            prog: 'Programming Fundamentals',
            dsa: 'Data Structures & Algorithms',
            oop: 'Object-Oriented Programming'
        },
        tools: {
            title: 'Development Tools',
            intellij: 'IntelliJ IDEA',
            netbeans: 'NetBeans',
            anaconda: 'Anaconda',
            jupyter: 'Jupyter',
            capcut: 'CapCut',
            photoshop: 'Photoshop',
            illustrator: 'Illustrator',
            premiere: 'Premiere Pro'
        },
        projects: {
            title: 'Projects'
        },
        project1: {
            title: 'Quiz Application',
            description: 'Simple quiz system using Java, JavaFX, HTML and CSS.'
        },
        project2: {
            title: 'Dormitory Management System',
            description: 'Java, JavaFX, FXML, CSS and PostgreSQL project for managing student dormitory records.'
        },
        project3: {
            title: 'Student Management System',
            description: `Student management project developed using C++ and Data Structures.
                          The system supports adding, searching, updating and deleting student records.`
        },
        project: {
            view_project: 'View Project'
        },
        contact: {
            title: 'Contact Me',
            email_label: 'Email:',
            phone_label: 'Phone:',
            telegram_label: 'Telegram:'
        },
        footer: {
            copyright: '<p>© 2026 Mohammed Oumare Mohammed. All rights reserved.</p>'
        },
        languages: {
            title: 'Languages',
            english: 'English',
            amharic: 'Amharic',
            oromo: 'Afaan Oromo',
            intermediate: 'Intermediate',
            native: 'Native'
        },
        interests: {
            title: 'Interests',
            software: 'Software Development',
            software_desc: 'Passionate about building efficient and scalable software solutions',
            system: 'System Design',
            system_desc: 'Designing robust and maintainable system architectures',
            algorithms: 'Algorithm Problem Solving',
            algorithms_desc: 'Enjoy tackling complex algorithmic challenges and optimization'
        }
    },
    om: {
        nav: {
            about: 'Waa\'ee Koo',
            skills: 'Dandeettii',
            projects: 'Piroojektoota',
            contact: 'Quunnamtii'
        },
        hero: {
            greeting: "Akkam, Ani <span>Mohammed Oumare Mohammed</span>",
            typing_text: "Barataa Saayinsii Kompiitaraa Ta\'uuf Hawwu",
            view_work: "Hojii Koo Ilaali",
            contact_me: "Na Quunnami"
        },
        about: {
            title: 'Waa\'ee Koo',
            description: `Maqaan koo Mohammed Oumare Mohammed. Ani barataa Digirii Jalqabaa Saayinsii Kompiitaraa Yuunivarsiitii Diillaati (GPA: 3.01/4.0). 
                          Tiyoorii kompiitaraa fi injinariingii sooftiweerii irratti bu'uura cimaa qaba; keessattuu al-gooriizimii dizaayinuu fi 
                          arkiiteektura sirnaa ijaaruu irratti xiyyeeffadha. Miseensa Kilaba Teek fi barataa galmee 'Dean's List' yoon ta'u, 
                          dabalataan weebii nan gabbisa, viidiyoowwan nan gulaala, loogoo nan hojjadha fi fakkii nan gulaala.`
        },
        skills: {
            title: 'Dandeettii Tekniikaa',
            programming: 'Afaanota Sagantaa',
            web: 'Teknooloojiiwwan Weebii',
            tools: 'Meeshaalee fi Pilaatfoormiiwwan',
            concepts: 'Yaad-rimeewwan',
            design: 'Dizaayinii fi Maltimiidiyaa',
            graphic_design: 'Dizaayinii Girafiksii',
            logo_design: 'Dizaayinii Loogoo',
            video_editing: 'Viidiyoovvwan Gulaaluu',
            multimedia: 'Maltimiidiyaa'
        },
        education: {
            title: 'Barnoota',
            degree: 'Digirii Jalqabaa Saayinsii Kompiitaraa',
            uni: 'Yuunivarsiitii Diillaa, Itoophiyaa',
            desc: 'Tiyoorii kompiitaraa fi injinariingii sooftiweerii irratti bu\'uura cimaa argachaa jira. Al-gooriizimii gahumsa qaban dizaayinuu, kuusaa daataa walxaxaa bulchuun fi arkiiteektura sirnaa bal\'achuu danda\'an ijaaruu irratti xiyyeeffadha.',
            gpa: 'GPA: 3.01/4.0',
            deans: "Dean's List",
            member: 'Miseensa Kilaba Teek'
        },
        certifications: {
            title: 'Waraqaa Ragaa',
            prog: 'Bu\'uura Sagantaa',
            dsa: 'Madaallii Daataa fi Al-gooriizimii',
            oop: 'Object-Oriented Programming'
        },
        tools: {
            title: 'Meeshaalee Gabbisaa',
            intellij: 'IntelliJ IDEA',
            netbeans: 'NetBeans',
            anaconda: 'Anaconda',
            jupyter: 'Jupyter',
            capcut: 'CapCut',
            photoshop: 'Photoshop',
            illustrator: 'Illustrator',
            premiere: 'Premiere Pro'
        },
        projects: {
            title: 'Piroojektoota'
        },
        project1: {
            title: 'Appilikeeshinii Qormaataa',
            description: 'Sirna qormaataa salphaa Jaavaa, JaavaaFX, HTML fi CSS fayyadamuun hojjetame.'
        },
        project2: {
            title: 'Sirna Bulchiinsa Mana Barattootaa',
            description: 'Piroojektii Jaavaa, JaavaaFX, FXML, CSS fi PostgreSQL fayyadamuun galmeewwan mana barattootaa bulchuuf hojjetame.'
        },
        project3: {
            title: 'Sirna Bulchiinsa Barattootaa',
            description: `Piroojektii bulchiinsa barattootaa C++ fi Data Structures fayyadamuun hojjetame.
                          Sirni kun galmeewwan barattootaa dabaluu, barbaaduu, fooyyessuu fi haquu deeggara.`
        },
        project: {
            view_project: 'Piroojektii Ilaali'
        },
        contact: {
            title: 'Na Quunnami',
            email_label: 'Imeelii:',
            phone_label: 'Bilbila:',
            telegram_label: 'Telegraamii:'
        },
        footer: {
            copyright: '<p>© 2026 Mohammed Oumare Mohammed. Mirgoonni hunduu kan eegamanidha.</p>'
        },
        languages: {
            title: 'Afaanota',
            english: 'Ingilizii',
            amharic: 'Amaaraa',
            oromo: 'Afaan Oromoo',
            intermediate: 'Giddu-galeessa',
            native: 'Dhalootaan'
        },
        interests: {
            title: 'Fedhiiwwan',
            software: 'Gabbisa Sooftiweerii',
            software_desc: 'Sooftiweerii gahumsa qabuu fi guddachuu danda\'u ijaaruu irratti xiyyeeffadha',
            system: 'Dizaayinii Sirnaa',
            system_desc: 'Arkiiteektura sirnaa jabaa fi suphamuun danda\'amu dizaayinuu',
            algorithms: 'Rakkoo Algoriizimii Hiikuu',
            algorithms_desc: 'Mormiiwwan algoriizimii walxaxaa fi fooyya\'iinsa irratti hojjechuu nan jaalladha'
        }
    },
    am: {
        nav: {
            about: 'ስለ እኔ',
            skills: 'ክህሎቶች',
            projects: 'ፕሮጀክቶች',
            contact: 'አድራሻ'
        },
        hero: {
            greeting: "ሰላም፣ እኔ <span>መሐመድ ኡመር መሐመድ</span> ነኝ",
            typing_text: "የኮምፒውተር ሳይንስ ተማሪ ",
            view_work: "ስራዎቼን ይመልከቱ",
            contact_me: "ያግኙኝ"
        },
        about: {
            title: 'ስለ እኔ',
            description: `መሐመድ ኡመር መሐመድ እባላለሁ። በዲላ ዩኒቨርሲቲ የኮምፒውተር ሳይንስ የመጀመሪያ ዲግሪ ተማሪ ነኝ (GPA: 3.01/4.0)። 
                          በኮምፒውተር ቲዎሪ እና በሶፍትዌር ኢንጂነሪንግ ላይ ጥልቅ መሰረት ያለኝ ሲሆን ቀልጣፋ አልጎሪዝም በመንደፍ እና ሊለኩ የሚችሉ የስርዓት ግንባታዎች ላይ ትኩረት አደርጋለሁ። 
                          የቴክ ክለብ አባል እና የዲን ዝርዝር (Dean's List) ተማሪ ስሆን፣ በተጨማሪም ዌብሳይቶችን አዘጋጃለሁ፣ ቪዲዮዎችን አቀናብራለሁ፣ ሎጎዎችን እሰራለሁ እንዲሁም ፎቶዎችን አቀናብራለሁ።`
        },
        skills: { 
            title: 'ቴክኒካዊ ክህሎቶች',
            programming: 'የፕሮግራሚንግ ቋንቋዎች',
            web: 'የዌብ ቴክኖሎጂዎች',
            tools: 'መሳሪያዎች እና ፕላትፎርሞች',
            concepts: 'ጽንሰ-ሀሳቦች',
            design: 'ዲዛይን እና መልቲሚዲያ',
            graphic_design: 'የግራፊክ ዲዛይን',
            logo_design: 'የሎጎ ዲዛይን',
            video_editing: 'የቪዲዮ ኤዲቲንግ',
            multimedia: 'መልቲሚዲያ'
        },
        education: {
            title: 'ትምህርት',
            degree: 'በኮምፒውተር ሳይንስ የመጀመሪያ ዲግሪ',
            uni: 'ዲላ ዩኒቨርሲቲ፣ ኢትዮጵያ',
            desc: 'በኮምፒውተር ቲዎሪ እና በሶፍትዌር ኢንጂነሪንግ ላይ ጥልቅ መሰረት በማግኘት ላይ። ቀልጣፋ አልጎሪዝም በመንደፍ፣ ውስብስብ የዳታቤዝ አስተዳደር እና ሊለኩ የሚችሉ የስርዓት ግንባታዎች ላይ ትኩረት በማድረግ በፉክክር ፕሮግራሚንግ ላይ ይሳተፋል።',
            gpa: 'GPA: 3.01/4.0',
            deans: 'የዲን ዝርዝር',
            member: 'የቴክ ክለብ አባል'
        },
        certifications: {
            title: 'የምስክር ወረቀቶች',
            prog: 'የፕሮግራሚንግ መሰረታዊ ነገሮች',
            dsa: 'ዳታ ስትራክቸር እና አልጎሪዝም',
            oop: 'ኦብጀክት ኦሪየንትድ ፕሮግራሚንግ'
        },
        tools: {
            title: 'የልማት መሳሪያዎች',
            intellij: 'IntelliJ IDEA',
            netbeans: 'NetBeans',
            anaconda: 'Anaconda',
            jupyter: 'Jupyter',
            capcut: 'CapCut',
            photoshop: 'Photoshop',
            illustrator: 'Illustrator',
            premiere: 'Premiere Pro'
        },
        projects: { title: 'ፕሮጀክቶች' },
        project1: {
            title: 'የጥያቄ መተግበሪያ',
            description: 'በJava፣ JavaFX፣ HTML እና CSS የተሰራ ቀላል የጥያቄ መተግበሪያ።'
        },
        project2: {
            title: 'የዶርም አስተዳደር ስርዓት',
            description: 'የተማሪዎችን የዶርም መረጃ ለማስተዳደር በJava፣ JavaFX፣ FXML፣ CSS እና PostgreSQL የተሰራ ፕሮጀክት።'
        },
        project3: {
            title: 'የተማሪዎች አስተዳደር ስርዓት',
            description: 'በC++ እና በዳታ ስትራክቸር የተሰራ የተማሪዎች አስተዳደር ፕሮጀክት።'
        },
        project: { view_project: 'ፕሮጀክቱን ይመልከቱ' },
        contact: {
            title: 'ያግኙኝ',
            email_label: 'ኢሜይል:',
            phone_label: 'ስልክ:',
            telegram_label: 'ቴሌግራም:'
        },
        footer: {
            copyright: '<p>© 2026 መሐመድ ኡመር መሐመድ። መብቱ በህግ የተጠበቀ ነው።</p>'
        },
        languages: {
            title: 'ቋንቋዎች',
            english: 'እንግሊዘኛ',
            amharic: 'አማርኛ',
            oromo: 'አፋን ኦሮሞ',
            intermediate: 'መካከለኛ',
            native: 'የአፍ መፍቻ',
        },
        interests: {
            title: 'ፍላጎቶች',
            software: 'የሶፍትዌር ልማት',
            software_desc: 'ቀልጣፋ እና ሊለኩ የሚችሉ የሶፍትዌር መፍትሄዎችን ለመገንባት ፍላጎት አለኝ',
            system: 'የስርዓት ንድፍ',
            system_desc: 'ጠንካራ እና ሊጠበቁ የሚችሉ የስርዓት አርክቴክቶችን መንደፍ',
            algorithms: 'የአልጎሪዝም ችግር መፍታት',
            algorithms_desc: 'ውስብስብ የአልጎሪዝም ፈተናዎችን እና ማመቻቸትን መፍታት ያስደስተኛል'
        }
    }
};

const typingElement = document.getElementById('typing');
let index = 0;
let currentTypingText = "";
let typingTimeout;

function type() {
    if (index < currentTypingText.length) {
        typingElement.innerHTML += currentTypingText.charAt(index); // Use innerHTML for potential spans/tags
        index++;
        typingTimeout = setTimeout(type, 100);
    }
}

function resetTypewriter(textToType) {
    clearTimeout(typingTimeout);
    typingElement.innerHTML = '';
    index = 0;
    currentTypingText = textToType;
    type();
}

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translatedText = translations[lang];
        for (const k of keys) {
            translatedText = translatedText ? translatedText[k] : null;
        }
        if (translatedText) {
            element.innerHTML = translatedText;
        }
    });

    // Update typewriter text
    resetTypewriter(translations[lang].hero.typing_text);

    // Update active class for language buttons
    document.querySelectorAll('.lang-button').forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    localStorage.setItem('language', lang);
}

// Event listeners for language buttons
document.querySelectorAll('.lang-button').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.getAttribute('data-lang')));
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en'; // Default to English
    setLanguage(savedLanguage);
});