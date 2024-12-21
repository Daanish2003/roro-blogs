import { User } from "@prisma/client"

export type UserEmailType = Pick<User, 'email'>

export type MailProps = {
   user: UserEmailType,
   url: string
}