import { Envelope, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";

export type ContactEntry = {
  index: number;
  icon: React.JSX.Element | undefined;
  contactType: string;
  destination: string;
  label: string;
  isLinkOut: boolean;
};

export const ContactEntries: ContactEntry[] = [
  {
    index: 0,
    icon: <Envelope />,
    contactType: "email",
    destination: "mailto:andrew.crisp@gmail.com",
    label: "andrew.crisp@gmail.com",
    isLinkOut: false,
  },
  {
    index: 1,
    icon: <LogoLinkedin />,
    contactType: "LinkedIn",
    destination: "https://www.linkedin.com/in/andrew-crisp-b619438/",
    label: "https://www.linkedin.com/in/andrew-crisp-b619438/",
    isLinkOut: true,
  },
  {
    index: 2,
    icon: <LogoGithub />,
    contactType: "github",
    destination: "https://github.com/andrewcrisp",
    label: "https://github.com/andrewcrisp",
    isLinkOut: true,
  },
];
