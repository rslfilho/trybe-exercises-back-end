type Relation = {
  km: number,
  hm: number,
  dam: number,
  m: number,
  dm: number,
  cm: number,
  mm: number,
}

export const convert = (value: number, baseUnit: string, convertUnit: string): number => {
  const relation: Relation = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001,
  };

  const valueInMeters: number = value * relation[baseUnit as keyof Relation];

  return valueInMeters / relation[convertUnit as keyof Relation];
};
