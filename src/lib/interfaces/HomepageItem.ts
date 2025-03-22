export interface HomepageItem {
  order: number;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonUrl?: string;
  imageOrientation?: 'top' | 'left' | 'right' | 'bottom';
}