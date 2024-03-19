import { BookId } from "../BookId/BookId";

// アプリケーションサービスと混同させないために、
// ドメインサービスの命名規則は[処理名]DomainServiceとするのがオススメ。
export class ISBNDuplicationCheckDomainService {
  async execute(isbn: BookId): Promise<boolean> {
    // 本来は、データベースに問い合わせて重複があるか確認する。
    // この章では省略する
    const isDuplicateISBN = false

    return isDuplicateISBN
  }
}