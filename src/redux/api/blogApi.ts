import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),

    getAllBlogs: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/blogs",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          blogs: response,
          meta,
        };
      },
      providesTags: [tagTypes.blog],
    }),

    deleteBlog: build.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),

    getSingleBlog: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.blog],
    }),

    updateBlog: build.mutation({
      query: (data) => ({
        url: `/blogs/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
