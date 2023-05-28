import { Labtest as TLabtest } from "../api/labtest/Labtest";

export const LABTEST_TITLE_FIELD = "id";

export const LabtestTitle = (record: TLabtest): string => {
  return record.id || String(record.id);
};
