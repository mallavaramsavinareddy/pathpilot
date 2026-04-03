import React from 'https://esm.sh/react@19.2.0';
import { html } from '../jsx.js';
import { timeOptions, careerPaths } from '../data/paths.js';

export function PlannerForm({ mode, onSubmit, isLoading }) {
  const [goal, setGoal] = React.useState('Web Development');
  const [skills, setSkills] = React.useState('');
  const [time, setTime] = React.useState('1h');
  const [error, setError] = React.useState('');

  const careerOptions = Object.keys(careerPaths);

  React.useEffect(() => {
    setError('');
  }, [mode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!skills.trim()) {
      setError('Add your current skills so pathpilot can generate more relevant guidance.');
      return;
    }
    setError('');
    onSubmit({ goal, skills, time, mode });
  };

  return html`
    <section className="rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/95 p-4 shadow-md sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">Start with where you are</h2>
          <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted))]">
            ${mode === 'known'
              ? 'Tell us your target field and we will map a realistic path based on your current skills and available time.'
              : 'Share your current strengths and schedule, and pathpilot will suggest career paths that fit you best.'}
          </p>
        </div>
        <div className="hidden rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--primary))]/10 px-3 py-1 text-xs font-medium text-[hsl(var(--primary))] sm:block">
          Interactive planner
        </div>
      </div>

      <form onSubmit=${handleSubmit} className="space-y-4">
        ${mode === 'known' && html`
          <div>
            <label className="mb-2 block text-sm font-medium text-white">Goal</label>
            <select
              value=${goal}
              onChange=${(event) => setGoal(event.target.value)}
              className="w-full rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-white outline-none transition-all focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20"
            >
              ${careerOptions.map((opt) => html`<option key=${opt} value=${opt}>${opt}</option>`)}
            </select>
          </div>
        `}

        <div>
          <label className="mb-2 block text-sm font-medium text-white">Current skills</label>
          <input
            type="text"
            value=${skills}
            onChange=${(event) => setSkills(event.target.value)}
            placeholder=${mode === 'known'
              ? 'Ex: basic HTML, CSS, some JavaScript and Git'
              : 'Ex: Excel, logical reasoning, basic Python, communication'}
            className="w-full rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-[hsl(var(--muted))] focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">Time available per day</label>
          <select
            value=${time}
            onChange=${(event) => setTime(event.target.value)}
            className="w-full rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-white outline-none transition-all focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20"
          >
            ${timeOptions.map((option) => html`<option key=${option.value} value=${option.value}>${option.label}</option>`)}
          </select>
        </div>

        ${error && html`
          <div className="rounded-[var(--radius-md)] border border-[hsl(var(--destructive))]/40 bg-[hsl(var(--destructive))]/10 px-4 py-3 text-sm text-[hsl(var(--destructive))]">
            ${error}
          </div>
        `}

        <button
          type="submit"
          disabled=${isLoading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--secondary)))] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_hsl(var(--primary)/0.28)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span>${isLoading ? 'Analyzing your profile...' : mode === 'known' ? 'Generate roadmap' : 'Suggest career paths'}</span>
          <span aria-hidden="true">✨</span>
        </button>
      </form>
    </section>
  `;
}