import { DomainEvent } from "./DomainEvent";

export interface IDomainEventSubscriber {
  subscribe<T extends Record<string, unknown>>(
    eventName: string,
    callback: (event: DomainEvent<T>) => void
  ): void;
}
