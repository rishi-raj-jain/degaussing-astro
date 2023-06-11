import type {Chapter} from "@transport/Chapter"
import {getList} from "@server/GetEntries"

export async function getChapters({
																		language
																	}: {
	language: string
}): Promise<ReadonlyArray<Chapter>> {
	const chapters = await getList<Chapter>("chapters", language)
	return chapters.map((chapter, i) => ({...chapter, number: i + 1}))
}
