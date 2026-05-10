import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    />
  );
}

export function TimerIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 9.5V13l2.2 2.2" />
      <path d="M9.5 3.5h5" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="7" width="16" height="10" rx="2" />
      <path d="M8 11h8M8 14h5" />
      <path d="M7 7V5.8A1.8 1.8 0 0 1 8.8 4h6.4A1.8 1.8 0 0 1 17 5.8V7" />
    </BaseIcon>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M18 6c-6.5.2-10.5 4.1-11 10.4" />
      <path d="M8.3 18.2c-1.8-.6-3.3-2.4-3.3-4.7 0-4 4.4-7.5 14-7.5-.2 9.6-3.7 14-7.6 14-2.3 0-4.1-1.4-4.7-3.2Z" />
    </BaseIcon>
  );
}

export function DraftIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 14c1.4-1.4 2.7-2 4-2 2.2 0 2.8 2 5 2 1.3 0 2.6-.6 4-2" />
      <path d="M5 10c1.4-1.4 2.7-2 4-2 2.2 0 2.8 2 5 2 1.3 0 2.6-.6 4-2" />
      <path d="M6 18h12" />
    </BaseIcon>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M10.4 10.4 8 16l5.6-2.4L16 8l-5.6 2.4Z" />
      <circle cx="12" cy="12" r="8" />
    </BaseIcon>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      <path d="M10.5 14H4l2-2m0 4 2-2" />
    </BaseIcon>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7.8 4h2.6l1.2 4-1.7 1.7a13.8 13.8 0 0 0 4.4 4.4l1.7-1.7 4 1.2v2.6a1.8 1.8 0 0 1-1.8 1.8H17C10.4 18 6 13.6 6 7V5.8A1.8 1.8 0 0 1 7.8 4Z" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m5.5 8 6.5 5 6.5-5" />
    </BaseIcon>
  );
}

export function RulerIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 18 12-12 2 2-12 12H6v-2Z" />
      <path d="m11 7 2 2m-5 1 2 2m-5 1 2 2" />
    </BaseIcon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </BaseIcon>
  );
}

export function WindIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 9h10a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M4 13h14a2.5 2.5 0 1 1-2.5 2.5" />
      <path d="M4 17h9" />
    </BaseIcon>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.3 2.3 2.3 4.7-5.1" />
    </BaseIcon>
  );
}
