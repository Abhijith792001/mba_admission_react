export interface DualDegreeItem {
  id: number;
  degree_title: string;
  degree_description: string; // contains HTML
  created_at: string;         // ISO date string
  updated_at: string;         // ISO date string
}

export interface DualDegreeResponse {
  status: "success" | "error";
  data: DualDegreeItem[];
}
