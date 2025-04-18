import IEventInit from '../IEventInit.cjs';
import MessagePort from '../MessagePort.cjs';
export default interface IMessageEventInit extends IEventInit {
    data?: unknown | null;
    origin?: string;
    lastEventId?: string;
    source?: typeof globalThis | null;
    ports?: MessagePort[];
}
//# sourceMappingURL=IMessageEventInit.d.ts.map