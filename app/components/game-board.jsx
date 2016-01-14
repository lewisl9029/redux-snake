import React, { Component } from 'react';
import { Range } from 'immutable';

class GameBoard extends Component {
  render() {
    let { grid } = this.props;
    
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
            grid.valueSeq().map((row, rowId) => (
              <div 
                key={rowId}
                style={({
                  height: `${ 100 / grid.size }%`,
                  boxSizing: 'border-box',
                  borderBottom: rowId !== grid.size - 1 ? 
                    '1px solid #bbb' : 'none'
                })}
              >
                {
                  row.valueSeq().map((cell, columnId) => (
                    <div 
                      key={columnId}
                      style={({
                        display: 'inline-block',
                        boxSizing: 'border-box',
                        height: '100%',
                        width: `${ 100 / row.size }%`,
                        borderRight: columnId !== row.size - 1 ?
                          '1px solid #bbb' : 'none'
                      })}
                    >
                      {cell.get('coordinates').get('x')}, 
                      {cell.get('coordinates').get('y')}
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