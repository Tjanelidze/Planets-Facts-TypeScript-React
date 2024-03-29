export interface planetDataInterface {
  planets: {
    name: string;
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
      [key: string]: any;
      internal: string;
      geology: string;
    };
    color: string;
  }[];
  open: boolean;
  setOpen: (open: boolean) => void;
}
