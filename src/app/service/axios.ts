import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AsbResponse } from "../types/Asb";
import type { DualDegreeResponse } from "../types/dualDegree";
import type { CampusResponse } from "../types/campusList";
import type { AccordionSectionResponse } from "../types/AccordionSection";
import type { FeeStructureApiResponse } from "../types/CampusFeeStructure";
import type { InternationalResponse } from "../types/International";

export const mbaApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    asbInfo: builder.mutation<AsbResponse, { id: string }>({
      query: (arg) => ({
        url: "get-asb-info",
        method: "POST",
        body: arg,
      }),
    }),
    dualDegree: builder.mutation<DualDegreeResponse, { id: string }>({
      query: (arg) => ({
        url: "get-dual-degree-info",
        method: "POST",
        body: arg,
      }),
    }),
    campusList: builder.query<CampusResponse, { id: string }>({
      query: (arg) => ({
        url: "get-campus-list",
        method: "POST",
        body: arg,
      }),
    }),
    accordionList: builder.mutation<AccordionSectionResponse, { id: string }>({
      query: (arg) => ({
        url: "get-asb-admission-info",
        method: "POST",
        body: arg,
      }),
    }),
    feesStructureList: builder.mutation<FeeStructureApiResponse, { id: string }>({
      query: (arg) => ({
        url: "get-asb-fee-info",
        method: "POST",
        body: arg,
      }),
    }),
    international: builder.mutation<InternationalResponse, { id: string }>({
      query: (arg) => ({
        url: "get-international-collaboration-info",
        method: "POST",
        body: arg,
      }),
    }),
  }),
});

export const { useAsbInfoMutation, useDualDegreeMutation, useCampusListQuery , useAccordionListMutation,useFeesStructureListMutation,useInternationalMutation} = mbaApi;

