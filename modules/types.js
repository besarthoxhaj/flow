/* @flow */

export type userId = number;

export type user = {
  id: userId,
  name: string
};

type RouteT = {
  name: string
};

type RouteHistory = Array<RouteT>;

type RouterState = {
  route: RouteT,
  history: RouteHistory
};

type BikeT = {
  userId: userId,
  type: string,
  color: string
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
    bike: izaakBike
  };
}

/*
  ERROR
  property `id`
  Property not found in
  object literal: modules/types.js:31

  NOTE
 */

/**
 * goBack to previous route
 * @param  {[type]} state:RouterState [description]
 * @return {[type]}                   [description]
 */
export function goBack (state:RouterState):RouterState {

  const lastRoute = state.history[state.history.length];

  return {
    route:lastRoute,
    history:state.history
  };
};
