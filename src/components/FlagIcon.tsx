import { Language } from '@/i18n/translations';

interface FlagIconProps {
  lang: Language;
  className?: string;
}

const FlagIcon = ({ lang, className = 'w-5 h-[14px]' }: FlagIconProps) => {
  const common = {
    viewBox: '0 0 60 42',
    className: `${className} inline-block rounded-[2px] overflow-hidden shadow-sm`,
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true as const,
  };

  if (lang === 'pt-BR') {
    return (
      <svg {...common}>
        <rect width="60" height="42" fill="#009c3b" />
        <polygon points="30,4 56,21 30,38 4,21" fill="#ffdf00" />
        <circle cx="30" cy="21" r="8" fill="#002776" />
        <path d="M22 20 Q30 16 38 20" stroke="#fff" strokeWidth="1.2" fill="none" />
      </svg>
    );
  }

  if (lang === 'en-US') {
    return (
      <svg {...common}>
        <rect width="60" height="42" fill="#b22234" />
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect key={i} y={i * 3.23} width="60" height="3.23" fill={i % 2 ? '#fff' : '#b22234'} />
        ))}
        <rect width="24" height="22.6" fill="#3c3b6e" />
      </svg>
    );
  }

  // es-ES
  return (
    <svg {...common}>
      <rect width="60" height="42" fill="#aa151b" />
      <rect y="10.5" width="60" height="21" fill="#f1bf00" />
    </svg>
  );
};

export default FlagIcon;
