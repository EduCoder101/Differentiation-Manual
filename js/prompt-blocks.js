/**
 * PROMPT BLOCKS — Differentiation Manual
 * ========================================
 * Source-of-truth library for the Prompt Builder.
 *
 * Source key:
 *   C  = step3-content.html
 *   P  = step3-process.html
 *   E  = step5-equalizer.html
 *   S  = step6-scaffolding.html
 *
 * ARCHITECTURE:
 * ─────────────
 * The resource is injected ONCE into the preamble by the assembler.
 * Block templates refer to "the resource above" — they never embed it.
 *
 * Q3 now has two audience-specific lists:
 *   SUPPORT_OPTIONS   — access-focused adjustments for support students
 *   EXTENSION_OPTIONS — depth-focused adjustments for extension students
 *
 * Each block in SOURCE carries an `audience` tag:
 *   'support' | 'extension' | 'eald' | 'neuro'
 *
 * The assembler uses this to group blocks correctly for chain prompts.
 *
 * Context placeholders used in templates:
 *   {{year}}       → Year group
 *   {{subject}}    → Subject / topic
 *   {{intention}}  → Learning intention
 *   {{language}}   → EAL/D other language field
 */

const PB = (() => {

  // ─── CONTEXT INJECTION ────────────────────────────────────────────────────

  function inject(template, ctx, extras) {
    const lang      = (extras && extras.language) ? extras.language : '[home language]';
    const year      = ctx.year      || '[year group]';
    const subject   = ctx.subject   || '[subject/topic]';
    const intention = ctx.intention || '[learning intention]';

    return template
      .replace(/\{\{year\}\}/gi,      year)
      .replace(/\{\{subject\}\}/gi,   subject)
      .replace(/\{\{intention\}\}/gi, intention)
      .replace(/\{\{language\}\}/gi,  lang);
  }

  // ─── OPTION DEFINITIONS ───────────────────────────────────────────────────
  // Used by the UI to render the two Q3 columns.
  // Each option maps to a key in SOURCE.

  const SUPPORT_OPTIONS = [
    {
      id: 'sup-readability',
      label: 'Simplify readability',
      desc: 'Adjust vocabulary and sentence structure to reduce language barriers',
      key: 'supportReadability'
    },
    {
      id: 'sup-essential',
      label: 'Identify essential passages',
      desc: 'Shorten to what students truly need — with a highlighting strategy',
      key: 'supportEssential'
    },
    {
      id: 'sup-digest',
      label: 'Pre-reading digest',
      desc: 'Key vocabulary, main ideas and guiding questions before they read',
      key: 'supportDigest'
    },
    {
      id: 'sup-analogy',
      label: 'Use analogies to make concepts accessible',
      desc: 'Concrete analogies that give students a foothold on abstract ideas',
      key: 'supportAnalogy'
    },
    {
      id: 'sup-visual',
      label: 'Visual supports and multimodal redesign',
      desc: 'Icons, colour coding and layout that reduce cognitive load',
      key: 'supportVisual'
    },
    {
      id: 'sup-chunk',
      label: 'Chunk instructions into sequential steps',
      desc: 'One action per step — no bundled or implied expectations',
      key: 'supportChunk'
    },
    {
      id: 'sup-sentences',
      label: 'Sentence starters for written responses',
      desc: 'Access frames that model academic language without replacing thinking',
      key: 'supportSentences'
    },
    {
      id: 'sup-syntax',
      label: 'Simplified syntax version',
      desc: 'Same concepts, shorter sentences, unpacked clauses — for language access',
      key: 'supportSyntax'
    },
    {
      id: 'sup-memory',
      label: 'Working memory supports',
      desc: 'Word banks, partially completed frames, reference sheets',
      key: 'supportMemory'
    },
  ];

  const EXTENSION_OPTIONS = [
    {
      id: 'ext-language',
      label: 'Elevate academic language and nuance',
      desc: 'Increase precision, discipline-specific vocabulary and conceptual density',
      key: 'extensionLanguage'
    },
    {
      id: 'ext-bigpicture',
      label: 'Big picture framing',
      desc: 'Implications, connections, essential questions and broader significance',
      key: 'extensionBigPicture'
    },
    {
      id: 'ext-abstract',
      label: 'Concrete \u2192 abstract version of the text',
      desc: 'Move from examples to principles, patterns and transferable ideas',
      key: 'extensionAbstract'
    },
    {
      id: 'ext-organiser',
      label: 'Analytical graphic organiser',
      desc: 'A framework for synthesis, comparison or evaluation — not just note-taking',
      key: 'extensionOrganiser'
    },
    {
      id: 'ext-frames',
      label: 'Academic language frames',
      desc: 'Discipline-specific sentence frames that model expert writing',
      key: 'extensionFrames'
    },
    {
      id: 'ext-demand',
      label: 'Increase cognitive demand of questions',
      desc: "Shift questions toward analysis, evaluation and creation (Bloom's)",
      key: 'extensionDemand'
    },
    {
      id: 'ext-opentask',
      label: 'Open-ended / student-directed version',
      desc: 'Goal and criteria provided — students choose their approach and structure',
      key: 'extensionOpenTask'
    },
    {
      id: 'ext-modes',
      label: 'Multiple response modes',
      desc: 'Genuine choice in how students demonstrate understanding',
      key: 'extensionModes'
    },
    {
      id: 'ext-perspectives',
      label: 'Add nuance: competing perspectives',
      desc: 'Introduce complexity, ambiguity or real-world tensions',
      key: 'extensionPerspectives'
    },
  ];

  // ─── SOURCE PROMPTS ───────────────────────────────────────────────────────
  // Templates never embed the resource — they reference "the resource above".

  const SOURCE = {

    // ══ SUPPORT BLOCKS ═══════════════════════════════════════════════════════

    supportReadability: {
      audience: 'support',
      source: 'step3-content.html \u2014 Tiered Texts',
      label: 'Simplify readability',
      template: `Audience: Support students — reduce language barriers without reducing intellectual demand.

Using the resource above, rewrite the text with:
- Simpler vocabulary — replace low-frequency or academic words with more accessible alternatives, but keep key subject terminology (with brief inline definitions where helpful)
- Shorter, clearer sentence structures — unpack complex sentences, remove embedded clauses
- The same core concepts and ideas — do not remove or oversimplify the thinking

Maintain similar length (\u00b120%). The goal is access, not simplicity of thought.`
    },

    supportEssential: {
      audience: 'support',
      source: 'step3-content.html \u2014 Highlighted Print Materials',
      label: 'Identify essential passages and produce a shortened version',
      template: `Audience: Support students — students who benefit from a reduced but complete version of the text.

Using the resource above:
1. Identify which passages contain the essential information aligned to this learning intention: {{intention}}
2. Identify which sections are supplementary — useful but not critical for all students
3. Suggest a highlighting or reading strategy (e.g. "Read highlighted sections first, return to the full text if time permits")

Then produce a shortened version containing only the essential passages, with brief bridging sentences where needed to maintain coherence.`
    },

    supportDigest: {
      audience: 'support',
      source: 'step3-content.html \u2014 Digest of Key Ideas',
      label: 'Pre-reading digest',
      template: `Audience: Support students — give them a foothold before they encounter the full resource.

Using the resource above, create a one-page pre-reading digest. Include:
- Essential Question: The big question this content answers
- Key Vocabulary: 5\u20138 terms with student-friendly definitions appropriate for {{year}}
- Main Concepts: The 3\u20134 core ideas students must grasp
- Guiding Questions: 4\u20135 questions to activate prior knowledge and focus reading

Format it clearly so students can refer to it while they read.`
    },

    supportAnalogy: {
      audience: 'support',
      source: 'step3-content.html \u2014 Analogy Generator',
      label: 'Use analogies to make concepts accessible',
      template: `Audience: Support students — give them concrete analogies that provide a foothold on abstract ideas.

Generate 3 analogies that make the key concepts in the resource above more concrete and approachable. For each analogy:
- Explain it in 2\u20133 sentences, written as you would say it directly to a student
- Map the key elements: "In this analogy, [X] represents [Y]"
- Note where the analogy breaks down, so it doesn't accidentally create a misconception

Choose analogies drawn from everyday experiences a {{year}} student is likely to have. Avoid analogies that introduce new abstract ideas.`
    },

    supportVisual: {
      audience: 'support',
      source: 'step3-content.html \u2014 Neurodiversity-Responsive Content Design',
      label: 'Visual supports and multimodal redesign',
      template: `Audience: Support students — students who process information better with visual cues and reduced text density.

Using the resource above, redesign it as a multimodal version:
- Suggest simple icons, diagrams, or symbols to represent key steps or concepts — describe each clearly enough that I can create or source them
- Suggest a colour coding scheme to help students distinguish between types of information (e.g. instructions vs. examples, key terms vs. supporting detail)
- Recommend layout changes that reduce visual clutter: white space, shorter chunks, clear headings

Provide:
- Revised text with [VISUAL] placeholders showing where visuals go
- A description of each suggested visual
- Colour coding rationale (e.g. "Blue = key terms, Green = examples")`
    },

    supportChunk: {
      audience: 'support',
      source: 'step3-content.html \u2014 Neurodiversity-Responsive Content Design',
      label: 'Chunk instructions into sequential steps',
      template: `Audience: Support students — students who benefit from explicit, sequential instructions rather than bundled or implied expectations.

Using the resource above, rewrite the instructions and/or questions as:
- Numbered steps (no more than 8 if possible)
- Concrete, specific language — no metaphors, abstract terms, or implied information
- Active verbs that tell students exactly what to do
- One clear action per step

If any step is still complex, break it into sub-steps (e.g. 3a, 3b).

Note any abstract or implicit language you changed and briefly explain why the original phrasing may have been a barrier.`
    },

    supportSentences: {
      audience: 'support',
      source: 'step6-scaffolding.html \u2014 Sentence Starters & Thinking Stems',
      label: 'Sentence starters for written responses',
      template: `Audience: Support students — students who need help constructing academic written responses.

Using the task or questions in the resource above, create 8\u201310 sentence starters that help students:
- Begin their response using appropriate academic register
- Add evidence or examples from the text
- Explain the significance of evidence ("This shows that...", "This suggests...")
- Make connections between ideas
- Draw conclusions

Use language that is academically appropriate for {{year}} but accessible — model the language of the discipline without making it a barrier.

Also provide a brief note for the teacher on which starters are most useful for students who are very early in their written language development.`
    },

    supportSyntax: {
      audience: 'support',
      source: 'step3-content.html \u2014 Tiered Texts (syntax variant)',
      label: 'Simplified syntax version',
      template: `Audience: Support students — students who can engage with the ideas but are held back by complex sentence structures and dense academic syntax.

Using the resource above, produce a simplified syntax version that:
- Uses shorter sentences (aim for an average of 15\u201320 words per sentence)
- Unpacks embedded clauses into separate sentences
- Prefers active voice over passive voice
- Makes logical connections explicit ("Because of this...", "As a result...", "This means that...")
- Retains all key vocabulary (with brief inline definitions in brackets where helpful)
- Preserves the original meaning and conceptual depth

After the revised text, briefly note the main structural changes you made.`
    },

    supportMemory: {
      audience: 'support',
      source: 'step3-content.html \u2014 Neurodiversity-Responsive Content Design',
      label: 'Working memory supports',
      template: `Audience: Support students — students who struggle to hold multiple pieces of information in mind while completing tasks.

Using the resource above, first identify what this task requires students to hold in working memory simultaneously (e.g. remember the question while reading the text, track multiple steps, recall prior knowledge while generating a response).

Then design 3\u20134 practical supports that reduce working memory load. For each:
- Describe the tool or strategy (e.g. word bank, partially completed frame, colour-coded reference card)
- Explain how it reduces cognitive load
- Write it in a strengths-first way — frame it as a tool for efficiency, not a crutch

Format each support so it is ready to hand to a student.`
    },

    // ══ EXTENSION BLOCKS ═════════════════════════════════════════════════════

    extensionLanguage: {
      audience: 'extension',
      source: 'step3-content.html \u2014 Tiered Texts',
      label: 'Elevate academic language and nuance',
      template: `Audience: Extension students — students who can handle increased linguistic and conceptual density.

Using the resource above, rewrite the text with:
- More precise, discipline-specific academic vocabulary — introduce technical terms with brief context rather than simplifying them away
- More complex sentence structures where they add meaning — subordinate clauses, hedged claims, nuanced qualifications
- Increased conceptual density — pack more ideas per sentence where appropriate
- Greater nuance — acknowledge complexity, exceptions, and the limits of simple explanations

Maintain similar length (\u00b120%). The goal is depth, not just harder words.`
    },

    extensionBigPicture: {
      audience: 'extension',
      source: 'step3-content.html \u2014 Digest of Key Ideas (extension variant)',
      label: 'Big picture framing',
      template: `Audience: Extension students — students who benefit from seeing where the content fits in a larger intellectual landscape.

Using the resource above, create a one-page "big picture" framing document. Include:
- Essential Question: A genuinely open, debatable question this content raises — not one with a single correct answer
- Connections: 2\u20133 links to broader concepts, other subject areas, or real-world contexts
- Implications: What does this idea mean beyond the classroom? What would change if it weren't true?
- Points of complexity: Where do experts disagree, or where does the simple version break down?
- Going further: 2\u20133 questions a curious student could investigate independently

This is a thinking scaffold, not a reading guide. It should provoke inquiry, not summarise content.`
    },

    extensionAbstract: {
      audience: 'extension',
      source: 'step5-equalizer.html \u2014 Concrete \u2194 Abstract',
      label: 'Concrete \u2192 abstract version of the text',
      template: `Audience: Extension students — students who can move beyond examples to principles, patterns and transferable ideas.

Using the resource above, create an abstract version that:
- Moves from specific examples to underlying principles and generalisations
- Uses "Why" and "What does this mean?" framing rather than "What" questions
- Asks students to identify patterns, evaluate ideas, and make connections across contexts
- Introduces the idea that these concepts have implications beyond the specific examples in the text

Then generate 3 discipline-appropriate analogies that make the abstract principles more intellectually approachable without pulling them back to the concrete. For each:
- Explain it in 2\u20133 sentences as you'd say it to a student
- Map the key elements: "In this analogy, [X] represents [Y]"
- Note where the analogy breaks down`
    },

    extensionOrganiser: {
      audience: 'extension',
      source: 'step5-equalizer.html \u2014 Structured \u2194 Open-Ended',
      label: 'Analytical graphic organiser',
      template: `Audience: Extension students — students who can handle analytical thinking, not just note-taking.

Using the resource above, design an analytical graphic organiser that:
- Requires students to do something with the information — compare, evaluate, synthesise, or argue — not just record it
- Has a clear structure but leaves intellectual decisions to the student
- Includes at least one section that requires a student-generated claim or judgement, not just retrieved information
- Could serve as a planning tool for an extended written or oral response

Provide:
- The organiser itself, clearly labelled and ready to use
- A brief teacher note explaining the analytical demand of each section
- One example entry showing what "good" looks like at the first section only`
    },

    extensionFrames: {
      audience: 'extension',
      source: 'step6-scaffolding.html \u2014 Sentence Starters & Thinking Stems (extension variant)',
      label: 'Academic language frames',
      template: `Audience: Extension students — students who are developing expert academic writing in {{subject}}.

Using the task or questions in the resource above, create 8\u201310 discipline-specific sentence frames that model the language of expert writing in this subject area. Include frames that help students:
- Make a well-qualified claim or argument
- Integrate and attribute evidence precisely
- Acknowledge complexity or counter-arguments
- Evaluate the significance of evidence
- Draw disciplinary conclusions

These frames should reflect how a knowledgeable person in {{subject}} actually writes — not generic academic language. Avoid frames that could work in any subject.

Include a brief note on the disciplinary language conventions these frames model.`
    },

    extensionDemand: {
      audience: 'extension',
      source: 'step3-process.html \u2014 Tiered Questions by Cognitive Demand',
      label: 'Increase cognitive demand of questions',
      template: `Audience: Extension students — students ready for greater depth and challenge.

Using the questions or task in the resource above, rewrite them to increase cognitive demand using Bloom's Taxonomy — targeting Evaluate and Create:
- Questions should ask students to evaluate, argue, synthesise, or create
- Questions should require students to go beyond the text — to judge, compare ideas, identify limitations, or generate something new
- At least one question should have genuine intellectual uncertainty — one the teacher couldn't fully predict the answer to

Ensure these require genuine higher-order thinking, not just harder vocabulary or longer responses. Include a brief note indicating which Bloom's level each question targets.`
    },

    extensionOpenTask: {
      audience: 'extension',
      source: 'step5-equalizer.html \u2014 Structured \u2194 Open-Ended',
      label: 'Open-ended / student-directed version',
      template: `Audience: Extension students — students ready for greater autonomy and depth.

Using the task in the resource above, create an open-ended version that:
- Provides the learning goal and success criteria, but does not specify approach, structure, or process
- Requires students to make genuine intellectual decisions — not just stylistic ones
- Offers enough constraint to be achievable, but enough openness to be genuinely student-directed
- Could result in meaningfully different products from different students, all demonstrating the same understanding

Provide:
- The open-ended task as the student would receive it
- Clear success criteria (a description of what genuine understanding looks like — not a checklist)
- A brief teacher note on how to assess this fairly across different student responses`
    },

    extensionModes: {
      audience: 'extension',
      source: 'Prompt Builder \u2014 Mode of Response (extension variant)',
      label: 'Multiple response modes',
      template: `Audience: Extension students — students ready to exercise genuine choice in how they demonstrate understanding.

Using the task in the resource above, redesign it to offer three genuine response mode options. Each option should:
- Require equivalent depth of thinking — the mode changes, not the cognitive demand
- Be genuinely different in form, not just superficially varied
- Give students enough structure to work independently

Provide three options:
1. Written response — requires analysis or argument, not just description
2. Visual response — diagram, concept map or annotated image; specify exactly what it must show and how it should be annotated
3. Oral / recorded response — structured verbal explanation or argument; specify format, length, and what must be covered

For each: write the task instruction as the student would receive it.`
    },

    extensionPerspectives: {
      audience: 'extension',
      source: 'Prompt Builder \u2014 Competing Perspectives',
      label: 'Add nuance: competing perspectives or real-world complexity',
      template: `Audience: Extension students — students ready to engage with the complexity and tensions within this content.

Using the resource above, add a layer of nuance by:
1. Identifying 2\u20133 points where experts disagree, the simple version breaks down, or real-world application is more complex than the text suggests
2. For each point: briefly explain the tension or debate in intellectually honest but accessible terms
3. Generating 1\u20132 discussion or inquiry questions for each point that a student could genuinely argue either way

Then write a short "Beyond the text" section (200\u2013300 words) that could be added to the original resource, introducing these tensions to extension students.

The goal is intellectual honesty — showing students that knowledge is contested and complex, not settled and simple.`
    },

    // ══ EAL/D BLOCKS ═════════════════════════════════════════════════════════

    ealdGlossary: {
      audience: 'eald',
      source: 'step6-scaffolding.html \u2014 Tier 2/3 Vocabulary List',
      label: 'Key vocabulary glossary (Tier 2/3)',
      template: `Context: I'm teaching {{subject}} to {{year}} students. My EAL/D students need explicit vocabulary support to access this content.
Objective: Identify and define the key academic vocabulary students will need.
Instructional nuance: Focus on Tier 2 (high-utility academic words like "analyse," "synthesise") and Tier 3 (domain-specific terms). Provide student-friendly definitions \u2014 avoid circular language.

Working from the resource above:
- Identify 8\u201312 key vocabulary terms (mix of Tier 2 and Tier 3)
- For each term, provide:
  \u2014 A student-friendly definition appropriate for {{year}}
  \u2014 An example sentence showing the word used in context
  \u2014 Whether it is Tier 2 (general academic) or Tier 3 (subject-specific)

Format the output as a table: Term | Definition | Example sentence | Tier`
    },

    ealdSubjectVocab: {
      audience: 'eald',
      source: 'step6-scaffolding.html \u2014 Tier 2/3 Vocabulary List (subject-specific)',
      label: 'Unpack subject-specific language',
      template: `Context: I'm teaching {{subject}} to {{year}} students. My EAL/D students need explicit support with the subject-specific language of this discipline.
Objective: Surface and explain the subject-specific vocabulary and language patterns in this content.
Instructional nuance: Each discipline has its own language. In geography, "explain the relationship between..." expects a particular kind of response. In science, "hypothesis" has a precise meaning unlike everyday usage. Make these demands explicit.

Working from the resource above:
1. Identify 6\u201310 subject-specific terms that carry precise meaning in {{subject}}
2. For each term: provide a student-friendly definition and note how the meaning differs from everyday English where relevant
3. Identify 3\u20134 subject-specific language patterns or task verbs (e.g. "justify," "account for") and explain in plain language what each one is asking students to do
4. Format as a reference sheet students can keep beside the resource`
    },

    ealdSentenceFrames: {
      audience: 'eald',
      source: 'step6-scaffolding.html \u2014 Sentence Starters & Thinking Stems',
      label: 'EAL/D sentence frames',
      template: `Using the task or questions in the resource above, create sentence starters and frames specifically designed to support EAL/D students in constructing academic written responses. Include frames that help students:
- Begin their response using appropriate academic register
- Introduce evidence or examples from the text
- Explain the significance of evidence ("This shows that...", "This suggests...")
- Make connections between ideas
- Draw conclusions

Provide 10\u201312 frames in total. Use language that is academically appropriate for {{year}} but accessible to students who are still developing English proficiency. Avoid idiomatic phrases.

Also provide a brief note for the teacher on which frames are most useful for early-stage vs. developing EAL/D learners.`
    },

    ealdVisualSupports: {
      audience: 'eald',
      source: 'step6-scaffolding.html \u2014 Add Visual Supports to Vocabulary',
      label: 'Visual supports for vocabulary (EAL/D)',
      template: `Context: The key vocabulary in the resource above would be more accessible if EAL/D students had visual cues alongside definitions.
Objective: Suggest simple icons, symbols, or visual representations that support vocabulary learning.
Instructional nuance: Visuals should be simple, unambiguous, and culturally appropriate \u2014 memory aids, not artwork.

For the key vocabulary in the resource above, suggest:
- A simple visual representation for each term (icon, symbol, diagram, or gesture \u2014 describe it clearly enough to create or source)
- Why this visual support helps students remember or understand the term
- How to practically represent this in the classroom

Prioritise visuals that are simple to draw or find, unambiguous across cultures, and memorable.`
    },

    ealdSyntax: {
      audience: 'eald',
      source: 'step3-content.html \u2014 Tiered Texts (EAL/D syntax variant)',
      label: 'Simplified syntax version (EAL/D)',
      template: `Context: EAL/D students can engage with the ideas in the resource above but are held back by complex sentence structures and dense academic syntax.
Objective: Produce a simplified syntax version that reduces linguistic complexity without reducing conceptual demand.

Working from the resource above, produce a version that:
- Uses shorter sentences (aim for 15\u201320 words average)
- Unpacks embedded clauses into separate sentences
- Prefers active voice over passive voice
- Makes logical connections explicit ("Because of this...", "As a result...", "This means that...")
- Retains all key vocabulary (with brief inline definitions in brackets where needed)
- Preserves the original meaning and conceptual depth

After the revised text, briefly note the main structural changes made.`
    },

    ealdMandarin: {
      audience: 'eald',
      source: 'step6-scaffolding.html \u2014 Create a Bilingual Glossary',
      label: 'Bilingual English\u2013Mandarin glossary',
      template: `Context: I have EAL/D students whose home language is Mandarin who need vocabulary support to access this content.
Objective: Generate a bilingual glossary pairing English academic vocabulary with Mandarin translations and explanations.
Instructional nuance: This is a scaffold, not a replacement for English instruction. Include student-friendly definitions in both languages \u2014 not just word translations.

Working from the resource above, create a bilingual English\u2013Mandarin glossary with:
- Each key term in English with a student-friendly definition appropriate for {{year}}
- The same term in Mandarin (simplified characters) with an equivalent student-friendly explanation
- A simple example sentence in English showing the term in context

Format as a two-column table suitable for printing. Keep definitions to one sentence each.
If a direct translation doesn't capture the meaning well, note this and provide a brief explanation rather than a misleading literal translation.`
    },

    ealdOtherLanguage: {
      audience: 'eald',
      source: 'step6-scaffolding.html \u2014 Bilingual Glossary + Translate Task Instructions',
      label: 'Bilingual glossary + translated task instructions',
      template: `Context: I have EAL/D students whose home language is {{language}} who need both vocabulary support and clarity on task instructions.
Objective: Produce two resources: a bilingual glossary and a translated task instructions sheet.
Instructional nuance: Home-language resources are cognitive anchors. Include student-friendly definitions, not just direct translations.

Working from the resource above:

Part 1 \u2014 Bilingual Glossary (English / {{language}}):
- Identify 8\u201312 key terms
- For each: English definition for {{year}}, {{language}} translation with brief explanation, example sentence in English
- Format as a two-column table for printing
- Note any translations that miss nuance and provide a brief explanation instead

Part 2 \u2014 Translated Task Instructions:
- Translate the task instructions into {{language}}, maintaining the same sequence
- Highlight any English academic phrases likely to cause confusion and provide both the {{language}} equivalent and a plain-English alternative
- Format with English on the left and {{language}} on the right`
    },

    // ══ NEURODIVERSITY / LEARNING NEEDS BLOCKS ═══════════════════════════════

    neuroChunked: {
      audience: 'neuro',
      source: 'step3-content.html \u2014 Neurodiversity-Responsive Content Design',
      label: 'Chunked instructions (one step at a time)',
      template: `Context: The resource above may contain instructions or content that are difficult for students who need concrete, sequential information.
Objective: Rewrite as numbered steps using clear, concrete language.
Instructional nuance: One clear action per step. Active verbs. No implied information.

Working from the resource above, rewrite the instructions and/or questions as:
- Numbered steps (no more than 8 if possible)
- Concrete, specific language \u2014 no metaphors, abstract terms, or implied information
- Active verbs that tell students exactly what to do
- One clear action per step

If any step is still complex, break it into sub-steps (e.g. 3a, 3b).

Note any abstract or implicit language you changed and explain why the original phrasing may have been a barrier.`
    },

    neuroWorkingMemory: {
      audience: 'neuro',
      source: 'step3-content.html \u2014 Neurodiversity-Responsive Content Design',
      label: 'Reduce working memory load',
      template: `Context: Some students have working memory challenges and struggle to hold multiple pieces of information in mind while completing tasks.
Objective: Design supports that reduce working memory demands while affirming student strengths.
Instructional nuance: Frame supports as tools for efficiency, not accommodations for deficiency.

Working from the resource above, first identify what this task requires students to hold in working memory simultaneously.

Then suggest 3\u20134 strength-based supports. For each:
- Describe the tool or strategy
- Explain how it reduces cognitive load
- Frame it positively (e.g. "This tool helps you work efficiently")

Suitable tools: reference sheets, colour-coded reminders, graphic organisers, partially completed frames, read-aloud cues, chunked check-in points.`
    },

    neuroWhiteSpace: {
      audience: 'neuro',
      source: 'step3-content.html \u2014 Neurodiversity-Responsive Content Design (layout)',
      label: 'Increased white space and reduced visual clutter',
      template: `Context: The resource above needs to be easier to navigate for students who experience visual overwhelm or benefit from a cleaner layout.
Objective: Suggest specific layout adjustments that reduce visual density without changing the content.

Working from the resource above, provide:
1. A redesigned version with improved layout \u2014 more white space, clear visual hierarchy, shorter sections
2. Specific formatting recommendations:
   - Font and size suggestions
   - Suggested line spacing
   - How to use headings to create clear structure
   - How to chunk content visually (boxes, dividers, numbering)
3. Any content that could move to a separate reference sheet to reduce the visual load of the main task`
    },

    neuroExplicitProcess: {
      audience: 'neuro',
      source: 'step6-scaffolding.html \u2014 Break Down a Complex Task',
      label: 'Explicit process steps / procedure guide',
      template: `Working from the task in the resource above, create an explicit process guide \u2014 a step-by-step procedure students can follow independently.

The guide should:
- Break the task into 5\u20138 clear, manageable steps, sequenced logically
- Include a success criterion for each step so students know when they're done
- Use concrete, active language \u2014 tell students exactly what to do
- Flag any decision points and briefly explain how to make that decision
- End with a self-check list: 4\u20135 questions the student asks before submitting

Use student-friendly language appropriate for {{year}}. The goal: a student who is stuck can consult this and get unstuck without needing the teacher.`
    },

    neuroReducedOutput: {
      audience: 'neuro',
      source: 'Prompt Builder \u2014 Reduced Output Options',
      label: 'Reduced written output options',
      template: `Context: Some students are held back not by the thinking required but by the output required \u2014 extended writing can mask genuine understanding.
Objective: Redesign the task to offer output alternatives that reduce written production demand while maintaining cognitive demand.

Working from the resource above, offer three output alternatives:

1. Annotated diagram or visual: Describe exactly what students should create and annotate \u2014 what should be labelled, what needs to be shown.
2. Structured spoken/recorded response: Provide the exact prompt and structure (e.g. "In 3\u20135 sentences, explain... Start with..., then..., finish with...").
3. Structured dot-point response: Scaffolded written option \u2014 how many points, what each should cover, with sentence starters.

For each: write it as the student would receive it, clearly enough to complete independently.`
    },

    neuroTTS: {
      audience: 'neuro',
      source: 'Prompt Builder \u2014 Text-to-Speech Formatting',
      label: 'Text-to-speech friendly formatting',
      template: `Context: Some students use text-to-speech software. Formatting that works visually can create confusion when read aloud.
Objective: Reformat the resource above for text-to-speech compatibility without changing the content.
Instructional nuance: TTS reads linearly. Structure must be communicated through language, not layout.

Working from the resource above:
1. Rewrite any tables as clearly structured text (e.g. "Term: [term]. Definition: [definition].")
2. Spell out all abbreviations in full on first use
3. Replace layout references ("see the diagram below") with descriptions of the content
4. Add verbal cues that signal structure ("This section covers three ideas. The first is...")
5. Flag any content in images that TTS cannot read \u2014 suggest text-based alternatives
6. Note any other TTS compatibility issues`
    },

    neuroAnchor: {
      audience: 'neuro',
      source: 'step3-process.html \u2014 Anchor Activities',
      label: 'Anchor activity menu for early finishers',
      template: `Working from the main task in the resource above, create a menu of anchor activities for students who finish early.

Each activity should:
- Be self-directed (students can begin and continue without teacher input)
- Connect meaningfully to the current learning \u2014 not busywork
- Accommodate a range of readiness levels
- Be sustainable across multiple lessons in this topic

Create 4\u20135 anchor activities. For each:
- Write the student-facing instruction
- Explain the learning value (1 sentence \u2014 for the teacher)
- Note the approximate time required`
    }

  };

  // ─── PUBLIC API ───────────────────────────────────────────────────────────

  /**
   * Build a single prompt block.
   *
   * @param {string} key      - Key from SOURCE
   * @param {object} ctx      - { year, subject, intention, resource }
   *                            Note: resource is injected in preamble only
   * @param {object} extras   - { language }
   * @returns {string} Ready-to-use task instruction block
   */
  function buildBlock(key, ctx, extras) {
    const entry = SOURCE[key];
    if (!entry) return `[Prompt block "${key}" not found]`;

    const assembled = inject(entry.template, ctx, extras);
    return `TASK: ${entry.label}\n\n${assembled}`;
  }

  function getSource(key) {
    return SOURCE[key] ? SOURCE[key].source : 'Unknown';
  }

  function listKeys() {
    return Object.keys(SOURCE);
  }

  return {
    buildBlock,
    getSource,
    listKeys,
    SOURCE,
    SUPPORT_OPTIONS,
    EXTENSION_OPTIONS
  };

})();
