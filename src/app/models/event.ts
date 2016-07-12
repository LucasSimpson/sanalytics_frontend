/**
 * Created by lucas_000 on 2016-07-09.
 */


export class Event {
  private category: string;
  private user: string;
  private jsonData: any;

  constructor(category: string, user: string, jsonData: any) {
    this.category = category;
    this.user = user;
    this.jsonData = jsonData;
  }

  public static fromJson(json):Event {
    return new Event(json.category, json.user, json.json_data);
  }
}
