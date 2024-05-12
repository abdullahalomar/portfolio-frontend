import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSkill: build.mutation({
      query: (data) => ({
        url: "/createSkill",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.skill],
    }),

    getAllSkills: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/skills",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          skills: response,
          meta,
        };
      },
      providesTags: [tagTypes.skill],
    }),

    deleteSkill: build.mutation({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.skill],
    }),

    getSingleSkill: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/skills/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.skill],
    }),

    updateSkill: build.mutation({
      query: (data) => ({
        url: `/skills/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.skill],
    }),
  }),
});

export const {
  useCreateSkillMutation,
  useGetAllSkillsQuery,
  useGetSingleSkillQuery,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillsApi;
