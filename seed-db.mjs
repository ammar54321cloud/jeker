import mysql from "mysql2/promise";

const connection = await mysql.createConnection(process.env.DATABASE_URL);

// Seed Phases
const phases = [
  { name: "Class 11 Foundation", displayOrder: 1 },
  { name: "Class 12 Advanced", displayOrder: 2 },
  { name: "Revision & Mock Tests", displayOrder: 3 },
];

for (const phase of phases) {
  await connection.execute("INSERT INTO phases (name, displayOrder) VALUES (?, ?)", [
    phase.name,
    phase.displayOrder,
  ]);
}

// Get phase IDs
const [phaseRows] = await connection.execute("SELECT id, name FROM phases");
const phaseMap = {};
phaseRows.forEach((row) => {
  phaseMap[row.name] = row.id;
});

// Seed Chapters for Class 11 Foundation
const class11Chapters = [
  // Jun-Jul
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Physics", name: "Units & Measurements", month: "Jun-Jul", priority: "P3", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Physics", name: "Kinematics (1D & 2D)", month: "Jun-Jul", priority: "P1", weightage: "3-4 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Chemistry", name: "Mole Concept", month: "Jun-Jul", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Chemistry", name: "Atomic Structure", month: "Jun-Jul", priority: "P2", weightage: "2 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Mathematics", name: "Sets & Relations", month: "Jun-Jul", priority: "P2", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Mathematics", name: "Trigonometry Basics", month: "Jun-Jul", priority: "P1", weightage: "2-3 questions" },

  // Aug-Sep
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Physics", name: "Laws of Motion", month: "Aug-Sep", priority: "P1", weightage: "3-4 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Physics", name: "Work, Energy & Power", month: "Aug-Sep", priority: "P1", weightage: "3-4 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Chemistry", name: "Periodic Table", month: "Aug-Sep", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Chemistry", name: "Chemical Bonding", month: "Aug-Sep", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Mathematics", name: "Quadratic Equations", month: "Aug-Sep", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Mathematics", name: "Complex Numbers", month: "Aug-Sep", priority: "P2", weightage: "1-2 questions" },

  // Oct-Nov
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Physics", name: "Rotational Motion", month: "Oct-Nov", priority: "P1", weightage: "3-4 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Physics", name: "Gravitation", month: "Oct-Nov", priority: "P3", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Chemistry", name: "Thermodynamics", month: "Oct-Nov", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Chemistry", name: "Chemical Equilibrium", month: "Oct-Nov", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Mathematics", name: "Sequence & Series", month: "Oct-Nov", priority: "P2", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Mathematics", name: "Binomial Theorem", month: "Oct-Nov", priority: "P2", weightage: "1-2 questions" },

  // Dec-Jan
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Physics", name: "Mechanical Properties of Solids/Fluids", month: "Dec-Jan", priority: "P3", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Physics", name: "Thermal Physics", month: "Dec-Jan", priority: "P2", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Chemistry", name: "Ionic Equilibrium", month: "Dec-Jan", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Chemistry", name: "General Organic Chemistry (GOC)", month: "Dec-Jan", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Mathematics", name: "Straight Lines", month: "Dec-Jan", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Mathematics", name: "Conic Sections (Circle, Parabola)", month: "Dec-Jan", priority: "P1", weightage: "2-3 questions" },

  // Feb-Mar
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Physics", name: "Waves & Oscillations", month: "Feb-Mar", priority: "P2", weightage: "2 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Chemistry", name: "Hydrocarbons", month: "Feb-Mar", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Chemistry", name: "s & p Block Elements", month: "Feb-Mar", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Mathematics", name: "Conic Sections (Ellipse, Hyperbola)", month: "Feb-Mar", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 11 Foundation"], subject: "Mathematics", name: "Permutations & Combinations", month: "Feb-Mar", priority: "P1", weightage: "2-3 questions" },
];

// Seed Chapters for Class 12 Advanced
const class12Chapters = [
  // Jun-Jul
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Physics", name: "Electrostatics", month: "Jun-Jul", priority: "P1", weightage: "3-4 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Physics", name: "Current Electricity", month: "Jun-Jul", priority: "P1", weightage: "3-5 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Chemistry", name: "Solutions", month: "Jun-Jul", priority: "P2", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Chemistry", name: "Electrochemistry", month: "Jun-Jul", priority: "P2", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Mathematics", name: "Relations & Functions", month: "Jun-Jul", priority: "P2", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Mathematics", name: "Inverse Trigonometry", month: "Jun-Jul", priority: "P2", weightage: "1-2 questions" },

  // Aug-Sep
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Physics", name: "Magnetism", month: "Aug-Sep", priority: "P2", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Physics", name: "Electromagnetic Induction (EMI)", month: "Aug-Sep", priority: "P2", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Chemistry", name: "Chemical Kinetics", month: "Aug-Sep", priority: "P2", weightage: "2 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Chemistry", name: "Surface Chemistry", month: "Aug-Sep", priority: "P2", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Mathematics", name: "Continuity & Differentiability", month: "Aug-Sep", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Mathematics", name: "Applications of Derivatives", month: "Aug-Sep", priority: "P1", weightage: "2-3 questions" },

  // Oct-Nov
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Physics", name: "Ray Optics", month: "Oct-Nov", priority: "P2", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Physics", name: "Wave Optics", month: "Oct-Nov", priority: "P2", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Chemistry", name: "d & f Block Elements", month: "Oct-Nov", priority: "P2", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Chemistry", name: "Coordination Compounds", month: "Oct-Nov", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Mathematics", name: "Indefinite & Definite Integrals", month: "Oct-Nov", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Mathematics", name: "Area Under Curve", month: "Oct-Nov", priority: "P1", weightage: "1-2 questions" },

  // Dec-Jan
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Physics", name: "Modern Physics", month: "Dec-Jan", priority: "P1", weightage: "3-4 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Chemistry", name: "Aldehydes, Ketones & Carboxylic Acids", month: "Dec-Jan", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Chemistry", name: "Amines & Biomolecules", month: "Dec-Jan", priority: "P1", weightage: "2-3 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Mathematics", name: "Differential Equations", month: "Dec-Jan", priority: "P2", weightage: "1-2 questions" },
  { phaseId: phaseMap["Class 12 Advanced"], subject: "Mathematics", name: "Vectors & 3D Geometry", month: "Dec-Jan", priority: "P1", weightage: "2-3 questions" },
];

// Seed Chapters for Revision & Mock Tests
const revisionChapters = [
  { phaseId: phaseMap["Revision & Mock Tests"], subject: "Physics", name: "Full Syllabus Revision", month: "Month 21-24", priority: "P1", weightage: "All topics" },
  { phaseId: phaseMap["Revision & Mock Tests"], subject: "Chemistry", name: "Full Syllabus Revision", month: "Month 21-24", priority: "P1", weightage: "All topics" },
  { phaseId: phaseMap["Revision & Mock Tests"], subject: "Mathematics", name: "Full Syllabus Revision", month: "Month 21-24", priority: "P1", weightage: "All topics" },
];

const allChapters = [...class11Chapters, ...class12Chapters, ...revisionChapters];

for (const chapter of allChapters) {
  await connection.execute(
    "INSERT INTO chapters (phaseId, subject, name, month, priority, weightage) VALUES (?, ?, ?, ?, ?, ?)",
    [chapter.phaseId, chapter.subject, chapter.name, chapter.month, chapter.priority, chapter.weightage]
  );
}

// Seed Daily Schedule
const dailySchedule = [
  { timeSlot: "6:00 AM - 7:00 AM", activity: "Formula revision and review of the previous day's Error Log", displayOrder: 1 },
  { timeSlot: "School/Coaching Hours", activity: "Active listening, comprehensive note-taking, and immediate doubt clarification", displayOrder: 2 },
  { timeSlot: "4:00 PM - 5:30 PM", activity: "Study Block 1: Subject 1 (e.g., Physics) - Theory application and problem-solving", displayOrder: 3 },
  { timeSlot: "5:30 PM - 7:00 PM", activity: "Study Block 2: Subject 2 (e.g., Mathematics) - Intensive problem practice", displayOrder: 4 },
  { timeSlot: "8:00 PM - 9:30 PM", activity: "Study Block 3: Subject 3 (e.g., Chemistry) or dedicated Class 11 parallel revision", displayOrder: 5 },
  { timeSlot: "9:30 PM - 10:00 PM", activity: "Daily summary, updating the Error Log, and planning the schedule for the next day", displayOrder: 6 },
];

for (const slot of dailySchedule) {
  await connection.execute(
    "INSERT INTO dailySchedule (timeSlot, activity, displayOrder) VALUES (?, ?, ?)",
    [slot.timeSlot, slot.activity, slot.displayOrder]
  );
}

// Seed Recommended Books
const recommendedBooks = [
  // Physics
  { subject: "Physics", category: "Concepts", title: "Concepts of Physics", author: "H.C. Verma", description: "Comprehensive conceptual understanding of physics", displayOrder: 1 },
  { subject: "Physics", category: "Practice", title: "Objective Physics", author: "D.C. Pandey", description: "Extensive practice problems for JEE", displayOrder: 2 },
  { subject: "Physics", category: "Reference", title: "NCERT Physics Textbook", author: "NCERT", description: "Foundation and reference material", displayOrder: 3 },

  // Chemistry
  { subject: "Chemistry", category: "Concepts", title: "NCERT Chemistry Textbook", author: "NCERT", description: "Essential for Inorganic Chemistry", displayOrder: 1 },
  { subject: "Chemistry", category: "Practice", title: "Physical Chemistry", author: "N. Awasthi", description: "Advanced problems in Physical Chemistry", displayOrder: 2 },
  { subject: "Chemistry", category: "Practice", title: "Organic Chemistry", author: "M.S. Chouhan", description: "Mechanism-based organic chemistry problems", displayOrder: 3 },

  // Mathematics
  { subject: "Mathematics", category: "Concepts", title: "NCERT Mathematics Textbook", author: "NCERT", description: "Foundation concepts", displayOrder: 1 },
  { subject: "Mathematics", category: "Practice", title: "Mathematics for JEE Main", author: "R.D. Sharma", description: "Comprehensive practice problems", displayOrder: 2 },
  { subject: "Mathematics", category: "Reference", title: "Calculus & Coordinate Geometry", author: "Cengage", description: "Advanced problem sets", displayOrder: 3 },
];

for (const book of recommendedBooks) {
  await connection.execute(
    "INSERT INTO recommendedBooks (subject, category, title, author, description, displayOrder) VALUES (?, ?, ?, ?, ?, ?)",
    [book.subject, book.category, book.title, book.author, book.description, book.displayOrder]
  );
}

console.log("✅ Database seeded successfully!");
await connection.end();
