let categories = [
    {
        type: "ALL PROJECTS",
        url: "/projects/all",
        slug: "all",
        image: "/assets/images/compressed/categories/allprojects.jpg",
        description: "From office buildings to stadium arenas, we adapt to our clients' needs."
    },
    {
        type: "COMMERCIAL",
        url: "/projects/commercial",
        slug: "commercial",
        image: "/assets/images/compressed/categories/commercial.jpg",
        description: "From office buildings to stadium arenas, we adapt to our clients' needs."
    },
    {
        type: "EDUCATION",
        url: "/projects/education",
        slug: "education",
        image: "/assets/images/compressed/categories/education.jpg",
        description: "From office buildings to stadium arenas, we adapt to our clients' needs."
    },
    {
        type: "INDUSTRIAL",
        url: "/projects/industrial",
        slug: "industrial",
        image: "/assets/images/compressed/categories/industrial.jpg",
        description: "From office buildings to stadium arenas, we adapt to our clients' needs."
    },
    {
        type: "RAINSCREEN",
        url: "/projects/rainscreen",
        slug: "rainscreen",
        image: "/assets/images/compressed/categories/rainscreen.jpg",
        description: "From office buildings to stadium arenas, we adapt to our clients' needs."
    },
    {
        type: "RESTORATION",
        url: "/projects/restoration",
        slug: "restoration",
        image: "/assets/images/compressed/categories/restoration.jpeg",
        description: "From office buildings to stadium arenas, we adapt to our clients' needs."
    }
];

let projects = [
    {
        name: 'Lehigh Dorms',
        industry: 'Education',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/lehigh-dorms',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "Integer elementum mi at tellus facilisis, nec iaculis metus fringilla. Curabitur tristique rutrum risus id feugiat. Phasellus in efficitur nunc, at facilisis tellus.",
        quote: "Suspendisse convallis facilisis turpis, eget pretium ante varius eget. Etiam turpis ligula, gravida vel mauris viverra, eleifend elementum metus. ",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'St. Barnabus Medical Center, Western Expansion',
        industry: 'Commercial',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/st-barnabus',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Western Expansion for St. Barnabus Medical Center",
        highlight: "Morbi metus diam, efficitur id urna eget, hendrerit elementum orci. Etiam nec finibus nisi. Cras tincidunt varius ultrices. Etiam eget dapibus velit. Vivamus fermentum vitae dolor quis efficitur. Morbi non nunc finibus, luctus orci et, dignissim tellus. Aenean et dui convallis, dapibus odio ac, pulvinar lectus.",
        quote: "Pellentesque volutpat lacus ut ipsum tempor scelerisque. Vestibulum rutrum congue consectetur.",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'Rutgers Dorms',
        industry: 'Education',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/rutgers-dorms',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "Proin enim justo, sagittis ac dictum eu, porttitor eget metus. Sed nec imperdiet eros.",
        quote: "Curabitur consectetur eros id varius molestie.",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'Rutgers Dorms',
        industry: 'Education',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/rutgers-dorms',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "In a ante vel diam efficitur eleifend sagittis ut nisi. Proin sollicitudin nulla vel lacus lobortis, ut suscipit leo scelerisque. Integer elementum mi at tellus facilisis, nec iaculis metus fringilla. Curabitur tristique rutrum risus id feugiat. Phasellus in efficitur nunc, at facilisis tellus.",
        quote: "Morbi eros elit, aliquet vitae lacus sit amet, aliquet sollicitudin ex",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'Rutgers Dorms',
        industry: 'Education',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/rutgers-dorms',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "Morbi auctor euismod orci, at tempus ligula malesuada a. Vivamus consequat tristique purus laoreet scelerisque. Aliquam in sem suscipit, finibus turpis quis, dictum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula magna at orci egestas, at ultricies metus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque volutpat lacus ut ipsum tempor scelerisque. Vestibulum rutrum congue consectetur.",
        quote: "Donec mollis dolor elit, sed tincidunt felis eleifend at.",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'Rutgers Dorms',
        industry: 'Commercial',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/rutgers-dorms',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "Morbi auctor euismod orci, at tempus ligula malesuada a. Vivamus consequat tristique purus laoreet scelerisque. Aliquam in sem suscipit, finibus turpis quis, dictum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula magna at orci egestas, at ultricies metus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque volutpat lacus ut ipsum tempor scelerisque. Vestibulum rutrum congue consectetur.",
        quote: "Donec mollis dolor elit, sed tincidunt felis eleifend at.",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'Rutgers Dorms',
        industry: 'Commercial',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/rutgers-dorms',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "Morbi auctor euismod orci, at tempus ligula malesuada a. Vivamus consequat tristique purus laoreet scelerisque. Aliquam in sem suscipit, finibus turpis quis, dictum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula magna at orci egestas, at ultricies metus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque volutpat lacus ut ipsum tempor scelerisque. Vestibulum rutrum congue consectetur.",
        quote: "Donec mollis dolor elit, sed tincidunt felis eleifend at.",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'Rutgers Dorms',
        industry: 'Commercial',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/rutgers-dorms',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "Morbi auctor euismod orci, at tempus ligula malesuada a. Vivamus consequat tristique purus laoreet scelerisque. Aliquam in sem suscipit, finibus turpis quis, dictum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula magna at orci egestas, at ultricies metus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque volutpat lacus ut ipsum tempor scelerisque. Vestibulum rutrum congue consectetur.",
        quote: "Donec mollis dolor elit, sed tincidunt felis eleifend at.",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'Rutgers Dorms',
        industry: 'Commercial',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/rutgers-dorms',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "Morbi auctor euismod orci, at tempus ligula malesuada a. Vivamus consequat tristique purus laoreet scelerisque. Aliquam in sem suscipit, finibus turpis quis, dictum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula magna at orci egestas, at ultricies metus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque volutpat lacus ut ipsum tempor scelerisque. Vestibulum rutrum congue consectetur.",
        quote: "Donec mollis dolor elit, sed tincidunt felis eleifend at.",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'Rutgers Dorms',
        industry: 'Commercial',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/rutgers-dorms',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "Morbi auctor euismod orci, at tempus ligula malesuada a. Vivamus consequat tristique purus laoreet scelerisque. Aliquam in sem suscipit, finibus turpis quis, dictum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula magna at orci egestas, at ultricies metus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque volutpat lacus ut ipsum tempor scelerisque. Vestibulum rutrum congue consectetur.",
        quote: "Donec mollis dolor elit, sed tincidunt felis eleifend at.",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'Rutgers',
        industry: 'Commercial',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/rutgers-dorms',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "Morbi auctor euismod orci, at tempus ligula malesuada a. Vivamus consequat tristique purus laoreet scelerisque. Aliquam in sem suscipit, finibus turpis quis, dictum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula magna at orci egestas, at ultricies metus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque volutpat lacus ut ipsum tempor scelerisque. Vestibulum rutrum congue consectetur.",
        quote: "Donec mollis dolor elit, sed tincidunt felis eleifend at.",
        quoteAuthor: "Mike Schmerbeck"
    },
    {
        name: 'St Barnabus',
        industry: 'Commercial',
        client: 'Turner Construction',
        date_completed: new Date(),
        url: '/projects/commercial/st-barnabus',
        image: '/assets/images/compressed/projects/bbm-1.jpg',
        description: "Student dormatories for Rutgers University",
        highlight: "Morbi auctor euismod orci, at tempus ligula malesuada a. Vivamus consequat tristique purus laoreet scelerisque. Aliquam in sem suscipit, finibus turpis quis, dictum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula magna at orci egestas, at ultricies metus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque volutpat lacus ut ipsum tempor scelerisque. Vestibulum rutrum congue consectetur.",
        quote: "Donec mollis dolor elit, sed tincidunt felis eleifend at.",
        quoteAuthor: "Mike Schmerbeck"
    },
];

module.exports = { categories, projects };