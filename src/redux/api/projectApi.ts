import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const projectsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProject: build.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.project],
    }),

    getAllProjects: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/projects",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          projects: response,
          meta,
        };
      },
      providesTags: [tagTypes.project],
    }),

    deleteProject: build.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.project],
    }),

    getSingleProject: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.project],
    }),

    updateProject: build.mutation({
      query: (data) => ({
        url: `/projects/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.project],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetAllProjectsQuery,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectsApi;
