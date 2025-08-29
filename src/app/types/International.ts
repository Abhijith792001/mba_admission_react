export type International = {
  id: number;
  inter_title: string;
  inter_description: string;
  created_at: string;
  updated_at: string;
};

export type InternationalResponse = {
  status: string;
  data: International[];
};
