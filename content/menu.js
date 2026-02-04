const menu = {
  keywordsOnly: true,
  topLevel: {
    title: "Main Menu",
    description: "Choose a journey or go back to the main menu.",
    options: [
      {
        id: "journey_onboard",
        label: "Journey 1: Get Started",
        keyword: "GET_STARTED",
      },
      {
        id: "journey_productivity",
        label: "Journey 2: Stay Productive",
        keyword: "PRODUCTIVITY",
      },
      {
        id: "journey_support",
        label: "Journey 3: Get Help",
        keyword: "SUPPORT",
      },
      {
        id: "back_menu",
        label: "Back / Menu",
        keyword: "MENU",
      },
    ],
  },
  journeys: {
    journey_onboard: {
      title: "Journey 1: Get Started",
      description: "Quick setup tips to get moving fast.",
      options: [
        {
          id: "setup_profile",
          label: "Set up your profile",
          keyword: "PROFILE",
          description: "Add your name, photo, and preferences.",
          videoUrl: "https://example.com/videos/setup-profile",
          deepLink: "app://settings/profile",
        },
        {
          id: "connect_tools",
          label: "Connect your tools",
          keyword: "CONNECT",
          description: "Link calendars and storage in minutes.",
          videoUrl: "https://example.com/videos/connect-tools",
          deepLink: "app://integrations",
        },
        {
          id: "first_task",
          label: "Create your first task",
          keyword: "FIRST_TASK",
          description: "Start with a simple task and due date.",
          videoUrl: "https://example.com/videos/first-task",
          deepLink: "app://tasks/new",
        },
      ],
    },
    journey_productivity: {
      title: "Journey 2: Stay Productive",
      description: "Work smarter with shortcuts and focus tools.",
      options: [
        {
          id: "smart_shortcuts",
          label: "Use smart shortcuts",
          keyword: "SHORTCUTS",
          description: "Save time with one-tap actions.",
          videoUrl: "https://example.com/videos/smart-shortcuts",
          deepLink: "app://shortcuts",
        },
        {
          id: "focus_mode",
          label: "Enable focus mode",
          keyword: "FOCUS",
          description: "Mute distractions and batch notifications.",
          videoUrl: "https://example.com/videos/focus-mode",
          deepLink: "app://focus",
        },
        {
          id: "weekly_review",
          label: "Run a weekly review",
          keyword: "REVIEW",
          description: "Stay on track with a quick weekly check-in.",
          videoUrl: "https://example.com/videos/weekly-review",
          deepLink: "app://review/weekly",
        },
      ],
    },
    journey_support: {
      title: "Journey 3: Get Help",
      description: "Find answers and reach support fast.",
      options: [
        {
          id: "faq",
          label: "Browse FAQs",
          keyword: "FAQ",
          description: "Common questions and quick solutions.",
          videoUrl: "https://example.com/videos/faqs",
          deepLink: "app://help/faq",
        },
        {
          id: "contact_support",
          label: "Contact support",
          keyword: "CONTACT",
          description: "Open a support request in the app.",
          videoUrl: "https://example.com/videos/contact-support",
          deepLink: "app://help/contact",
        },
      ],
    },
  },
};

module.exports = menu;
