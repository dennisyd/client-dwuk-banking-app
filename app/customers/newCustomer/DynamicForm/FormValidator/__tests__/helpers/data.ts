import Chance from "chance";

const some = new Chance();

export const validNames = Array.from({ length: 10 }, () => some.first());

export const undefinedAndIntegers = Array.from({ length: 10 }, (_, i) => {
  if (i % 2) return some.integer();
});

export const validEmails = Array.from({ length: 10 }, () => some.email());
