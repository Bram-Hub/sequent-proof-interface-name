import ExprBase from "./ExprBase";

class ExprIf extends ExprBase {
    constructor(a: ExprBase, b: ExprBase) {
        super([a,b]);
    }
    public toString() {
        return '(' + this.values[0].toString() + ' -> ' + this.values[1].toString() + ')';
    }
    public toSaveString() {
        return '(if ' + this.values[0].toSaveString() + ' ' + this.values[1].toSaveString() + ')';
    }
}

export default ExprIf;
