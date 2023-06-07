export type SessionUser = {
  id: string
  name: string
  email: string
  subscription: {
    plan: {
      id: string
      name: string
    }
    startDate: Date
    endDate: Date
    status: string
  }
}

export type Session = {
  accessToken: string
}