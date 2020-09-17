export interface ISchool {
  id?: number;
  name?: string;
  address?: string;
}

export class School implements ISchool {
  constructor(public id?: number, public name?: string, public address?: string) {}
}
