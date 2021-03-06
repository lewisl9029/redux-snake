import React, { Component } from 'react';
import { Range } from 'immutable';
import shouldPureComponentUpdate from 'react-pure-render/function';

class GameBoard extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;
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
        width: '100%',
        lineHeight: '0',
        fontSize: '0px'
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
                  boxSizing: 'border-box'
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
                        border: '1px solid #bbb'
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