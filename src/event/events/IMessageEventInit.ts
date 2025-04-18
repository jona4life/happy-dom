import IEventInit from '../IEventInit.js';
import MessagePort from '../MessagePort.js';

export default interface IMessageEventInit extends IEventInit {
	data?: unknown | null;
	origin?: string;
	lastEventId?: string;
	source?: typeof globalThis | null;
	ports?: MessagePort[];
}
