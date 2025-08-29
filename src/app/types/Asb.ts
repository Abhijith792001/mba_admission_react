export interface AsbResponse {
  status: string;
  data: Data[];
}

export interface Data {
  id: number;
  title: string;
  description: string;
  created_at: string; // ISO datetime string
  updated_at: string; // ISO datetime string
}
