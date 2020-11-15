import React,{useState} from 'react';
import {Card,Button} from '@blueprintjs/core';

export function CardsList(){

    return(
        <div>

        <Card 
        interactive={true} elevation={2}
        text="hey"
        className="card"
        >
            <div>

            <p>!!</p>
            </div>
            <Button text="pressss"></Button>
        </Card>
        </div>
    );
}