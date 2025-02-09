export interface Logo {
  name: string;
  width: number;
  height: number;
}

export interface PartnerItem {
  title: string;
  logo: Logo;
  description: string;
  link: string;
}

export interface PartnerCategory {
  title: string;
  datas: PartnerItem[];
}
