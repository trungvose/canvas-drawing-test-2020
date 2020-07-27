import { CanvasCore, Line, Rectangle, BucketFill } from 'canvas-core';

export class CommandManager {
    static createLine(core: CanvasCore, coors: number[]) {
        if (core && coors.length === 4) {
            let [x1, y1, x2, y2] = coors;
            core.addShape(new Line(x1, y1, x2, y2));
            this.renderCanvas(core);
        } else {
            this.reEnterMessage()
        }
    }

    static createRectangle(core: CanvasCore, coors: number[]) {
        if (core && coors.length === 4) {
            let [x1, y1, x2, y2] = coors;
            core.addShape(new Rectangle(x1, y1, x2, y2));
            this.renderCanvas(core);
        } else {
            this.reEnterMessage()
        }
    }

    static createBucket(core: CanvasCore, inputs: string[]) {
        if (inputs.length !== 3) {
            this.reEnterMessage();
        }
        let [xStr, yStr, color] = inputs;
        let x = Number(xStr);
        let y = Number(yStr);
        let isCoorsValid = this.isValidCoordinates([x, y])
        if (core && isCoorsValid) {
            core.addBucket(new BucketFill(x, y, color));
            this.renderCanvas(core);
        } else {
            this.reEnterMessage()
        }
    }

    static renderCanvas(core: CanvasCore) {
        if (core) {
            let border = Array(core.canvasWidth + 2).fill("-").join("")
            console.log(border);
            core.canvas.forEach(row => {
                console.log(`|${row.map(x => x.label || " ").join("")}|`);
            })
            console.log(border);
        }
    }

    static isValidCoordinates(coors: number[]) {
        return coors.every(x => Number.isInteger(x) && x >= 0)
    }

    static reEnterMessage() {
        console.log("I don't get that. Please type again!");
    }

}