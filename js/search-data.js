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
        whenToUse: "When the core content involves significant reading, and you have students at varied reading levels. This ensures all students can access the concepts without being blocked by text complexity."
    },
    {
        id: "content-2",
        title: "Multi-Modal Presentations",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Deliver information through multiple modes—auditory (recordings, discussions), visual (graphic organisers, diagrams, videos), and tactile/kinesthetic (hands-on models, movement).",
        keywords: ["visual", "audio", "video", "kinesthetic", "hands-on", "multiple formats", "learning styles", "graphic organiser", "diagram", "recording", "accessibility"],
        whenToUse: "When students have varied learning profiles or when content is complex and benefits from multiple representations. This is especially powerful for EALD students or students with learning differences."
    },
    {
        id: "content-3",
        title: "Curriculum Compacting",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "A three-stage process: (1) identify what students have already mastered through pre-assessment, (2) eliminate redundant practice for those students, (3) replace it with meaningful curriculum extensions or independent projects.",
        keywords: ["advanced", "gifted", "already know", "skip", "pre-assessment", "extension", "enrichment", "mastery", "redundant"],
        whenToUse: "When pre-assessment reveals that some students have already mastered portions of the content. This prevents boredom and allows advanced learners to move into deeper exploration."
    },
    {
        id: "content-4",
        title: "Digest of Key Ideas",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Create a one- or two-page \"capsule\" of essential questions, vocabulary, and concepts to support students who struggle with heavy print materials or organisation.",
        keywords: ["summary", "overview", "key points", "study guide", "reference", "vocabulary", "organization", "struggling", "overwhelmed"],
        whenToUse: "When students are overwhelmed by lengthy texts or complex materials. This gives them a roadmap and helps them focus on what matters most."
    },
    {
        id: "content-5",
        title: "Highlighted Print Materials",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Highlight critical passages in a text so that struggling readers can focus energy on essential portions rather than becoming discouraged by an overwhelming amount of print.",
        keywords: ["highlight", "emphasis", "focus", "essential", "key points", "attention", "guide"],
        whenToUse: "When a lengthy text contains essential content, but not every paragraph is equally important. This helps students with reading challenges or executive functioning difficulties know where to focus."
    },
    {
        id: "content-6",
        title: "Support Systems (Buddies, Mentors, Technology)",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Use reading buddies, adult mentors, or audio/video recordings to make complex content accessible to all students.",
        keywords: ["resources", "materials", "variety", "options", "different sources", "books", "articles"],
        whenToUse: "When content is challenging but essential, and students need human or technological support to access it. This is particularly effective for EALD students or students with reading difficulties."
    },
    {
        id: "content-7",
        title: "Visual Supports: Glossaries, Mind Maps, Flashcards",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Provide visual tools that help students organise, remember, and connect content. These can be pre-made or co-created with students.",
        keywords: ["contract", "agreement", "independence", "self-directed", "goals", "commitment", "accountability"],
        whenToUse: "When content is vocabulary-heavy, conceptually dense, or requires students to see relationships between ideas. Visual supports are especially helpful for visual learners and students who struggle with working memory."
    },
    {
        id: "content-8",
        title: "Neurodiversity-Responsive Content Design",
        category: "Content",
        step: "Step 3: Content",
        link: "step3-content.html",
        description: "Design content that is accessible for neurodivergent learners by reducing cognitive load, providing multimodal formats, using concrete language, and offering strength-based supports. This approach benefits all students while specifically supporting those with ADHD, autism spectrum disorder, dyslexia, and executive functioning challenges.",
        keywords: ["neurodiversity", "ADHD", "autism", "dyslexia", "cognitive load", "concrete language", "accessibility", "working memory", "executive function"],
        whenToUse: "When you have students with diagnosed learning differences, when content involves complex language or multi-step processes, or when you want to make content universally accessible from the start."
    },

    // Step 3: Process Strategies
    {
        id: "process-1",
        title: "Tiered Activities",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Design multiple versions of a task that focus on the same essential understanding but vary in complexity, abstraction, and required support. All students work toward the same learning goals, but the pathway differs based on readiness.",
        keywords: ["tiered", "levels", "challenge", "complexity", "varied difficulty", "ZPD", "readiness", "scaffolding"],
        whenToUse: "When students have varied readiness levels for a particular skill or concept. Tiering ensures everyone is appropriately challenged—working in their Zone of Proximal Development, not too easy, not impossibly hard."
    },
    {
        id: "process-2",
        title: "Flexible Grouping",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Move students between various group configurations based on the task at hand. Sometimes group by readiness (homogeneous), sometimes by interest (mixed), sometimes randomly. The key word is flexible—groups change frequently to prevent tracking.",
        keywords: ["discussion", "collaboration", "partner work", "processing", "verbal", "sharing ideas", "peer learning"],
        whenToUse: "Constantly. Flexible grouping is considered the \"heart\" of differentiation. It allows you to target instruction to specific needs while ensuring students don't get stuck in permanent ability groups."
    },
    {
        id: "process-3",
        title: "Learning Centres/Stations",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Designated classroom areas where students rotate through different activities to explore topics or practice skills at their own pace. Centres allow for simultaneous differentiation—different students working on different things at the same time.",
        keywords: ["centers", "stations", "rotation", "small group", "independent work", "variety", "engagement"],
        whenToUse: "When you want students to practice skills or explore concepts independently or in small groups. Works well for skill reinforcement, application activities, or exploratory learning."
    },
    {
        id: "process-4",
        title: "Cubing",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "A strategy where students analyse a topic from six different perspectives (like the six sides of a cube): describe it, compare it, associate it, analyse it, apply it, argue for/against it. You can create different cubes for different readiness levels.",
        keywords: ["pacing", "speed", "timing", "fast finishers", "slow workers", "time management", "self-paced"],
        whenToUse: "When you want students to explore a concept from multiple angles. Cubing works well for review, application, or deeper exploration of content students have already encountered."
    },
    {
        id: "process-5",
        title: "Jigsaw",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "A cooperative learning strategy where students become \"experts\" in one aspect of a topic, then teach that aspect to their peers. Students start in \"expert groups,\" then move to \"home groups\" to share their expertise.",
        keywords: ["early finishers", "finish early", "done early", "fast workers", "waiting", "time fillers", "extension", "enrichment"],
        whenToUse: "When a topic has multiple distinct parts that can be learned somewhat independently. Jigsaw promotes interdependence—everyone needs everyone else—and gives students practice teaching."
    },
    {
        id: "process-6",
        title: "Learning Contracts",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Formal agreements between teacher and student where the teacher grants freedom in how class time is used in exchange for the student completing individualized skill or content components. Contracts outline what must be done, by when, and to what standard.",
        keywords: ["interest", "choice", "engagement", "motivation", "student-directed", "passion", "topics"],
        whenToUse: "When students are ready for more independence and self-direction. Works well for extensions, independent projects, or when students need to work on specific skills at their own pace."
    },
    {
        id: "process-7",
        title: "Interactive Journals",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Journals where students respond to varied writing prompts based on their readiness level. Students reflect on and \"own\" ideas from their reading and learning. Teacher provides feedback, creating a dialogue.",
        keywords: ["contract", "independence", "self-directed", "goals", "agreement", "accountability"],
        whenToUse: "When you want students to process and personalise content through writing. Works well for ongoing reflection, connecting new learning to prior knowledge, or exploring concepts more deeply."
    },
    {
        id: "process-8",
        title: "Anchor Activities",
        category: "Process",
        step: "Step 3: Process",
        link: "step3-process.html",
        description: "Self-directed tasks that students move to automatically upon completing assigned work. Anchor activities manage \"ragged time\" in a differentiated classroom where students finish at different rates.",
        keywords: ["anchor", "early finishers", "waiting", "extension", "enrichment", "independent work"],
        whenToUse: "Always. In any differentiated classroom, students will finish tasks at different times. Anchor activities prevent the \"I'm done, what do I do now?\" problem and keep learning happening for everyone."
    },

    // Step 3: Product Strategies
    {
        id: "product-1",
        title: "Choice Boards & Menus",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Grids or menus of activity options that allow students to select how they will demonstrate learning. Students choose from multiple product options, all of which address the same learning goals but offer different ways to show mastery.",
        keywords: ["choice", "menu", "options", "selection", "variety", "student choice", "interest", "flexibility"],
        whenToUse: "When you want to give students agency in how they demonstrate learning. Choice boards work well for culminating projects, application tasks, or ongoing skill practice. They increase engagement by honoring student preferences."
    },
    {
        id: "product-2",
        title: "RAFT (Role, Audience, Format, Topic)",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "A technique where students demonstrate learning by taking on a specific Role, writing for a targeted Audience, in a chosen Format, about a specified Topic. RAFT makes learning feel more authentic and engaging.",
        keywords: ["tiered", "levels", "complexity", "varied difficulty", "challenge", "readiness"],
        whenToUse: "When you want students to apply content knowledge in creative, authentic ways. RAFT works especially well for content that can be viewed from multiple perspectives or communicated to different audiences."
    },
    {
        id: "product-3",
        title: "Negotiated Criteria",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Collaborate with students to determine the core requirements for a product while allowing them to add personal quality goals. Students have voice in what \"excellent work\" looks like while ensuring essential elements are present.",
        keywords: ["think-tac-toe", "tic-tac-toe", "grid", "choice", "game", "selection"],
        whenToUse: "When you want to build student ownership and agency while maintaining rigor. Works well for projects where students have choice in format but you need to ensure certain learning goals are demonstrated."
    },
    {
        id: "product-4",
        title: "Tiered Assessments",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Provide multiple versions of a summative task that assess the same standards but vary in complexity, scaffolding, or mode of expression. All students demonstrate the same learning goals, but the pathway to demonstrating them differs.",
        keywords: ["RAFT", "role", "audience", "format", "perspective", "writing", "creativity"],
        whenToUse: "When students have significantly varied readiness levels and you want to assess their learning accurately without ceiling or floor effects. Tiered assessments ensure you see what students actually know, not what they can't access due to task design."
    },
    {
        id: "product-5",
        title: "Expanding the Product Repertoire with AI",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "AI tools make it possible to support students in creating products that were previously too complex or time-consuming to scaffold. Consider these possibilities:",
        keywords: ["contract", "independent", "project", "agreement", "criteria", "self-directed"],
        whenToUse: ""
    },
    {
        id: "product-6",
        title: "Performance & Presentation Products",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Some students demonstrate their learning best through performance—presenting, demonstrating, teaching, or performing for an audience.",
        keywords: ["rubric", "criteria", "assessment", "co-create", "student voice", "success criteria"],
        whenToUse: "When learning involves demonstrable skills, when public speaking is a goal, or when students excel at oral communication over written."
    },
    {
        id: "product-7",
        title: "Creative & Artistic Products",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Creative products allow students to demonstrate understanding through art, design, storytelling, or creative expression.",
        keywords: ["complexity", "levels", "sophistication", "challenge", "depth"],
        whenToUse: "When content has emotional, thematic, or interpretive dimensions; when students need alternative ways to show understanding."
    },
    {
        id: "product-8",
        title: "Collaborative Group Products",
        category: "Product",
        step: "Step 3: Product",
        link: "step3-product.html",
        description: "Some learning is best demonstrated through collaboration—products that require students to work together and create something no individual could create alone.",
        keywords: ["group work", "collaboration", "teamwork", "roles", "cooperative learning"],
        whenToUse: "When learning goals include collaboration skills, when tasks benefit from multiple perspectives, or when product scope requires distributed effort."
    },

    // Step 3: Environment Strategies
    {
        id: "environment-1",
        title: "Flexible Seating",
        category: "Environment",
        step: "Step 3: Environment",
        link: "step3-environment.html",
        description: "Offer various seating options—traditional desks, floor seating, standing desks, balance balls, cushions—to meet students' physical needs for movement, comfort, and different working positions.",
        keywords: ["seating", "furniture", "workspace", "flexible", "choice", "comfort", "physical space"],
        whenToUse: "Ongoing. Some students focus better when moving, some need quiet stability, some benefit from ergonomic variety. Flexible seating honours these different physical needs."
    },
    {
        id: "environment-2",
        title: "Learning Zones",
        category: "Environment",
        step: "Step 3: Environment",
        link: "step3-environment.html",
        description: "Create designated areas for different types of work: quiet individual work, collaboration spaces, technology zones, hands-on activity areas. Students move to the zone that matches their current task and needs.",
        keywords: ["grouping", "groups", "flexible groups", "homogeneous", "heterogeneous", "partners", "teams"],
        whenToUse: "When you want to support students in making choices about where and how they work best. Learning zones help students understand that different tasks require different environments."
    },
    {
        id: "environment-3",
        title: "Growth Mindset Culture",
        category: "Environment",
        step: "Step 3: Environment",
        link: "step3-environment.html",
        description: "Foster a classroom atmosphere that celebrates diversity, values effort and growth over \"innate ability,\" and views mistakes as learning opportunities. The psychological environment is as important as the physical one.",
        keywords: ["stations", "centers", "zones", "areas", "rotation", "classroom setup"],
        whenToUse: "Always. Growth mindset isn't a one-time lesson—it's woven into how you respond to student work, how you frame challenges, and how you celebrate progress."
    },
    {
        id: "environment-4",
        title: "Sensory & Emotional Environment",
        category: "Environment",
        step: "Step 3: Environment",
        link: "step3-environment.html",
        description: "Consider sensory needs (lighting, noise level, visual clutter) and emotional safety (predictability, belonging, psychological safety to take risks). These factors significantly impact student ability to learn.",
        keywords: ["sensory", "environment", "noise", "lighting", "calm", "stimulation", "emotional safety", "atmosphere"],
        whenToUse: "As part of your overall classroom design. Some students are highly sensitive to sensory input; others need sensory stimulation. Creating options supports diverse needs."
    },

    // Step 6: Scaffolding Strategies
    {
        id: "scaffolding-1",
        title: "Graphic Organizers",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Visual frameworks that help students organise thinking, see relationships between ideas, or structure their work. Particularly helpful for students who struggle with working memory or organisation.",
        keywords: ["temporary", "gradual release", "fading", "independence", "support", "training wheels"],
        whenToUse: "When students understand concepts but struggle to organise or connect ideas. When tasks require holding multiple pieces of information in mind simultaneously."
    },
    {
        id: "scaffolding-2",
        title: "Sentence Starters & Thinking Stems",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Phrases that help students begin their thinking, writing, or discussion. Particularly helpful for students who know what they want to say but struggle to start, or who need models for academic language.",
        keywords: ["modeling", "think aloud", "demonstration", "explicit instruction", "showing thinking", "teacher demonstration"],
        whenToUse: "For writing tasks, class discussions, or any time students need to articulate thinking in academic language. Especially helpful for EALD students."
    },
    {
        id: "scaffolding-3",
        title: "Chunking & Step-by-Step Instructions",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Breaking complex tasks into smaller, manageable steps. Particularly helpful for students who feel overwhelmed by large tasks or have executive functioning challenges.",
        keywords: ["graphic organiser", "visual", "framework", "organiser", "structure", "map", "diagram", "chart"],
        whenToUse: "When students understand the content but struggle with multi-step processes or feel paralyzed by complex assignments."
    },
    {
        id: "scaffolding-4",
        title: "Models & Exemplars",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Showing students what quality work looks like. Models provide concrete examples of expectations rather than abstract descriptions.",
        keywords: ["chunking", "breaking down", "steps", "manageable", "small pieces", "simplify", "sequence"],
        whenToUse: "When introducing new formats, genres, or quality standards. When students ask \"What do you mean?\" about expectations."
    },
    {
        id: "scaffolding-5",
        title: "Thinking Partners & Collaboration",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Pairing students strategically so they can support each other's thinking. The right partnership can scaffold learning through dialogue and shared problem-solving.",
        keywords: ["example", "model", "sample", "exemplar", "demonstration", "what good looks like"],
        whenToUse: "When students would benefit from talking through ideas, when multiple perspectives would deepen understanding, or when peer explanation could clarify confusion."
    },
    {
        id: "scaffolding-6",
        title: "Worked Examples & Think-Alouds",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Demonstrating the thinking process, not just the final answer. Show students how an expert approaches the task, including false starts and self-correction.",
        keywords: ["sentence starters", "sentence frames", "language scaffolds", "writing support", "vocabulary", "academic language"],
        whenToUse: "When introducing new skills or problem types. When students know what to do but not how to think through it."
    },
    {
        id: "scaffolding-7",
        title: "Academic Language & Vocabulary Scaffolds",
        category: "Scaffolding",
        step: "Step 6: Scaffolding",
        link: "step6-scaffolding.html",
        description: "Provide explicit support for academic vocabulary through student-friendly definitions, organised word walls, visual supports, and opportunities for practice. These scaffolds help all students—especially EALD learners—access content-heavy material and develop academic language proficiency.",
        keywords: ["vocabulary", "academic language", "word walls", "glossary", "language", "terminology", "EAL", "EALD"],
        whenToUse: "When content involves Tier 2 (high-utility academic words) or Tier 3 (domain-specific terminology), when students need to understand and use specific vocabulary, or when supporting EALD students."
    },

    // Step 7: Implementation & Assessment Strategies
    {
        id: "assessment-1",
        title: "Exit Cards / Tickets",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Brief written responses students complete at the end of a lesson. These provide you with snapshot data about what students understood (or didn't) that you can use to plan tomorrow's instruction.",
        keywords: ["exit ticket", "exit card", "exit slip", "formative assessment", "check for understanding", "quick assessment"],
        whenToUse: "End of most lessons, particularly after introducing new concepts or completing key activities."
    },
    {
        id: "assessment-2",
        title: "QuickWrites",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Brief, timed writing activities (2-3 minutes) that ask students to synthesise learning or respond to a prompt. These reveal student thinking and provide formative data.",
        keywords: ["think-pair-share", "discussion", "partner talk", "peer learning", "formative"],
        whenToUse: "Mid-lesson to check understanding before moving on, or to help students process what they've just learned."
    },
    {
        id: "assessment-3",
        title: "Think-Pair-Share & Structured Discussion",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Give students a moment to think individually, then discuss with a partner, then share with the class. While students talk, you circulate and listen—gathering formative data about understanding.",
        keywords: ["observation", "notes", "watching", "monitoring", "informal assessment", "anecdotal"],
        whenToUse: "Throughout lessons to check understanding, activate prior knowledge, or process new information."
    },
    {
        id: "assessment-4",
        title: "Dry Erase Boards / Immediate Response",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Students show their answers simultaneously on whiteboards (or digital equivalents). You can immediately see who gets it and who doesn't.",
        keywords: ["self-assessment", "reflection", "self-evaluation", "metacognition", "student ownership"],
        whenToUse: "For quick checks during instruction, practicing skills, or gauging readiness before moving on."
    },
    {
        id: "assessment-5",
        title: "Varying Questions by Readiness",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "During class discussion, target different questions to different students based on their readiness. This ensures all students are held accountable and appropriately challenged.",
        keywords: ["3-2-1", "reflection", "formative assessment", "check for understanding", "questioning"],
        whenToUse: "During whole-class discussions and questioning."
    },
    {
        id: "assessment-6",
        title: "S-O-S Summary (Statement-Opinion-Support)",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Students write a brief response: State an opinion on a statement (agree/disagree), then support it with evidence. Provides practice for critical thinking without requiring a full essay.",
        keywords: ["four corners", "movement", "kinesthetic", "visible thinking", "agreement", "understanding check"],
        whenToUse: "When you want students to practice argumentation and evidence-based thinking in a low-stakes, quick format."
    },
    {
        id: "assessment-7",
        title: "Observation Protocols with Rubrics",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Use a simple observation rubric to systematically note student progress during activities. A 4-point scale with clear descriptors helps you quickly identify understanding levels without disrupting the flow of teaching.",
        keywords: ["whiteboard", "response cards", "individual responses", "whole class", "quick check"],
        whenToUse: "During independent work, group activities, or discussions when you want to systematically track who understands and who needs support."
    },
    {
        id: "assessment-8",
        title: "Quick Feedback Based on Common Responses",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Anticipate typical student responses and prepare targeted feedback ahead of time. This allows you to give specific, actionable feedback quickly when you're circulating or reviewing student work.",
        keywords: ["entrance ticket", "entry ticket", "pre-assessment", "prior knowledge", "warm-up"],
        whenToUse: "When planning a task or question where you can predict common correct, partially correct, and incorrect responses."
    },
    {
        id: "assessment-9",
        title: "Peer Assessment Checklists",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Scaffold peer feedback with simple \"Got it / Need help\" checklists focused on success criteria. This builds students' assessment literacy while providing you with multiple data points on student work.",
        keywords: ["one-minute essay", "quick write", "writing", "formative", "brief response"],
        whenToUse: "When students can meaningfully assess each other's work against clear criteria, particularly for drafts or work-in-progress."
    },
    {
        id: "assessment-10",
        title: "Digital Exit Tickets (Google Forms)",
        category: "Assessment",
        step: "Step 7: Implementation & Assessment",
        link: "step7-implement.html",
        description: "Use Google Forms for quick digital exit tickets that automatically compile student responses into a spreadsheet, making data analysis faster and more efficient.",
        keywords: ["digital", "google forms", "technology", "online", "data collection", "exit ticket"],
        whenToUse: "When you want to quickly gather and analyse exit ticket data, particularly if students have devices available."
    }
];
