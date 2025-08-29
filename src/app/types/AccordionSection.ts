export interface AccordionSection {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface AccordionSectionResponse {
  status: "success" | "error"; // assuming only these two values
  data: AccordionSection[];
}
