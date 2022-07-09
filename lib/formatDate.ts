export function padDate(date: number) {
	return date.toString().padStart(2, "0")
}

export default function formatDate(date: Date) {
	return `${date.getFullYear()}-${padDate(date.getMonth() + 1)}-${padDate(date.getDate())}`
}