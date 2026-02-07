// Search data - all strategies indexed with keywords
const searchData = [
    // Step 3: Content Strategies
    {
        id: "content-1",
        title: "Tiered Texts & Resource Materials",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Provide reading materials at different complexity and readability levels so students can engage with the same overarching theme or concept regardless of their current literacy skills.",
        keywords: ["text", "reading", "complexity", "readability", "tiered", "levels", "literacy", "vocabulary", "too hard", "too easy", "struggling readers", "advanced readers", "EAL", "EALD"],
        whenToUse: "When the core content involves significant reading, and you have students at varied reading levels."
    },
    {
        id: "content-2",
        title: "Multi-Modal Presentations",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Deliver information through multiple modes—auditory (recordings, discussions), visual (graphic organisers, diagrams, videos), and tactile/kinesthetic (hands-on models, movement).",
        keywords: ["visual", "audio", "video", "kinesthetic", "hands-on", "multiple formats", "learning styles", "graphic organiser", "diagram", "recording", "accessibility"],
        whenToUse: "When students have varied learning profiles or when content is complex and benefits from multiple representations."
    },
    {
        id: "content-3",
        title: "Compacting",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Eliminate redundant practice for students who already know the material, replacing it with meaningful curriculum extensions or independent projects.",
        keywords: ["advanced", "gifted", "already know", "skip", "pre-assessment", "extension", "enrichment", "mastery", "redundant"],
        whenToUse: "When pre-assessment reveals that some students have already mastered portions of the content."
    },
    {
        id: "content-4",
        title: "Digest of Key Ideas",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Create a one- or two-page capsule of essential questions, vocabulary, and concepts to support students who struggle with heavy print materials or organization.",
        keywords: ["summary", "overview", "key points", "study guide", "reference", "vocabulary", "organization", "struggling", "overwhelmed"],
        whenToUse: "When students are overwhelmed by lengthy texts or complex materials."
    },
    {
        id: "content-5",
        title: "Highlight Key Concepts",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Pre-highlight or mark the most essential information in texts or materials to guide students' attention to what matters most.",
        keywords: ["highlight", "emphasis", "focus", "essential", "key points", "attention", "guide"],
        whenToUse: "When students struggle to identify what's important in dense text."
    },
    {
        id: "content-6",
        title: "Provide Varied Resources",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Offer multiple resources on the same topic at different complexity levels or formats.",
        keywords: ["resources", "materials", "variety", "options", "different sources", "books", "articles"],
        whenToUse: "When you want students to explore the same concept through different lenses."
    },
    {
        id: "content-7",
        title: "Learning Contracts",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Written agreements between teacher and student about what will be learned and how it will be demonstrated.",
        keywords: ["contract", "agreement", "independence", "self-directed", "goals", "commitment", "accountability"],
        whenToUse: "When students are ready for more independence in their learning."
    },
    {
        id: "content-8",
        title: "Neurodiversity-Responsive Content Design",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Design content that is accessible for neurodivergent learners by reducing cognitive load, providing multimodal formats, using concrete language, and offering strength-based supports.",
        keywords: ["neurodiversity", "ADHD", "autism", "dyslexia", "cognitive load", "concrete language", "accessibility", "working memory", "executive function"],
        whenToUse: "When you have students with diagnosed learning differences or when you want to make content universally accessible."
    },

    // Step 3: Process Strategies
    {
        id: "process-1",
        title: "Tiered Activities",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Design multiple versions of a task that focus on the same essential understanding but vary in complexity, abstraction, and required support.",
        keywords: ["tiered", "levels", "challenge", "complexity", "varied difficulty", "ZPD", "readiness", "scaffolding"],
        whenToUse: "When students have varied readiness levels for a particular skill or concept."
    },
    {
        id: "process-2",
        title: "Think-Pair-Share Variations",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Strategic partnering where students process ideas individually, then with a partner, then share with the larger group.",
        keywords: ["discussion", "collaboration", "partner work", "processing", "verbal", "sharing ideas", "peer learning"],
        whenToUse: "When you want all students to engage in thinking before class discussion."
    },
    {
        id: "process-3",
        title: "Centers/Stations",
        category: "Process",
        step: "Step3-process.html",
        link: "step3-process.html",
        description: "Students rotate through different activities or tasks, each focused on a different skill or aspect of the content.",
        keywords: ["centers", "stations", "rotation", "small group", "independent work", "variety", "engagement"],
        whenToUse: "When you want students to practice different skills or explore content from multiple angles."
    },
    {
        id: "process-4",
        title: "Flexible Pacing",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Allow students to move through content at different speeds, with checkpoints rather than rigid timelines.",
        keywords: ["pacing", "speed", "timing", "fast finishers", "slow workers", "time management", "self-paced"],
        whenToUse: "When students work at significantly different speeds."
    },
    {
        id: "process-5",
        title: "Anchor Activities",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Ongoing meaningful work students can do when they finish early or need a break from direct instruction.",
        keywords: ["early finishers", "finish early", "done early", "fast workers", "waiting", "time fillers", "extension", "enrichment"],
        whenToUse: "When students finish at wildly different times and you need meaningful work for early finishers."
    },
    {
        id: "process-6",
        title: "Interest Centers",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Activities or stations organised around student interests rather than readiness levels.",
        keywords: ["interest", "choice", "engagement", "motivation", "student-directed", "passion", "topics"],
        whenToUse: "When you want to increase engagement by connecting to student interests."
    },
    {
        id: "process-7",
        title: "Learning Contracts",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Written agreements that specify what a student will learn, how they'll learn it, and how they'll demonstrate mastery.",
        keywords: ["contract", "independence", "self-directed", "goals", "agreement", "accountability"],
        whenToUse: "When students are ready for more independence in their learning process."
    },
    {
        id: "process-8",
        title: "Anchor Activities",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Ongoing meaningful work students can do when they finish assigned tasks.",
        keywords: ["anchor", "early finishers", "waiting", "extension", "enrichment", "independent work"],
        whenToUse: "When you need meaningful work for students who finish early."
    },

    // Step 3: Product Strategies
    {
        id: "product-1",
        title: "Choice Boards & Menus",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Students choose from a menu of product options to demonstrate their learning, with choices varying by interest, learning profile, or challenge level.",
        keywords: ["choice", "menu", "options", "selection", "variety", "student choice", "interest", "flexibility"],
        whenToUse: "When you want to honor student voice and increase engagement through choice."
    },
    {
        id: "product-2",
        title: "Tiered Products",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Multiple versions of the final product with varied levels of complexity, support, or abstraction.",
        keywords: ["tiered", "levels", "complexity", "varied difficulty", "challenge", "readiness"],
        whenToUse: "When students are at different readiness levels for demonstrating understanding."
    },
    {
        id: "product-3",
        title: "Think-Tac-Toe",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "A tic-tac-toe board of nine product options where students must complete three in a row.",
        keywords: ["think-tac-toe", "tic-tac-toe", "grid", "choice", "game", "selection"],
        whenToUse: "When you want structured choice that ensures students engage with multiple aspects of content."
    },
    {
        id: "product-4",
        title: "RAFT (Role, Audience, Format, Topic)",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Students create products from different perspectives (roles) for different audiences in different formats.",
        keywords: ["RAFT", "role", "audience", "format", "perspective", "writing", "creativity"],
        whenToUse: "When you want students to demonstrate understanding from multiple perspectives."
    },
    {
        id: "product-5",
        title: "Contracts for Independent Study",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Written agreements about what the final product will be and criteria for success.",
        keywords: ["contract", "independent", "project", "agreement", "criteria", "self-directed"],
        whenToUse: "When students are working on independent projects or studies."
    },
    {
        id: "product-6",
        title: "Rubrics with Student Input",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Co-create success criteria with students, giving them voice in how quality will be defined.",
        keywords: ["rubric", "criteria", "assessment", "co-create", "student voice", "success criteria"],
        whenToUse: "When you want to build student ownership and clarity about quality."
    },
    {
        id: "product-7",
        title: "Varying Complexity in Products",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Same product type but with varied levels of sophistication expected.",
        keywords: ["complexity", "levels", "sophistication", "challenge", "depth"],
        whenToUse: "When all students create the same type of product but at different levels."
    },
    {
        id: "product-8",
        title: "Collaborative Group Products",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Students work together to create a product, with differentiated roles based on readiness or interest.",
        keywords: ["group work", "collaboration", "teamwork", "roles", "cooperative learning"],
        whenToUse: "When you want students to learn from each other through collaborative creation."
    },

    // Step 3: Environment Strategies
    {
        id: "environment-1",
        title: "Flexible Seating",
        category: "Environment",
        step: "Step 3: Environment",
        link: "step3-environment.html",
        description: "Provide varied seating options that allow students to choose workspaces that match their learning needs.",
        keywords: ["seating", "furniture", "workspace", "flexible", "choice", "comfort", "physical space"],
        whenToUse: "When students have different physical and sensory needs for optimal learning."
    },
    {
        id: "environment-2",
        title: "Flexible Grouping",
        category: "Environment",
        step: "Step 3: Environment",
        link: "step3-environment.html",
        description: "Group students in different ways for different purposes—by readiness, interest, learning profile, or random.",
        keywords: ["grouping", "groups", "flexible groups", "homogeneous", "heterogeneous", "partners", "teams"],
        whenToUse: "When you want to ensure students work with different peers for different purposes."
    },
    {
        id: "environment-3",
        title: "Learning Stations/Centers",
        category: "Environment",
        step: "Step 3: Environment",
        link: "step3-environment.html",
        description: "Designate areas of the room for different types of work or different aspects of content.",
        keywords: ["stations", "centers", "zones", "areas", "rotation", "classroom setup"],
        whenToUse: "When you want students to move through different activities or skill practices."
    },
    {
        id: "environment-4",
        title: "Sensory & Emotional Environment",
        category: "Environment",
        step: "Step 3: Environment",
        link: "step3-environment.html",
        description: "Adjust lighting, noise levels, visual stimulation, and emotional tone to support different learners.",
        keywords: ["sensory", "environment", "noise", "lighting", "calm", "stimulation", "emotional safety", "atmosphere"],
        whenToUse: "When you have students with sensory sensitivities or different emotional regulation needs."
    },

    // Step 6: Scaffolding Strategies
    {
        id: "scaffolding-1",
        title: "Scaffolds Are Temporary",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Design supports that can be gradually removed as students develop competence.",
        keywords: ["temporary", "gradual release", "fading", "independence", "support", "training wheels"],
        whenToUse: "When planning any scaffold—ensure it has a plan for removal."
    },
    {
        id: "scaffolding-2",
        title: "Modeling & Think-Alouds",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Demonstrate your thinking process explicitly so students see how experts approach tasks.",
        keywords: ["modeling", "think aloud", "demonstration", "explicit instruction", "showing thinking", "teacher demonstration"],
        whenToUse: "When introducing new skills or complex thinking processes."
    },
    {
        id: "scaffolding-3",
        title: "Graphic Organizers",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Visual frameworks that help students organise information and see relationships between ideas.",
        keywords: ["graphic organiser", "visual", "framework", "organiser", "structure", "map", "diagram", "chart"],
        whenToUse: "When content involves relationships between concepts or multi-step processes."
    },
    {
        id: "scaffolding-4",
        title: "Chunking Information",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Break complex information or tasks into smaller, manageable pieces.",
        keywords: ["chunking", "breaking down", "steps", "manageable", "small pieces", "simplify", "sequence"],
        whenToUse: "When tasks or content feel overwhelming to students."
    },
    {
        id: "scaffolding-5",
        title: "Worked Examples",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Provide completed examples that show what success looks like.",
        keywords: ["example", "model", "sample", "exemplar", "demonstration", "what good looks like"],
        whenToUse: "When students need to see what quality work looks like before attempting their own."
    },
    {
        id: "scaffolding-6",
        title: "Sentence Starters & Frames",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Provide language scaffolds that help students express complex thinking.",
        keywords: ["sentence starters", "sentence frames", "language scaffolds", "writing support", "vocabulary", "academic language"],
        whenToUse: "When students understand concepts but struggle to express them in writing or speaking."
    },
    {
        id: "scaffolding-7",
        title: "Academic Language & Vocabulary Scaffolds",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Pre-teach vocabulary and provide ongoing language supports for academic discourse.",
        keywords: ["vocabulary", "academic language", "word walls", "glossary", "language", "terminology", "EAL", "EALD"],
        whenToUse: "When academic language is a barrier to accessing content."
    },

    // Step 7: Assessment Strategies
    {
        id: "assessment-1",
        title: "Exit Cards / Tickets",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Quick written responses at the end of a lesson that reveal student understanding.",
        keywords: ["exit ticket", "exit card", "exit slip", "formative assessment", "check for understanding", "quick assessment"],
        whenToUse: "At the end of a lesson to quickly gauge who understood and who needs more support."
    },
    {
        id: "assessment-2",
        title: "Think-Pair-Share",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Students think individually, discuss with a partner, then share with the class—allowing you to circulate and listen.",
        keywords: ["think-pair-share", "discussion", "partner talk", "peer learning", "formative"],
        whenToUse: "During or after instruction to check understanding and engage all students."
    },
    {
        id: "assessment-3",
        title: "Observation & Anecdotal Notes",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Systematic observation of student work and behaviour with brief notes about progress.",
        keywords: ["observation", "notes", "watching", "monitoring", "informal assessment", "anecdotal"],
        whenToUse: "During independent or group work to track progress and identify needs."
    },
    {
        id: "assessment-4",
        title: "Student Self-Assessment",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Students reflect on and evaluate their own learning progress against clear criteria.",
        keywords: ["self-assessment", "reflection", "self-evaluation", "metacognition", "student ownership"],
        whenToUse: "Regularly throughout learning to build student ownership and awareness."
    },
    {
        id: "assessment-5",
        title: "3-2-1",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Students identify 3 things they learned, 2 things they found interesting, 1 question they still have.",
        keywords: ["3-2-1", "reflection", "formative assessment", "check for understanding", "questioning"],
        whenToUse: "End of lesson or unit to check understanding and identify remaining questions."
    },
    {
        id: "assessment-6",
        title: "Four Corners",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Students move to corners of the room to indicate their response or level of understanding.",
        keywords: ["four corners", "movement", "kinesthetic", "visible thinking", "agreement", "understanding check"],
        whenToUse: "Quick physical check of understanding or opinions."
    },
    {
        id: "assessment-7",
        title: "Whiteboards / Response Cards",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "All students respond simultaneously on individual whiteboards, allowing you to see all responses at once.",
        keywords: ["whiteboard", "response cards", "individual responses", "whole class", "quick check"],
        whenToUse: "During instruction when you need to quickly check if everyone understands."
    },
    {
        id: "assessment-8",
        title: "Entrance Tickets",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Brief assessment at the start of class to check prior knowledge or recall from previous lesson.",
        keywords: ["entrance ticket", "entry ticket", "pre-assessment", "prior knowledge", "warm-up"],
        whenToUse: "At the start of class to check retention or activate prior knowledge."
    },
    {
        id: "assessment-9",
        title: "One-Minute Essays",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Students write for one minute in response to a prompt, revealing their understanding.",
        keywords: ["one-minute essay", "quick write", "writing", "formative", "brief response"],
        whenToUse: "Quick check of understanding or to start/end a lesson."
    },
    {
        id: "assessment-10",
        title: "Digital Exit Tickets (Google Forms)",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Use digital tools to collect exit ticket responses and generate instant data.",
        keywords: ["digital", "google forms", "technology", "online", "data collection", "exit ticket"],
        whenToUse: "When you want instant data aggregation and analysis."
    }
];
