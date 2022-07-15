
export default class Cache<T> {

	private data: Record<string, T>;
	protected storage: Storage;
	protected name: string

	constructor(name: string, storage = localStorage) {
		this.name = name
		this.storage = storage
		this.data = this.Data
	}

	public get Data() {

		if (this.data) {
			return this.data
		}
		
		const cache = this.storage.getItem(this.name)

		if (!cache) {
			return {}
		}
		else {
			return JSON.parse(cache)
		}
	}

	setKey(key: string, data: T) {
		this.Data[key] = data

		this.storage.setItem(this.name, JSON.stringify(this.Data))
	}

}