import { inject, injectable } from 'tsyringe'
import { IDomainEventSubscriber } from 'Domain/shared/DomainEvent/IDomainEventSubscriber'
import {
  BOOK_EVENT_NAME,
  BookDomainEventBody,
} from 'Domain/shared/DomainEvent/Book/BookDomainEventFactory';

@injectable()
export class BookLogSubscriber {
  constructor(
    @inject('IDomainEventSubscriber')
    private subscriver: IDomainEventSubscriber
  ) {
    this.subscriver.subscribe<BookDomainEventBody>(
      BOOK_EVENT_NAME.CREATED,
      (event) => {
        console.log(event);
      }
    )
  }
}
