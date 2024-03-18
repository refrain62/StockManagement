import { QuantityAvailable } from "./QuantityAvailable/QuantityAvailable";
import { Status } from "./Status/Status";
import { StockId } from "./StockId";

export class Stock {
  private constructor(
    private readonly _stockId: StockId,   // 識別子は変更不可のためreadonlyにする
    private _quantityAvailable: QuantityAvailable,
    private _status: Status
  ) {}

  // 新規エンティティの生成
  static create(
    stockId: StockId,
    quantityAvailable: QuantityAvailable,
    status: Status
  ) {
    return new Stock( stockId, quantityAvailable, status)
  }

  public delete() {
    // 削除時のロジックがあれば書く
  }

  public changeStatus(newStatus: Status) {
    this._status = newStatus
  }

  public ChangeQuantityAvailable(newQuantityAvailable: QuantityAvailable) {
    this._quantityAvailable = newQuantityAvailable
  }

  // エンティティの再構築
  static reconstruct(
    stockId: StockId,
    quantityAvailable: QuantityAvailable,
    status: Status
  ) {
    return new Stock(stockId, quantityAvailable, status)
  }

  get stockId(): StockId {
    return this._stockId
  }

  get quantityAvailable(): QuantityAvailable {
    return this._quantityAvailable
  }

  get status(): Status {
    return this._status
  }
}