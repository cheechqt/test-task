export interface ISliderButton {
  primary?: boolean;
  secondary?: boolean;
  next?: boolean;
  prev?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface INavButton extends ISliderButton {
  disabled?: boolean;
}

export interface IRoundedSliderItem {
  coords: { [key: string]: number };
  itemDegree: number;
  children: React.ReactNode;
  active: boolean;
}

export interface IHeroComponent {
  curSlide: number;
  changeCurSlide: (slideNum: number) => void;
}

export interface IPaginationDot {
  onClick: (i: number) => void;
  key: number;
  active: boolean;
}
