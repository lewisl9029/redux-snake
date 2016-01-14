import React, { Component } from 'react';
import { Range } from 'immutable';

class GameBoard extends Component {
  render() {
    let { grid, players, playerId, timer } = this.props;
    
    let currentGrid = grid.get(timer.get('time'));
    
    let renderCellContent = cell => {
      switch (cell.getIn(['content', 'type'])) {
        case 'player': 
          return (
            <div style={({
              width: '50%',
              height: '50%',
              backgroundColor: cell.getIn(['content', 'isHead']) ? '#555' : '#888'
            })}></div>
          );
        case 'block':
          return (
            <div style={({
              width: '50%',
              height: '50%',
              borderRadius: '100%',
              backgroundColor: '#888'
            })}></div>
          );
        default:
          return (
            //workaround for chrome rendering glitch
            <div style={({
              width: '50%',
              height: '50%',
              backgroundColor: 'transparent'
            })}></div>
          );
      }
    };
    
    return (
      <div style={({
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      })}>
        <div style={({
          width: '70vmin',
          height: '70vmin',
          border: '1px solid #bbb'
        })}>
          { 
            currentGrid.valueSeq().map((row, rowId) => (
              <div 
                key={rowId}
                style={({
                  height: `${ 100 / currentGrid.size }%`,
                  boxSizing: 'border-box',
                  borderBottom: rowId !== currentGrid.size - 1 ? 
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
                        margin: '0',
                        height: '100%',
                        width: `${ 100 / row.size }%`,
                        borderRight: columnId !== row.size - 1 ?
                          '1px solid #bbb' : 'none'
                      })}
                    >
                      <div style={({
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                      })}>
                        {renderCellContent(cell)}
                      </div>
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