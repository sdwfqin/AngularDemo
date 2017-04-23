export class From {

  constructor(public id: number,
              public name: string,
              public power: string,
              // alterEgo是可选的，调用构造函数时可省略，注意alterEgo?中的问号 (?)。
              public alterEgo?: string) {
  }
}
