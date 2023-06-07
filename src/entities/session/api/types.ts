export type SessionDto = {
  accessToken: string
}

export type RequestLoginBody = {
  email: string
  password: string
}

export type UserDto = {
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