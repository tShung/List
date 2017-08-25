import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
        { id: 0, name: 'Bobby Tu'},
        { id: 1, name: 'Michael Jordan' },
        { id: 2, name: 'Lebron James' },
        { id: 3, name: 'Kobe Bryant' },
        { id: 4, name: 'Stephen Curry' },
        { id: 5, name: 'Kevin Durant' },
        { id: 6, name: 'Chris Paul' },
        { id: 7, name: 'Tim Duncan' },
        { id: 8, name: 'Kyrie Irving' },
        { id: 9, name: 'Dirk Nowitzki' },
        { id: 10, name: 'Jeremy Lin' }
    ];
    return {players};
  }
}