export type Item = {
  title: string;
  rating: number;
  body: string;
  key: string;
};

export type Items = {
  item: Item;
};

type ReviewData = { title: string; rating: number; body: string; key: string };
