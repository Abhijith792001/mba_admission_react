// Updated types to match the actual API response
export interface FeeDetail {
  fee_title: string;
  fee_description: string; // HTML string
}

// Represents one campus with its fee structure
export interface CampusFeeStructure {
  campus_name: string;
  fees: FeeDetail[];
}

// API response wrapper
export interface FeeStructureApiResponse {
  status: "success" | "error";
  data: CampusFeeStructure[];
}