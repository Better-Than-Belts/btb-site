import React from 'react';
import styled from 'styled-components';

const SizeTable = (props) => {
    return (
        <Table>
            <tr>
                <Cell>
                    S
                </Cell>
                <Cell>
                    4'10 - 5'6
                </Cell>
            </tr>
            <tr>
                <Cell>
                    M
                </Cell>
                <Cell>
                    5'2 - 6'1
                </Cell>
            </tr>
            <tr>
                <Cell>
                    L
                </Cell>
                <Cell>
                    6' - 6'6
                </Cell>
            </tr>
        </Table>
    )
}

// styles

const Table = styled.table`
    border-collapse: collapse;
    border-style: hidden;
    width: 100%;
`;

const Cell = styled.td`
    border-collapse: collapse;
    border: 1px solid #004669;
    padding: 15px 30px;
`;

export default SizeTable;