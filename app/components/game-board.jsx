import React, { Component } from 'react';
import { Range } from 'immutable';

class GameBoard extends Component {
  render() {
    return (
      <div style={({
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      })}>
        <div className="" style={({
          width: '70vmin',
          height: '70vmin',
          border: '1px solid #bbb'
        })}>
          { 
            Range(0, 8).map(rowId => (
              <div style={({
                height: '12.5%',
                boxSizing: 'border-box',
                borderBottom: rowId !== 7 ? '1px solid #bbb' : 'none'
              })}>
                {
                  Range(0, 8).map(columnId => (
                    <div style={({
                      display: 'inline-block',
                      boxSizing: 'border-box',
                      height: '100%',
                      width: '12.5%',
                      borderRight: columnId !== 7 ? '1px solid #bbb' : 'none'
                    })}>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default GameBoard;