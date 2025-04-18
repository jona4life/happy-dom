export default interface ICachablePreflightRequest {
	url: string;
	method: string;
	headers: Headers;
}
