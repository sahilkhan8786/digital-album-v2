export async function uploadSingleFile(
    file: File,
    path: string
): Promise<string> {
    const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(file)
    })

    const res = await fetch('/api/bunny/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fileName: file.name,
            folderPath: path,
            base64Data: base64,
        }),
    })

    const json = await res.json()
    if (!json.success) throw new Error(json.error)

    return json.url as string
}
