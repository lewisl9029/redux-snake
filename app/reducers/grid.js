import { Range, OrderedMap, fromJS } from 'immutable';

let initialState = OrderedMap(
  Range(0, 8).map(rowId => [
    rowId,
    OrderedMap(
      Range(0, 8).map(columnId => [
        columnId,
        fromJS({ 
          coordinates: { x: columnId, y: rowId },
          content: null 
        })
      ])
    )
  ])
);

let grid = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default grid;