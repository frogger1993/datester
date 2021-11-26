import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {DST} from '../models/dst';
import {DSTS} from '../models/DSTS';


/**
 * Class for handling the communication between Angular and the backend (RedirectController)
 */
@Injectable()
export class DaCom {

  private baseUrl: string = null;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = localStorage.getItem('KM-EP-URL');
  }

  private static headers(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8');
  }

  public isBaseUrlNull(): boolean {
    if (this.baseUrl === null) {
      return true;
    }
    if (!this.baseUrl) {
      return true;
    }
    if (!this.baseUrl.startsWith('http')) {
      return true;
    }

    return false;
  }


  public setBaseUrl(value: string): void {
    if (value.endsWith('/')) {
      value = value.substring(0, value.length - 1);
    }
    this.baseUrl = value;
    localStorage.setItem('KM-EP-URL', value);
  }

  /**
   * Used to retrieve the current User
   * @return IPosUSer
   */
  async getDST(dst: string): Promise<DST> {

    const url = this.baseUrl + '/da/dpt/dst/' + dst;

    return new Promise(resolve => {
      this.http.get(url, {headers: DaCom.headers()}).subscribe(
        d => {
          resolve(<DST> ((<any> d).response));
        },
        e => {
          resolve(null);
        });
    });
  }

  /**
   * Used to retrieve the current User
   * @return IPosUSer
   */
  async getSession(session: string): Promise<DSTS> {

    const url = this.baseUrl + '/da/dpt/session/' + session;

    return new Promise(resolve => {
      this.http.get(url, {headers: DaCom.headers()}).subscribe(
        d => {
          resolve(<DSTS> d);
        },
        e => {
          resolve(null);
        });
    });
  }

  /**
   * Used to retrieve the current User
   * @return IPosUSer
   */
  async solveActivity(session: string, activityId: number, daUUID: string): Promise<any> {

    const url = this.baseUrl + '/da/dpt/session/' + session + '/activity/' + activityId + '/1/by/' + daUUID;

    return new Promise(resolve => {
      this.http.get(url, {headers: DaCom.headers()}).subscribe(
        d => {
          resolve(d);
        },
        e => {
          resolve(null);
        });
    });
  }

}


