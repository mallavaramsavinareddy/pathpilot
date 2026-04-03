import { careerPaths, timeOptions } from '../data/paths.js';

function normalize(text) {
  return String(text || '').toLowerCase();
}

function getTimeMeta(timeValue) {
  return timeOptions.find((item) => item.value === timeValue) || timeOptions[1];
}

function inferSkillLevel(skills) {
  const text = normalize(skills);
  if (!text.trim()) return 'beginner';
  const advancedSignals = [
    'react', 'python', 'sql', 'linux', 'git', 'api', 'statistics', 'networking', 'node', 'pandas',
    'docker', 'kubernetes', 'aws', 'azure', 'solidity', 'unity', 'figma', 'java', 'c++', 'swift'
  ];
  const beginnerSignals = ['basic', 'beginner', 'new', 'learning', 'intro'];
  const advancedMatches = advancedSignals.filter((signal) => text.includes(signal)).length;
  const beginnerMatches = beginnerSignals.filter((signal) => text.includes(signal)).length;
  
  if (advancedMatches >= 3) return 'intermediate';
  if (beginnerMatches >= 1 && advancedMatches === 0) return 'beginner';
  return advancedMatches >= 1 ? 'early-intermediate' : 'beginner';
}

export function buildGoalRoadmap(goal, skills, timeValue) {
  const path = careerPaths[goal];
  if (!path) {
    return { error: 'Choose a valid goal to generate your roadmap.' };
  }

  const timeMeta = getTimeMeta(timeValue);
  const level = inferSkillLevel(skills);
  const multiplier = level === 'intermediate' ? 0.72 : level === 'early-intermediate' ? 0.86 : 1;
  
  // Dynamic base months based on complexity
  const complexityMap = {
    'Web Development': 6,
    'Cybersecurity': 8,
    'Data Science': 7,
    'Mobile Development': 6,
    'AI & Machine Learning': 10,
    'Cloud Engineering': 7,
    'DevOps': 9,
    'UI/UX Design': 5,
    'Game Development': 8,
    'Blockchain Development': 9,
    'Software Engineering': 7
  };
  
  const baseMonths = complexityMap[goal] || 6;
  const estimatedMonths = Math.max(3, Math.round((baseMonths / timeMeta.hours) * multiplier));
  
  const focusNote = level === 'intermediate'
    ? 'You already have enough background to move faster and prioritize portfolio-quality projects.'
    : level === 'early-intermediate'
      ? 'You have useful starting knowledge, so your plan balances review with practical output.'
      : 'Your roadmap starts from core fundamentals and gradually builds confidence.';

  const customSteps = path.roadmap.map((step, index) => ({
    id: index + 1,
    title: step.title,
    detail: step.detail,
    weekRange: estimatedMonths <= 4
      ? `Stage ${index + 1}`
      : `${index * Math.max(1, Math.round(estimatedMonths / 5)) + 1}-${(index + 1) * Math.max(1, Math.round(estimatedMonths / 5))} weeks`
  }));

  return {
    goal,
    icon: path.icon,
    overview: path.overview,
    level,
    focusNote,
    timeLabel: timeMeta.label,
    estimatedTime: `${estimatedMonths} month${estimatedMonths === 1 ? '' : 's'} at ${timeMeta.label.toLowerCase()}`,
    steps: customSteps,
    resources: path.resources,
    tips: path.tips,
    avoid: path.avoid,
    milestones: path.milestones
  };
}

export function suggestGoals(skills, timeValue) {
  const text = normalize(skills);
  const timeMeta = getTimeMeta(timeValue);
  
  const entries = Object.entries(careerPaths).map(([name, path]) => {
    const keywordMatches = path.fit.filter((keyword) => text.includes(keyword)).length;
    
    // Specific bonuses
    let bonus = 0;
    if (name === 'Web Development' && timeMeta.hours <= 1) bonus += 2;
    if (name === 'Data Science' && (text.includes('excel') || text.includes('math'))) bonus += 2;
    if (name === 'Cybersecurity' && (text.includes('linux') || text.includes('network'))) bonus += 2;
    if (name === 'UI/UX Design' && (text.includes('design') || text.includes('art') || text.includes('creative'))) bonus += 3;
    if (name === 'Game Development' && (text.includes('game') || text.includes('unity') || text.includes('c#'))) bonus += 3;
    if (name === 'AI & Machine Learning' && (text.includes('math') || text.includes('python') || text.includes('research'))) bonus += 2;
    if (name === 'Mobile Development' && (text.includes('app') || text.includes('mobile') || text.includes('phone'))) bonus += 2;
    if (name === 'DevOps' && (text.includes('automation') || text.includes('linux') || text.includes('server'))) bonus += 2;
    if (name === 'Blockchain Development' && (text.includes('crypto') || text.includes('finance') || text.includes('security'))) bonus += 2;

    const score = keywordMatches * 3 + bonus + (text.trim() ? 1 : 0);

    const reasons = {
      'Web Development': 'Ideal for those who want to see immediate visual results and build for the web.',
      'Cybersecurity': 'Perfect for analytical minds focused on protection and system integrity.',
      'Data Science': 'Great for those who love finding patterns in data and solving complex puzzles.',
      'Mobile Development': 'Best for builders who want to create apps people use every day on their phones.',
      'AI & Machine Learning': 'Suits those interested in the future of automation and advanced mathematics.',
      'Cloud Engineering': 'Ideal for students interested in the backbone of modern internet infrastructure.',
      'DevOps': 'Perfect for those who love automation, efficiency, and bridging development with operations.',
      'UI/UX Design': 'Great for creative thinkers who care about user experience and visual aesthetics.',
      'Game Development': 'Best for those who want to combine storytelling, art, and complex logic.',
      'Blockchain Development': 'Suits those interested in decentralization, security, and the future of finance.',
      'Software Engineering': 'A solid foundation for anyone wanting to master the core principles of coding.'
    };

    return {
      id: name,
      name,
      icon: path.icon,
      overview: path.overview,
      score,
      reason: reasons[name] || 'A strong tech path with great growth potential.',
      strengths: path.strengths,
      resources: path.resources.slice(0, 3),
      pace: timeMeta.hours >= 2
        ? 'You have enough time to progress steadily with projects and review.'
        : 'This path is still possible, but consistency and narrower weekly goals will matter more.'
    };
  });

  const sorted = entries.sort((a, b) => b.score - a.score).slice(0, 3);
  
  const comparison = {
    bestForFastFeedback: 'Web Development',
    bestForStructuredAnalysis: 'Data Science',
    bestForSystemDefense: 'Cybersecurity',
    bestForCreativity: 'UI/UX Design',
    bestForFutureTech: 'AI & Machine Learning'
  };

  return {
    suggestions: sorted,
    comparison,
    profileSummary: text.trim()
      ? `Based on your current skills — ${skills.trim()} — these options align best with your background and available time.`
      : `With limited input, these suggestions prioritize student-friendly entry points and realistic learning progression.`
  };
}