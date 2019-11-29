
export interface PersonStats {
  id?: string;
  name: string;
  password: string;
  bbp: number;
}

export const createDefaultStats = (): PersonStats[] => {
  return [
    {
      id: 'f933fj',
      name: 'Maarten Breedveld',
      password: 'aaaa',
      bbp: 0,
    },
    {
      id: 'f9323j',
      name: 'Frans Louwen',
      password: 'bbbb',
      bbp: 5000,
    },
    {
      id: 'g4g4sdg4',
      name: 'Mieke Nijkamp',
      password: 'cccc',
      bbp: 7000,
    },
    {
      id: 'bsg544',
      name: 'Vicky Louwen',
      password: 'dddd',
      bbp: 0,
    },
    {
      id: 'fnn6f6',
      name: 'Freek Kilsdonk',
      password: 'eeee',
      bbp: 0,
    },
    {
      id: '6e6rjnd6',
      name: 'Willemien van Egmond',
      password: 'ffff',
      bbp: 0,
    },
    {
      id: '7455ujm',
      name: 'Bart Louwen',
      password: 'gggg',
      bbp: 0,
    },
    {
      id: 'g4seg43',
      name: 'Christine Breedveld',
      password: '0111',
      bbp: 0,
    },
  ]
}

export default class StatsApi {
  private static stats: PersonStats[];

  static getStats() {

    if (!this.stats) {
      this.init();
    }

    return this.stats;
  }

  static init() {
    const value = localStorage.getItem("stats");
    if (!value) return this.stats = createDefaultStats();
    
    this.stats = JSON.parse(value);
  }

  static saveStats(stats: PersonStats[]) {
    localStorage.setItem("stats", JSON.stringify(stats));
  }

  static updateStats() {

  }
}

StatsApi.init();
