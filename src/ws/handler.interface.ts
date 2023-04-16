import type { HandlerExecutionContext } from './types';

export interface IHandler {
	type: string;
	execute: (context: HandlerExecutionContext) => void;
}
