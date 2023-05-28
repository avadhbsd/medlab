import { Labtest as TLabtest } from "../api/labtest/Labtest";

export const LABTEST_TITLE_FIELD = "name";

export const LabtestTitle = (record: TLabtest): string => {
  return record.name || String(record.id);
};
