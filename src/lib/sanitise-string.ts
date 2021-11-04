export default function sanitizeString(str: string): string {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
