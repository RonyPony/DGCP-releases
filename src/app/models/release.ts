export interface Release {
  uri: string
  publisher: Publisher
  publishedDate: string
  version: string
  publicationPolicy: string
  license: string
  extensions: string[]
  releases: ReleaseInfo[]
}

export interface Publisher {
  name: string
}

export interface ReleaseInfo {
  ocid: string
  id: string
  contracts: Contract[]
  parties: Party[]
  bids: Bids
  planning: Planning
  date: string
  initiationType: string
  tender: Tender
  awards: Award[]
  tag: string[]
}

export interface Contract {
  id: string
  awardID: string
  title: string
  status: string
  period: Period
  value: Value
  dateSigned: string
}

export interface Period {
  startDate: string
  endDate: string
}

export interface Value {
  amount: number
  currency: string
}

export interface Party {
  id: string
  name: string
  identifier: Identifier
  roles: string[]
  address: Address
  details?: Details
  contactPoint?: ContactPoint
  ocid?:string
}

export interface Identifier {
  id: string
  scheme: string
  legalName?: string
}

export interface Address {
  streetAddress: string
  locality?: string
  region?: string
  countryName?: string
}

export interface Details {
  gender: string
  scale: string
}

export interface ContactPoint {
  telephone: string
}

export interface Bids {
  details: Detail[]
}

export interface Detail {
  id: string
  date: string
  status: string
  value: Value2
  tenderers: Tenderer[]
}

export interface Value2 {
  currency: string
}

export interface Tenderer {
  id: string
  name: string
}

export interface Planning {
  budget: Budget
  documents: Document[]
}

export interface Budget {
  description: string
  amount: Amount
}

export interface Amount {
  amount: number
  currency: string
}

export interface Document {
  id: string
  documentType: string
  title: string
  description: string
  datePublished: string
  url: string
}

export interface Tender {
  id: string
  title: string
  description: string
  procurementMethod: string
  mainProcurementCategory: string
  procurementMethodDetails: string
  status: string
  numberOfTenderers: number
  tenderers: Tenderer2[]
  items: Item[]
  value: Value3
  procuringEntity: ProcuringEntity
  tenderPeriod: TenderPeriod
  awardPeriod: AwardPeriod
  contractPeriod: ContractPeriod
  documents: Document2[]
}

export interface Tenderer2 {
  id: string
  name: string
}

export interface Item {
  id: string
  description: string
  classification: Classification
  quantity: number
  unit: Unit
}

export interface Classification {
  id: string
  description: string
}

export interface Unit {
  id: string
  name: string
}

export interface Value3 {
  amount: number
  currency: string
}

export interface ProcuringEntity {
  id: string
  name: string
}

export interface TenderPeriod {
  startDate: string
  endDate: string
}

export interface AwardPeriod {
  startDate: string
  endDate: string
}

export interface ContractPeriod {
  durationInDays: number
}

export interface Document2 {
  id: string
  documentType: string
  title: string
  url: string
  format: string
  language: string
}

export interface Award {
  id: string
  status: string
  date: string
  suppliers: Supplier[]
  items: Item2[]
}

export interface Supplier {
  id: string
  name: string
}

export interface Item2 {
  id: number
  description: string
  classification: Classification2
  quantity: number
  unit: Unit2
}

export interface Classification2 {
  id: number
  description: string
}

export interface Unit2 {
  id: string
  name: string
  value: Value4
}

export interface Value4 {
  amount: number
  currency: string
}
