enum StorageKeys {
	ACCESS_TOKEN = 'access_token',
	TOKEN_EXPIRATION = 'token_expiration'
}

class Store {
	private readonly get: (par: StorageKeys) => string;
	private readonly set: (key: StorageKeys, val: any) => void;

	constructor(storage: Storage) {
		this.get = (key: StorageKeys): any => {
			return storage.getItem(key);
		};

		this.set = (key: StorageKeys, val: any) => {
			if (val === null) {
				storage.removeItem(key);
			} else {
				storage.setItem(key, JSON.stringify(val));
			}
		};
	}

	get accessToken(): string | null {
		return JSON.parse(this.get(StorageKeys.ACCESS_TOKEN));
	}

	set accessToken(token: string | null) {
		this.set(StorageKeys.ACCESS_TOKEN, token);
	}

	get tokenExpiration(): Date | null {
		const exp = this.get(StorageKeys.TOKEN_EXPIRATION);
		if (exp) {
			return new Date(parseInt(exp, 10));
		} else {
			return null;
		}
	}

	set tokenExpiration(exp: Date | null) {
		if (exp) {
			this.set(StorageKeys.TOKEN_EXPIRATION, exp.getTime());
		} else {
			this.set(StorageKeys.TOKEN_EXPIRATION, null);
		}
	}
}

// Test by calling store.constructor
export default new Store(window.localStorage);
