export type UserRole = 'user' | 'admin'

export interface ClerkPublicMetadata {
    role?: UserRole
    mongoUserId?: string
}
