export type NavProp = {
  title: React.ReactNode;
  path: string;
  icon?: React.ReactNode;
  info?: React.ReactNode;
  children?: NavProp[];
};
