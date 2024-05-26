export interface Item {
  id: string;
  item: string;
  checked: boolean;
  edit:boolean
}

export default class ListItem implements Item {
  private _id: string;
  private _item: string;
  private _checked: boolean;
  private _edit: boolean;

  constructor(id: string, item: string, checked: boolean = false, edit:boolean=false) {
    this._id = id;
    this._item = item;
    this._checked = checked;
    this._edit = edit;
  }

  get id(): string {
    return this._id;
  }
  set id(id: string) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }
  set item(item: string) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }
  set checked(checked: boolean) {
    this._checked = checked;
  }

  get edit(): boolean {
    return this._edit;
  }
  set edit(edit: boolean) {
    this._edit = edit;
  }



  //  Serialize method

  public serialize(): Item {
    return {
      id: this._id,
      item: this._item,
      checked: this._checked,
      edit: this._edit,
    }
  }
  // Deserialize
  public static deserialize(data: Item): ListItem {
    return new ListItem(data.id, data.item, data.checked,data.edit)
  }
}