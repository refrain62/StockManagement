import { ValueObject } from "../../shared/ValueObject";

type TitleValue = string

export class Title extends ValueObject<TitleValue, 'Title'> {
  static readonly MAX_LENGTH = 1000
  static readonly MIN_LNEGTH = 1

  constructor(value: TitleValue) {
    super(value)
  }

  protected validate(value: string): void {
    if (value.length < Title.MIN_LNEGTH || value.length > Title.MAX_LENGTH) {
      throw new Error(`タイトルは${Title.MIN_LNEGTH}文字以上、${Title.MAX_LENGTH}文字以下でなければなりません。`)
    }
  }
}
