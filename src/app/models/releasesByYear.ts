export interface ReleasesByYear {
  creationDate: string
  version: string
  pagination?: Pagination
  data?: ReleaseData[]
  displayName?:string
}

export interface Pagination {
  next: string
  limit: number
}

export interface ReleaseData {
  ocid: string
  url: string
}
