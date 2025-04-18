import { URLSearchParams } from 'url';
import { ReadableStream } from 'stream/web';

type IRequestBody =
	| ArrayBuffer
	| ArrayBufferView
	| ReadableStream
	| string
	| URLSearchParams
	| Blob
	| FormData
	| null;

export default IRequestBody;
