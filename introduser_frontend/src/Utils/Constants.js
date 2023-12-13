export class AppConstans {
	static get BASE_URL() {
		return "http://localhost:8000";
	}
	static get API_URL() {
		return this.BASE_URL + "/api";
	}
	static get AUTH_URL() {
		return this.BASE_URL + "/auth";
	}
}