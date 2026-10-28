import { Instagram } from "lucide-react";

interface SocialLinksProps {
  className: string;
}

const socialAccounts = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/somakatibake",
    icon: <Instagram aria-hidden="true" />,
  },
  {
    name: "X",
    href: "https://x.com/somakatibake?s=11",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.901 1.153h3.68L14.54 11.023 24 22.847h-7.406l-5.8-7.585-6.634 7.585H.477l8.6-9.83L0 1.153h7.594l5.243 6.932zm-1.29 19.614h2.039L6.486 3.123h-2.19z" />
      </svg>
    ),
  },
];

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-2">
      {socialAccounts.map((account) => (
        <a
          key={account.name}
          href={account.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow Soma Katiba KE on ${account.name}`}
          title={account.name}
          className={className}
        >
          {account.icon}
        </a>
      ))}
    </div>
  );
}
