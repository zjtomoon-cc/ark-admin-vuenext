import type { PageRequestParams, PaginationResult } from '/#/axios'

import { defHttp } from '/@/utils/http/axios'

export const Api = {
  list: '/sys/job/list',
  add: '/sys/job/add',
  update: '/sys/job/update',
  delete: '/sys/job/delete',
}

export interface JobResult {
  id: number
  name: string
  orderNum: number
  status: number
}
export function useGetJobListRequest(): [
  PromiseFn<PageRequestParams, PaginationResult<JobResult>>,
  string
] {
  async function request(params: PageRequestParams) {
    return await defHttp.get({ url: Api.list, params })
  }

  return [request, Api.list]
}

export function useAddJobRequest(): [PromiseFn<Omit<JobResult, 'id'>>, string] {
  async function request(data: Omit<JobResult, 'id'>) {
    return await defHttp.post({ url: Api.add, data })
  }

  return [request, Api.add]
}

export function useUpdateJobRequest(): [PromiseFn<JobResult>, string] {
  async function request(data: JobResult) {
    return await defHttp.post({ url: Api.update, data })
  }

  return [request, Api.update]
}

export function useDeleteJobRequest(): [PromiseFn<{ id: number }>, string] {
  async function request(data: { id: number }) {
    return await defHttp.post({ url: Api.delete, data })
  }

  return [request, Api.delete]
}
