export const searchFilter = (rows: Array<any>, search: string, column: Array<string> | string | undefined) => {
  if (!search) return rows;

  const match = (entry: any) => {
    return entry.toString().toLowerCase().includes(search.toLowerCase());
  };

  return rows.filter((row) => {
    if (column && typeof column === 'string') {
      return match(row[column]);
    }

    let values = Object.values(row);

    if (column && Array.isArray(column)) {
      values = Object.keys(row)
        .filter((key) => column.includes(key))
        .map((key) => row[key]);
    }

    return (
      values.filter((value) => {
        return match(value);
      }).length > 0
    );
  });
};

export const sort = (data: Array<any>, field: number | string, order: string) => {
  const sorted = Object.assign([], data).sort((a: any, b: any) => {
    const fieldA = a[field];
    const fieldB = b[field];

    if (fieldA < fieldB) {
      return order === 'desc' ? 1 : -1;
    }
    if (fieldA > fieldB) {
      return order === 'desc' ? -1 : 1;
    }
    return 0;
  });

  return sorted;
};
