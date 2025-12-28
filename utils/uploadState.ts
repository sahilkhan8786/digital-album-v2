const KEY = 'bunny_uploaded_files_v1'

export function getUploadedFiles(): Set<string> {
    if (typeof window === 'undefined') return new Set()
    const raw = localStorage.getItem(KEY)
    return new Set(raw ? JSON.parse(raw) : [])
}

export function markFileUploaded(path: string) {
    const uploaded = getUploadedFiles()
    uploaded.add(path)
    localStorage.setItem(KEY, JSON.stringify([...uploaded]))
}

export function clearUploadedFiles() {
    localStorage.removeItem(KEY)
}
