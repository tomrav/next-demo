import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Index from '../../../app/[locale]/(unauth)/page';

export default createBoard({
    name: 'Index',
    Board: () => <Index />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1170,
        canvasWidth: 914
    }
});
