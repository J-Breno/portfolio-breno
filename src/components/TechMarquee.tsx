import { useLanguage } from '@/contexts/LanguageContext';
import { skillsData, type SkillKey } from './SkillsSection';

const TechMarquee = () => {
  const { t } = useLanguage();
  const skillItems = t.skills.skillItems as Record<SkillKey, { name: string }>;

  const items = (
    <>
      {skillsData.map(({ icon: Icon, key }) => (
        <div
          key={key}
          className="flex items-center gap-3 shrink-0 rounded-full border border-accent/25 bg-card/40 px-5 py-2.5"
        >
          <Icon className="w-4.5 h-4.5 w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-foreground whitespace-nowrap">
            {skillItems[key].name}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <section
      aria-label={t.skills.title}
      className="relative border-y border-accent/25 bg-secondary/40 py-5 overflow-hidden marquee-paused"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee gap-4 md:gap-6">
        <div className="flex gap-4 md:gap-6 shrink-0">{items}</div>
        <div className="flex gap-4 md:gap-6 shrink-0" aria-hidden="true">
          {items}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
