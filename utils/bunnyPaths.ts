// utils/bunnyPaths.ts
export const albumBasePath = (
    userId: string,
    albumId: string
) => `albums/${userId}/${albumId}`

export const albumCoverPath = (
    userId: string,
    albumId: string,
    filename: string
) =>
    `${albumBasePath(userId, albumId)}/coverImage/${filename}`

export const sectionBasePath = (
    userId: string,
    albumId: string,
    sectionSlug: string
) =>
    `${albumBasePath(userId, albumId)}/${sectionSlug}`

export const sectionCoverPath = (
    userId: string,
    albumId: string,
    sectionSlug: string,
    filename: string
) =>
    `${sectionBasePath(userId, albumId, sectionSlug)}/coverImage/${filename}`

export const sectionImagePath = (
    userId: string,
    albumId: string,
    sectionSlug: string,
    filename: string
) =>
    `${sectionBasePath(userId, albumId, sectionSlug)}/images/${filename}`

export const sectionVideoPath = (
    userId: string,
    albumId: string,
    sectionSlug: string,
    filename: string
) =>
    `${sectionBasePath(userId, albumId, sectionSlug)}/videos/${filename}`
