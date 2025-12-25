export type DictSection = Record<string, string>;

export type DictProps = {
  common: DictSection;
  metadata: {
    home: DictSection;
  };
  error: DictSection;
  navbar: DictSection;
  footer: DictSection;
  sidebar: DictSection;
  user: DictSection;
  addNewProperty: DictSection;
  message: DictSection;
  navbarDashboard: DictSection;
  valuationBusiness: DictSection;
  dashboard: DictSection;
};
