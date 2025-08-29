export interface Campus {
  id: number;
  campus_name: string;
  campus_code: string;
  created_at: string;
  updated_at: string;
}

export interface CampusResponse {
  status: "success" | "error";
  data: Campus[];
}
