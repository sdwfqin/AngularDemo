import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  // 请求头，标注请求body的内容类型为json
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // 承诺（Promise），它是一种异步技术，它会改变getHeroes()方法的签名。
  // 在有了结果时，它承诺会回调我们。 我们请求一个异步服务去做点什么，并且给它一个回调函数。
  // 它会去做（在某个地方），一旦完成，它就会调用我们的回调函数，并通过参数把工作结果或者错误信息传给我们。
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      // 转换为承诺
      .toPromise()
      // 调用 HTTP 的Reponse对象的json方法，以提取出其中的数据。
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // 我们把错误记录到控制台中
    console.error('An error occurred', error); // for demo purposes only
    // 通过一个被拒绝 (rejected) 的承诺来把该错误用一个用户友好的格式返回给调用者， 以便调用者能把一个合适的错误信息显示给用户。
    return Promise.reject(error.message || error);
  }

}
