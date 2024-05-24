class PaginatedData<T> {
  data: T[] = [];
  draw: number | null = null;
  recordsTotal: number | null = null;
  recordsFiltered: number | null = null;

  public constructor(init?: Partial<PaginatedData<T>>) {
    Object.assign(this, init);
  }
}

export default PaginatedData;
