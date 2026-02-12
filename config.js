// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Pendo",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💕', '💝', '💗', '💓'],  // Heart emojis
        bears: ['💞']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much would you say you love me though?",                          // For the love meter
            startText: "",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my valentine princess 🌹?", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "awwwwwwwwww that much?? 🥰",

    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "I'll make sure that your gift, kiss and hug get to you 👅 ",
        message: "I also saw you say that you'll be licking cream of your own titties this valentines, I volunteer to do that for you please😭",
        emojis: ""  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#570e66ff",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#000000ff",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#000000ffff",     // Button color (should stand out against the background)
        buttonHover: "#887b7bff",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#25002eff"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "90s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "0",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 0.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/ddbetraxc/video/upload/v1770901822/pink_bubblegum_hxs30l.mp3", // Music streaming URL
        startText: "🎵",        // Button text to start music
        stopText: "🔇",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 