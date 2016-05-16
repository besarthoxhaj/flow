/* @flow */

export type userId = number;

export type user = {
  id: userId,
  name: string
};

type BikeT = {
  userId: userId,
  type: string,
  color: string,
};

export let izaakBike: BikeT = {
  type: 'Broken',
  color: 'Black'
};

/*
  ERROR
  property `userId`
  Property not found in
  object literal: modules/types.js:16

  NOTE
 */

export function getUser(id: userId): user {
  return {
    name: 'Izaak Rogan',
    bike: izaakBike,
  };
}

/*
  ERROR
  property `id`
  Property not found in
  object literal: modules/types.js:31

  NOTE
 */
