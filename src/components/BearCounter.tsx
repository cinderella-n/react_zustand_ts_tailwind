// src/components/BearCounter.tsx
import React from 'react';
import { useBearStore } from '../store/useStore';

const BearCounter: React.FC = () => {
    const bears = useBearStore((state) => state.bears);
    const increase = useBearStore((state) => state.increase);
    const reset = useBearStore((state) => state.reset);

    return (
        <div>
            <h1>{bears} bears around here ...</h1>
            <button onClick={reset}>- Reset</button>
            <button onClick={increase}>+ Increase</button>
        </div>
    );
};

export default BearCounter;
